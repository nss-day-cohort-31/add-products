// The product component that displays a a product's name and type.
export default {
  buildProduct(product) {
    // <article>
    //   <h3>Product Name</h3>
    //   <p>Product Type</p>
    // </article>

    const productArticle = document.createElement("article");

    const productHeader = document.createElement("h3");
    productHeader.textContent = product.name;

    const productParagraph = document.createElement("p");
    productParagraph.textContent = product.productType.name;

    productArticle.appendChild(productHeader);
    productArticle.appendChild(productParagraph);

    return productArticle;
  }
};
