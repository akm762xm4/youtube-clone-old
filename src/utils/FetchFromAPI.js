// export const FetchFromAPI = async (url) => {
//   const Base_URL = 'https://youtube-v31.p.rapidapi.com'
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '7794a38da6mshbbbcf3da6eea251p1b8aaajsn5b8ffc314cab',
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     },
//   }
//   const res = await fetch(`${Base_URL}/${url}`, options)
//   const data = await res.json()
//   return data
// }
//======================================================================================
export const FetchFromAPI = async (url) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7794a38da6mshbbbcf3da6eea251p1b8aaajsn5b8ffc314cab',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
  }
  const res = await fetch(
    `https://youtube138.p.rapidapi.com/search/?q=${url}&hl=en&gl=US`,
    options,
  )
  const data = await res.json()
  return data
}
