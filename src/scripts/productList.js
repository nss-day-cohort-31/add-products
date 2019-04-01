// The productList component that displays all products. It should import the Product component and the ProductCollection component.
import productCollection from "./productCollection";
import product from "./product";

export default {
  listAllProducts() {
    productCollection.getAllProducts().then(productsResponse => {
      console.log(productsResponse);

      const productsFragment = document.createDocumentFragment();

      productsResponse.forEach((theProduct, indexNumber) => {
        const productHTML = product.buildProduct(theProduct);
        productsFragment.appendChild(productHTML);
      });

      const productsSection = document.querySelector("#products-section");

      while (productsSection.firstChild) {
        productsSection.removeChild(productsSection.firstChild);
      }

      productsSection.appendChild(productsFragment);
    });
  },
  setupProductsContainer() {
    const productsSection = document.createElement("section");
    productsSection.id = "products-section"
    const displayContainer = document.querySelector("#display-container");
    displayContainer.appendChild(productsSection);
  }
};
