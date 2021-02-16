

export const addProduct = (product) => {
  return {
      type: "ADD_PRODUCT",
      data: product
  }
}
export const deleteProduct = (product) => {
  return {
      type: "DELETE_PRODUCT",
      data: product
  }
}
