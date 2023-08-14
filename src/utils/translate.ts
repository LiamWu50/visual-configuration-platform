export function mod360(deg: number) {
  return (deg + 360) % 360
}

export function toPercent(val: number) {
  return val * 100 + '%'
}
