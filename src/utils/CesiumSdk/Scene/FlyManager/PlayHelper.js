import * as Cesium from 'cesium/Cesium.js'
import CommonMath from '../../Auxiliary/Math/CommonMath'
import Position3 from '../../Auxiliary/Coordinate/Position3'
import FlyRoute from './FlyRoute'
import FlyStep from './FlyStep'
import FlyPlayState from './FlyPlayState'

function stepFromCurrentCamera(camera) {
  let cartographic = Cesium.Cartographic.fromCartesian(camera.position)
  let position = new Position3(
    Cesium.Math.toDegrees(cartographic.longitude),
    Cesium.Math.toDegrees(cartographic.latitude),
    cartographic.height
  )
  let step = new FlyStep(position, camera.heading, camera.pitch, camera.roll)
  return step
}

function raiseReachedStep(route, index, step) {
  route.onReachedStep.___e.raiseEvent({
    sender: route,
    stepIndex: index,
    step: step
  })
}

function raiseFlyStateChanged(route, newFlyState, oldFlyState) {
  if (newFlyState != oldFlyState) {
    route.onFlyStateChanged.___e.raiseEvent({
      sender: route,
      newFlyState,
      oldFlyState
    })
  }
}

/**
 * 播放辅助类
 * @private
 */
class PlayHelper {
  /**
   * 构造函数
   * @param {FlyRoute} route
   * @param {Cesium.Clock} clock
   * @param {Cesium.Camera} camera
   */
  constructor(route, clock, camera) {
    this._route = route
    this._clock = clock
    this._camera = camera
    this._speed = route.speed
    this._stepIndex = 0
    this._removeListenerAction = undefined
    this._pauseStep = undefined
  }

  play(stepIndex) {
    let oldFlyState = this._route.flyState
    if (oldFlyState == 1 || oldFlyState == 2) {
      // 停止或暂停状态下开始播放：
      stepIndex = Number(stepIndex)
      this._stepIndex = isNaN(stepIndex) ? 0 : stepIndex
      if (this._stepIndex >= 0 && this._stepIndex <= this._route.count - 2) {
        this._route._flyState = FlyPlayState.PLAY
        this._pauseStep = undefined
        // 触发飞行状态改变事件
        raiseFlyStateChanged(this._route, this._route._flyState, oldFlyState)
        // 开始飞行
        this._play()
      } else {
        this._route._flyState = FlyPlayState.STOP
        this._stepIndex = 0
        // 触发飞行状态改变事件
        raiseFlyStateChanged(this._route, this._route._flyState, oldFlyState)
      }
    }
  }

  stop() {
    let oldFlyState = this._route.flyState
    if (oldFlyState == FlyPlayState.PLAY) {
      // 在播放状态下停止
      if (this._removeListenerAction) {
        this._removeListenerAction()
        this._removeListenerAction = undefined
      }
    } else if (oldFlyState == FlyPlayState.PAUSE) {
      // 在暂停状态下停止
      this._pauseStep = undefined
    }
    this._stepIndex = 0
    this._route._flyState = FlyPlayState.STOP
    // 触发飞行状态改变事件
    raiseFlyStateChanged(this._route, this._route._flyState, oldFlyState)
  }

  pause() {
    let oldFlyState = this._route.flyState
    if (oldFlyState == FlyPlayState.PLAY) {
      if (this._removeListenerAction) {
        this._removeListenerAction()
        this._removeListenerAction = undefined
      }
      this._pauseStep = stepFromCurrentCamera(this._camera)
      this._route._flyState = FlyPlayState.PAUSE
      // 触发飞行状态改变事件
      raiseFlyStateChanged(this._route, this._route._flyState, oldFlyState)
    }
  }

  continue() {
    let oldFlyState = this._route.flyState
    if (oldFlyState == FlyPlayState.PAUSE) {
      if (this._stepIndex >= -1 && this._stepIndex <= this._route.count - 2) {
        // this._stepIndex = -1，说明是循环中终点向起点飞行时被暂停了
        let step = this._pauseStep
        this._pauseStep = undefined
        this._route._flyState = FlyPlayState.PLAY
        // 触发飞行状态改变事件
        raiseFlyStateChanged(this._route, this._route._flyState, oldFlyState)
        // 开始飞行
        this._play(step)
      } else {
        this._pauseStep = undefined
        this._route._flyState = FlyPlayState.STOP
        // 触发飞行状态改变事件
        raiseFlyStateChanged(this._route, this._route._flyState, oldFlyState)
      }
    }
  }

