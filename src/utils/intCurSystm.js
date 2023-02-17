const IntCurSystm = (views) => {
  // IntCurSystm stands for: 'Convert To International Currency System'
  // Nine Zeroes for Billions
  return Math.abs(Number(views)) >= 1.0e9
    ? (Math.abs(Number(views)) / 1.0e9).toFixed(2) + 'B'
    : // Six Zeroes for Millions
    Math.abs(Number(views)) >= 1.0e6
    ? (Math.abs(Number(views)) / 1.0e6).toFixed(2) + 'M'
    : // Three Zeroes for Thousands
    Math.abs(Number(views)) >= 1.0e3
    ? (Math.abs(Number(views)) / 1.0e3).toFixed(2) + 'K'
    : Math.abs(Number(views))
}
export default IntCurSystm
