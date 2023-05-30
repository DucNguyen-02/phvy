export const formatToPrice = (n = 0) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
