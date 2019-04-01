// The productCollection component that loads existing products from a json-server API, and saves new ones.
export default {
  getAllProducts() {
    return fetch("http://localhost:8088/products")
    .then(response => response.json())
  }
}
