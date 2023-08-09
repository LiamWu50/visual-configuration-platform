function defaultValue<T>(value: T | undefined, defaultValue: T): T {
  return value !== undefined ? value : defaultValue
}

export default defaultValue
