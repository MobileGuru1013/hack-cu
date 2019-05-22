export const getFeedback = async () => {
  const text = 'this is some text to analyze'
  const url = `https://cors-anywhere.herokuapp.com/https://hackcuv4.herokuapp.com/api/v1/sentiment?text=${text}`
  
  try {
    const response = await fetch(url)
    if (response.status < 300) {
      return await response.json()
      
    } else {
      throw new Error ('could not get feedback')
    }
  } catch (error) {
    throw error
  }
}

export const getPrices = async(code) => {
  const response = await fetch(`https://min-api.cryptocompare.com/data/histohour?fsym=${code}&tsym=USD`)

  return await response.json()
}

export const allTwitter = async() => {
  const response = await fetch('https://cors-anywhere.herokuapp.com/http://hackcuv4.herokuapp.com/api/v1/hour_sentiment')

  return await response.json()
}


