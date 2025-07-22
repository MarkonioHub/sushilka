export const formatPrice = (price: string) => {
  if (price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'
  } else {
    return ""
  }
}
