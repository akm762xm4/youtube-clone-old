export const getRelatedVids = async (Vid) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7794a38da6mshbbbcf3da6eea251p1b8aaajsn5b8ffc314cab',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
  }
  const res = await fetch(
    `https://youtube138.p.rapidapi.com/video/related-contents/?id=${Vid}&hl=en&gl=US'`,
    options,
  )
  const data = await res.json()
  return data
}
