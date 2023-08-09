/**
 * 播放状态的枚举
 * @constructor
 * @enum
 */
function FlyPlayState() {}

/**
 * 播放状态
 * @type {Number}
 * @static
 * @constant
 */
FlyPlayState.PLAY = 0

/**
 * 停止状态
 * @type {Number}
 * @static
 * @constant
 */
FlyPlayState.STOP = 1

/**
 * 暂停状态
 * @type {Number}
 * @static
 * @constant
 */
FlyPlayState.PAUSE = 2

export default Object.freeze(FlyPlayState)
