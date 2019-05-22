export const compareData = (data) => {
  let min = +Infinity
  let max = -Infinity

  for(let i = 0; i < data.length; i++) {
    if (data[i][1] < min) min = data[i][1]
    if (data[i][1] > max) max = data[i][1]
  }

  const normalized = data.map(num => [num[0], normalize(num[1], min, max)])

  return normalized
}

const normalize = (num, min, max) => {
  let result = (num - min) / (max - min)

  return result
}

export const compareTwitterBit = (data) => {
  const recent = data.bitcoin.reverse()
  const last24 = recent.filter(item => item.hours_ago > -24)

  let min = +Infinity
  let max = -Infinity

  for(let i = 0; i < last24.length; i++) {
    if (last24[i].normalized_score < min) min = last24[i].normalized_score
    if (last24[i].normalized_score > max) max = last24[i].normalized_score
  }

  const normalized = last24.map(item => [item.hours_ago, normalize(item.normalized_score, min, max)])

  return normalized
}

export const compareTwitWeekBit = (data) => {
  const recent = data.bitcoin.reverse()
  const lastWeek = recent.filter(item => item.hours_ago > -168)

  let min = +Infinity
  let max = -Infinity

  for(let i = 0; i < lastWeek.length; i++) {
    if (lastWeek[i].normalized_score < min) min = lastWeek[i].normalized_score
    if (lastWeek[i].normalized_score > max) max = lastWeek[i].normalized_score
  }

  const normalized = lastWeek.map(item => [item.hours_ago, normalize(item.normalized_score, min, max)])

  return normalized 
}

export const compareTwitterEth = (data) => {  
  const recent = data.ethereum.reverse()
  const last24 = recent.filter(item => item.hours_ago > -24)

  let min = +Infinity
  let max = -Infinity

  for(let i = 0; i < last24.length; i++) {
    if (last24[i].normalized_score < min) min = last24[i].normalized_score
    if (last24[i].normalized_score > max) max = last24[i].normalized_score
  }

  const normalized = last24.map(item => [item.hours_ago, normalize(item.normalized_score, min, max)])

  return normalized
}

export const compareTwitWeekEth = (data) => {  
  const recent = data.ethereum.reverse()
  const lastWeek = recent.filter(item => item.hours_ago > -168)

  let min = +Infinity
  let max = -Infinity

  for(let i = 0; i < lastWeek.length; i++) {
    if (lastWeek[i].normalized_score < min) min = lastWeek[i].normalized_score
    if (lastWeek[i].normalized_score > max) max = lastWeek[i].normalized_score
  }

  const normalized = lastWeek.map(item => [item.hours_ago, normalize(item.normalized_score, min, max)])

  return normalized 
}

