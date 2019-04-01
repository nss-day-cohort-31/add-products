// The productForm component that listens for when the submit button is pressed. When it is triggered, a new product should be POSTed to the API. It should import the ProductCollection component.
import ProductCollection from "./productCollection";
import productCollection from "./productCollection";

const productForm = {
  buildProductForm() {
    const productNameLabel = document.createElement("label");
    productNameLabel.textContent = "Product Name: ";

    const productNameInput = document.createElement("input");
    productNameInput.id = "product-name-input";

    const productTypeLabel = document.createElement("label");
    productTypeLabel.textContent = "Product Type: ";

    const productTypeDropDown = document.createElement("select");
    productTypeDropDown.setAttribute("id", "product-type-input");

    productCollection.getAllProductTypes().then(productTypesResponse => {
      // debugger
      productTypesResponse.forEach(productType => {
        const productTypeOption = document.createElement("option");
        productTypeOption.textContent = productType.name;
        productTypeOption.value = productType.id;

        productTypeDropDown.appendChild(productTypeOption);
      });
    });

    const productFormSection = document.createElement("section");
    productFormSection.appendChild(productNameLabel);
    productFormSection.appendChild(productNameInput);
    productFormSection.appendChild(productTypeLabel);
    productFormSection.appendChild(productTypeDropDown);

    const displayContainer = document.querySelector("#display-container");
    displayContainer.appendChild(productFormSection);
  }
};

export default productForm;
