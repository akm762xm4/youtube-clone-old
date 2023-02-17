const SecToHMS = (seconds) => {
  if (seconds <= 3600) {
    const MM_SS = new Date(seconds * 1000).toISOString().slice(14, 19)
    return MM_SS
  } else {
    const HH_MM_SS = new Date(seconds * 1000).toISOString().slice(11, 19)
    return HH_MM_SS
  }
}
export default SecToHMS
