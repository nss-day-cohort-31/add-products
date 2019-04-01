// The productList component that displays all products. It should import the Product component and the ProductCollection component.
import productCollection from "./productCollection";
import product from "./product";

export default {
  listAllProducts() {
    productCollection.getAllProducts().then(productsResponse => {
      console.log(productsResponse);

      const productsSection = document.createElement("section");

      productsResponse.forEach((theProduct, indexNumber) => {
        const productHTML = product.buildProduct(theProduct);
        productsSection.appendChild(productHTML);
      });

      const displayContainer = document.querySelector("#display-container");
      displayContainer.appendChild(productsSection);
    });
  }
};