  _play(startStep, nextStep, isRaiseReached = true) {
    let self = this
    let step = startStep ? startStep : self._route.get(self._stepIndex)
    nextStep = nextStep ? nextStep : self._route.get(self._stepIndex + 1)

    // 触发到点事件
    if (isRaiseReached) {
      let reachedStepIndex = self._route.steps.indexOf(step)
      reachedStepIndex > -1 && raiseReachedStep(self._route, reachedStepIndex, step)
    }

    let xyzhpr_v = self._getXYZHPR_V(step, nextStep)
    // 若nextStep和xyzhpr_v出错，有可能是在循环终点往起点飞的时候改变了速度引起的self._stepIndex索引超界，这时需对_stepIndex模态化处理
    if (nextStep == undefined || xyzhpr_v == undefined) {
      self._stepIndex = ((self._stepIndex + 1) % self._route.count) - 1
      self._play(step)
    }
    // 如果该段飞行持续时间小于500毫秒，将nextStep往后移一步
    else if (xyzhpr_v.time < 0.5) {
      if (self._route.steps.indexOf(step) == 0 && self._route.steps.indexOf(nextStep) == self._route.count - 1) {
        // 如果当前站点是第一个，下一个站点是最后一步，则说明全部都跳过了，此时将飞行停止
        let oldFlyState = self._route._flyState
        self._stepIndex = 0
        self._route._flyState = FlyPlayState.STOP
        // 触发飞行状态改变事件
        raiseFlyStateChanged(self._route, self._route._flyState, oldFlyState)
        console.log(
          '当前飞行路线全程过短或者飞行速度过大，不能达到飞行条件，已被迫停止。请延长飞行路程或降低飞行速度后再试。'
        )
        return
      }
      self._stepIndex = (self._stepIndex + 1) % self._route.count // 只是飞行索引往前一步，但实际当前飞行站点没变
      let nextStepIndex = (self._stepIndex + 1) % self._route.count // 获取新的下一步的索引
      self._play(step, self._route.get(nextStepIndex), false)
    }
    // 正常飞行
    else {
      let { cartesian3, nextCartesian3, vX, vY, vZ, vH, vP, vR, time } = xyzhpr_v
      let timeOutAction = function() {
        self._setExtentTime(time)
        let onTickExection = function() {
          // 如果正在飞行时，速度改变了：
          if (self._speed != self._route.speed) {
            if (self._removeListenerAction) {
              self._removeListenerAction()
              self._removeListenerAction = undefined
            }
            let nIndex = (self._stepIndex + 1) % self._route.count
            self._stepIndex = nIndex - 1
            self._play(stepFromCurrentCamera(self._camera), self._route.get(nIndex))
          }
          // 速度没变就正常飞行
          else {
            let _currentTime = self._getCurrentTime()
            // let deltaTime = Cesium.JulianDate.secondsDifference(self._clock.currentTime, self._clock.startTime);
            let deltaTime = Cesium.JulianDate.secondsDifference(_currentTime, self._startTime)
            let deltaX = vX * deltaTime
            let deltaY = vY * deltaTime
            let deltaZ = vZ * deltaTime
            let deltaH = vH * deltaTime
            let deltaP = vP * deltaTime
            let deltaR = vR * deltaTime
            let deltaCartesian3 = new Cesium.Cartesian3(deltaX, deltaY, deltaZ)
            let destination = Cesium.Cartesian3.add(cartesian3, deltaCartesian3, new Cesium.Cartesian3())
            self._camera.setView({
              destination: destination,
              orientation: {
                heading: (step.heading + deltaH + Cesium.Math.TWO_PI) % Cesium.Math.TWO_PI,
                pitch: step.pitch + deltaP,
                roll: (step.roll + deltaR + Cesium.Math.TWO_PI) % Cesium.Math.TWO_PI
              }
            })
            // let compare = Cesium.JulianDate.compare(self._clock.currentTime, self._clock.stopTime);
            let compare = Cesium.JulianDate.compare(_currentTime, self._stopTime)

            // 一段飞行完成
            if (compare >= 0) {
              self._clock.onTick.removeEventListener(onTickExection)
              self._removeListenerAction = undefined
              self._stepIndex++

              let endStepIndex = self._route.count - 1
              // 没有到达终点
              if (self._stepIndex < endStepIndex) {
                self._play()
              }
              // 到达终点，开始判断循环模式
              else {
                // 触发到达终点事件
                let endStep = self._route.get(endStepIndex)
                raiseReachedStep(self._route, endStepIndex, endStep)

                // 飞到起点开始循环
                if (self._route.loopMode == 1) {
                  self._stepIndex = -1
                  endStep = endStep.clone()
                  let startStep = self._route.get(0).clone()
                  let h = CommonMath.getDirectionByTwoPosition3s(endStep.position, startStep.position)
                  endStep.heading = h
                  endStep.roll = 0
                  endStep.waitTime = 0
                  //startStep.heading = h;
                  startStep.roll = 0
                  startStep.waitTime = 0
                  self._play(endStep, startStep)
                }
                // 跳到起点开始循环
                else if (self._route.loopMode == 2) {
                  self._stepIndex = 0
                  self._play()
                }
                // 停在终点，self._route.loopMode == 0
                else {
                  let oldFlyState = self._route._flyState
                  self._stepIndex = 0
                  self._route._flyState = FlyPlayState.STOP
                  // 触发飞行状态改变事件
                  raiseFlyStateChanged(self._route, self._route._flyState, oldFlyState)
                }
              }
            }
          }
        }
        self._removeListenerAction = self._clock.onTick.addEventListener(onTickExection)
      }
      window.setTimeout(timeOutAction, step.waitTime * 1000)
    }
  }

