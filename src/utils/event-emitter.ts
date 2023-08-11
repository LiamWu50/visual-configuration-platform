class EventEmitter {
  private events: Record<string, Function[]> = {}

  // 监听事件
  on(eventName: string, callback: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    if (!this.events[eventName].includes(callback)) {
      this.events[eventName].push(callback)
    }
  }

  // 取消监听事件
  off(eventName: string, callback: Function) {
    const eventCallbacks = this.events[eventName]
    if (eventCallbacks) {
      this.events[eventName] = eventCallbacks.filter(
        (item) => item !== callback
      )
    }
  }

  // 触发事件
  emit(eventName: string, arg?: any) {
    const eventCallbacks = this.events[eventName]
    if (eventCallbacks && eventCallbacks.length > 0) {
      for (const callback of eventCallbacks) {
        callback(arg)
      }
    } else {
      console.log(`no listener for event: ${eventName}`)
    }
  }

  // 只监听一次事件
  once(eventName: string, callback: Function) {
    const onceCallback = (arg: any) => {
      callback(arg)
      this.off(eventName, onceCallback)
    }
    this.on(eventName, onceCallback)
  }
}

export default new EventEmitter()
