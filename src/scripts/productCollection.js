// The productCollection component that loads existing products from a json-server API, and saves new ones.
export default {
  getAllProducts() {
    return fetch("http://localhost:8088/products?_expand=productType").then(response =>
      response.json()
    );
  },
  getAllProductTypes() {
    return fetch("http://localhost:8088/productTypes").then(response =>
      response.json()
    );
  },
  postNewProduct(product) {
    return fetch("http://localhost:8088/products", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    }).then(response => response.json());
  }
};
