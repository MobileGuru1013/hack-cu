export const cleanCryptoData = (data) => {
  const recent = data.Data.reverse()

  let time = 0
  const last24 = recent.splice(0, 24)
  const current = last24.map(hour => {
    const dataPoint = [time, hour.close]
    time--
    return dataPoint
  })

  return [['time', 'price'], ...current]
}

export const weekCryptoData = (data) => {
  const recent = data.Data.reverse()

  let time = 0
  const week = recent.map(hour => {
    const dataPoint = [time, hour.close]
    time--
    return dataPoint
  })

  return [['time', 'price'], ...week]
}