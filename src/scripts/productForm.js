// The productForm component that listens for when the submit button is pressed. When it is triggered, a new product should be POSTed to the API. It should import the ProductCollection component.
import productCollection from "./productCollection";
import productList from "./productList";

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

    const addProductButton = document.createElement("button");
    addProductButton.textContent = "Add Product";
    addProductButton.addEventListener("click", this.handleAddProduct);

    const productFormSection = document.createElement("section");
    productFormSection.appendChild(productNameLabel);
    productFormSection.appendChild(productNameInput);
    productFormSection.appendChild(productTypeLabel);
    productFormSection.appendChild(productTypeDropDown);
    productFormSection.appendChild(addProductButton);

    const displayContainer = document.querySelector("#display-container");
    displayContainer.appendChild(productFormSection);
  },
  handleAddProduct() {
    const productName = document.querySelector("#product-name-input").value;
    const productTypeId = document.querySelector("#product-type-input").value;

    console.log("Form values", productName, productTypeId);

    const newProduct = {
      name: productName,
      productTypeId: Number(productTypeId)
    };

    productCollection.postNewProduct(newProduct)
    .then(() => productList.listAllProducts());
  }
};

export default productForm;
