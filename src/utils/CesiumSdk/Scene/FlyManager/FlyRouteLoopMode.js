/**
 * 飞行循环模式枚举
 * @constructor
 * @enum
 */
function FlyRouteLoopMode() {}

/**
 * 飞行结束后停在终点
 * @type {Number}
 * @static
 * @constant
 */
FlyRouteLoopMode.STOP_AT_END = 0

/**
 * 飞行结束后飞行到起点再重新开始飞行
 * @static
 * @constant
 */
FlyRouteLoopMode.FLY_TO_START = 1

/**
 * 飞行结束后跳到起点再重新开始飞行
 * @static
 * @constant
 */
FlyRouteLoopMode.JUMP_TO_START = 2

export default Object.freeze(FlyRouteLoopMode)