  _getXYZHPR_V(fromStep, toStep) {
    let self = this
    try {
      let cartesian3 = Cesium.Cartesian3.fromDegrees(
        fromStep.position.longitude,
        fromStep.position.latitude,
        fromStep.position.altitude
      )
      let nextCartesian3 = Cesium.Cartesian3.fromDegrees(
        toStep.position.longitude,
        toStep.position.latitude,
        toStep.position.altitude
      )
      let distance = Cesium.Cartesian3.distance(cartesian3, nextCartesian3)
      self._speed = self._route.speed
      let speed = CommonMath.toMPreS(self._speed)
      let time = Number((distance / speed).toFixed(0))
      let vX = (nextCartesian3.x - cartesian3.x) / time
      let vY = (nextCartesian3.y - cartesian3.y) / time
      let vZ = (nextCartesian3.z - cartesian3.z) / time
      let vH = self._turnAngleRadians(fromStep.heading, toStep.heading) / time
      let vP = self._turnAngleRadians(fromStep.pitch, toStep.pitch) / time
      let vR = self._turnAngleRadians(fromStep.roll, toStep.roll) / time
      return {
        cartesian3,
        nextCartesian3,
        vX,
        vY,
        vZ,
        vH,
        vP,
        vR,
        time
      }
    } catch (e) {
      return undefined
    }
  }

  _setExtentTime(time) {
    // var startTime = Cesium.JulianDate.fromDate(new Date());
    // var stopTime = Cesium.JulianDate.addSeconds(startTime, time, new Cesium.JulianDate());
    // this._clock.startTime = startTime.clone(); // 开始时间
    // this._clock.stopTime = stopTime.clone(); // 结束时间
    // this._clock.currentTime = startTime.clone(); // 当前时间
    // this._clock.clockRange = Cesium.ClockRange.CLAMPED; // 行为方式
    // this._clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK; // 时钟设置为当前系统时间; 忽略所有其他设置。
    this._startTime = Cesium.JulianDate.fromDate(new Date())
    this._stopTime = Cesium.JulianDate.addSeconds(this._startTime, time, new Cesium.JulianDate())
  }

  _getCurrentTime() {
    return Cesium.JulianDate.now(new Cesium.JulianDate())
  }

  _turnAngleDegrees(fromAngle, toAngle) {
    let delta = toAngle - fromAngle
    if (delta > 180) {
      delta -= 360
    } else if (delta < -180) {
      delta += 360
    }
    return delta
  }

  _turnAngleRadians(fromAngle, toAngle) {
    let delta = toAngle - fromAngle
    if (delta > Math.PI) {
      delta -= Cesium.Math.TWO_PI
    } else if (delta < -Math.PI) {
      delta += Cesium.Math.TWO_PI
    }
    return delta
  }
}

export default PlayHelper
