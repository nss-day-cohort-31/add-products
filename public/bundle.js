(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _productList = _interopRequireDefault(require("./productList"));

var _productForm = _interopRequireDefault(require("./productForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import the ProductList component and the ProductForm component.
_productList.default.listAllProducts();

_productForm.default.buildProductForm();

},{"./productForm":4,"./productList":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// The product component that displays a a product's name and type.
var _default = {
  buildProduct(product) {
    // <article>
    //   <h3>Product Name</h3>
    //   <p>Product Type</p>
    // </article>
    const productArticle = document.createElement("article");
    const productHeader = document.createElement("h3");
    productHeader.textContent = product.name;
    const productParagraph = document.createElement("p");
    productParagraph.textContent = product.productTypeId;
    productArticle.appendChild(productHeader);
    productArticle.appendChild(productParagraph);
    return productArticle;
  }

};
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// The productCollection component that loads existing products from a json-server API, and saves new ones.
var _default = {
  getAllProducts() {
    return fetch("http://localhost:8088/products").then(response => response.json());
  },

  getAllProductTypes() {
    return fetch("http://localhost:8088/productTypes").then(response => response.json());
  }

};
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productCollection = _interopRequireDefault(require("./productCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The productForm component that listens for when the submit button is pressed. When it is triggered, a new product should be POSTed to the API. It should import the ProductCollection component.
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

    _productCollection.default.getAllProductTypes().then(productTypesResponse => {
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
var _default = productForm;
exports.default = _default;

},{"./productCollection":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productCollection = _interopRequireDefault(require("./productCollection"));

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The productList component that displays all products. It should import the Product component and the ProductCollection component.
var _default = {
  listAllProducts() {
    _productCollection.default.getAllProducts().then(productsResponse => {
      console.log(productsResponse);
      const productsSection = document.createElement("section");
      productsResponse.forEach((theProduct, indexNumber) => {
        const productHTML = _product.default.buildProduct(theProduct);

        productsSection.appendChild(productHTML);
      });
      const displayContainer = document.querySelector("#display-container");
      displayContainer.appendChild(productsSection);
    });
  }

};
exports.default = _default;

},{"./product":2,"./productCollection":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBOztBQUNBOzs7O0FBRkE7QUFJQSxxQkFBWSxlQUFaOztBQUNBLHFCQUFZLGdCQUFaOzs7Ozs7Ozs7QUNMQTtlQUNlO0FBQ2IsRUFBQSxZQUFZLENBQUMsT0FBRCxFQUFVO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBRUEsVUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBdkI7QUFFQSxVQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF0QjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsR0FBNEIsT0FBTyxDQUFDLElBQXBDO0FBRUEsVUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUF6QjtBQUNBLElBQUEsZ0JBQWdCLENBQUMsV0FBakIsR0FBK0IsT0FBTyxDQUFDLGFBQXZDO0FBRUEsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixhQUEzQjtBQUNBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsZ0JBQTNCO0FBRUEsV0FBTyxjQUFQO0FBQ0Q7O0FBbkJZLEM7Ozs7Ozs7Ozs7QUNEZjtlQUNlO0FBQ2IsRUFBQSxjQUFjLEdBQUc7QUFDZixXQUFPLEtBQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ04sSUFETSxDQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURYLENBQVA7QUFFRCxHQUpZOztBQUtiLEVBQUEsa0JBQWtCLEdBQUc7QUFDbkIsV0FBTyxLQUFLLENBQUMsb0NBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxDQUFQO0FBRUQ7O0FBUlksQzs7Ozs7Ozs7Ozs7QUNBZjs7OztBQURBO0FBSUEsTUFBTSxXQUFXLEdBQUc7QUFDbEIsRUFBQSxnQkFBZ0IsR0FBRztBQUNqQixVQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQXpCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixHQUErQixnQkFBL0I7QUFFQSxVQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQXpCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxFQUFqQixHQUFzQixvQkFBdEI7QUFFQSxVQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQXpCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixHQUErQixnQkFBL0I7QUFFQSxVQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQTVCO0FBQ0EsSUFBQSxtQkFBbUIsQ0FBQyxZQUFwQixDQUFpQyxJQUFqQyxFQUF1QyxvQkFBdkM7O0FBRUEsK0JBQWtCLGtCQUFsQixHQUF1QyxJQUF2QyxDQUE0QyxvQkFBb0IsSUFBSTtBQUNsRTtBQUNBLE1BQUEsb0JBQW9CLENBQUMsT0FBckIsQ0FBNkIsV0FBVyxJQUFJO0FBQzFDLGNBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBMUI7QUFDQSxRQUFBLGlCQUFpQixDQUFDLFdBQWxCLEdBQWdDLFdBQVcsQ0FBQyxJQUE1QztBQUNBLFFBQUEsaUJBQWlCLENBQUMsS0FBbEIsR0FBMEIsV0FBVyxDQUFDLEVBQXRDO0FBRUEsUUFBQSxtQkFBbUIsQ0FBQyxXQUFwQixDQUFnQyxpQkFBaEM7QUFDRCxPQU5EO0FBT0QsS0FURDs7QUFXQSxVQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQTNCO0FBQ0EsSUFBQSxrQkFBa0IsQ0FBQyxXQUFuQixDQUErQixnQkFBL0I7QUFDQSxJQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLGdCQUEvQjtBQUNBLElBQUEsa0JBQWtCLENBQUMsV0FBbkIsQ0FBK0IsZ0JBQS9CO0FBQ0EsSUFBQSxrQkFBa0IsQ0FBQyxXQUFuQixDQUErQixtQkFBL0I7QUFFQSxVQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUNBLElBQUEsZ0JBQWdCLENBQUMsV0FBakIsQ0FBNkIsa0JBQTdCO0FBQ0Q7O0FBakNpQixDQUFwQjtlQW9DZSxXOzs7Ozs7Ozs7OztBQ3ZDZjs7QUFDQTs7OztBQUZBO2VBSWU7QUFDYixFQUFBLGVBQWUsR0FBRztBQUNoQiwrQkFBa0IsY0FBbEIsR0FBbUMsSUFBbkMsQ0FBd0MsZ0JBQWdCLElBQUk7QUFDMUQsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGdCQUFaO0FBRUEsWUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBeEI7QUFFQSxNQUFBLGdCQUFnQixDQUFDLE9BQWpCLENBQXlCLENBQUMsVUFBRCxFQUFhLFdBQWIsS0FBNkI7QUFDcEQsY0FBTSxXQUFXLEdBQUcsaUJBQVEsWUFBUixDQUFxQixVQUFyQixDQUFwQjs7QUFDQSxRQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixXQUE1QjtBQUNELE9BSEQ7QUFLQSxZQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUNBLE1BQUEsZ0JBQWdCLENBQUMsV0FBakIsQ0FBNkIsZUFBN0I7QUFDRCxLQVpEO0FBYUQ7O0FBZlksQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEltcG9ydCB0aGUgUHJvZHVjdExpc3QgY29tcG9uZW50IGFuZCB0aGUgUHJvZHVjdEZvcm0gY29tcG9uZW50LlxuaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3RMaXN0XCI7XG5pbXBvcnQgcHJvZHVjdEZvcm0gZnJvbSBcIi4vcHJvZHVjdEZvcm1cIjtcblxucHJvZHVjdExpc3QubGlzdEFsbFByb2R1Y3RzKCk7XG5wcm9kdWN0Rm9ybS5idWlsZFByb2R1Y3RGb3JtKCk7XG4iLCIvLyBUaGUgcHJvZHVjdCBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBhIGEgcHJvZHVjdCdzIG5hbWUgYW5kIHR5cGUuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJ1aWxkUHJvZHVjdChwcm9kdWN0KSB7XG4gICAgLy8gPGFydGljbGU+XG4gICAgLy8gICA8aDM+UHJvZHVjdCBOYW1lPC9oMz5cbiAgICAvLyAgIDxwPlByb2R1Y3QgVHlwZTwvcD5cbiAgICAvLyA8L2FydGljbGU+XG5cbiAgICBjb25zdCBwcm9kdWN0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuXG4gICAgY29uc3QgcHJvZHVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9kdWN0SGVhZGVyLnRleHRDb250ZW50ID0gcHJvZHVjdC5uYW1lO1xuXG4gICAgY29uc3QgcHJvZHVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2R1Y3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBwcm9kdWN0LnByb2R1Y3RUeXBlSWQ7XG5cbiAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0SGVhZGVyKTtcbiAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0UGFyYWdyYXBoKTtcblxuICAgIHJldHVybiBwcm9kdWN0QXJ0aWNsZTtcbiAgfVxufTtcbiIsIi8vIFRoZSBwcm9kdWN0Q29sbGVjdGlvbiBjb21wb25lbnQgdGhhdCBsb2FkcyBleGlzdGluZyBwcm9kdWN0cyBmcm9tIGEganNvbi1zZXJ2ZXIgQVBJLCBhbmQgc2F2ZXMgbmV3IG9uZXMuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEFsbFByb2R1Y3RzKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0c1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcbiAgZ2V0QWxsUHJvZHVjdFR5cGVzKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0VHlwZXNcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH1cbn1cbiIsIi8vIFRoZSBwcm9kdWN0Rm9ybSBjb21wb25lbnQgdGhhdCBsaXN0ZW5zIGZvciB3aGVuIHRoZSBzdWJtaXQgYnV0dG9uIGlzIHByZXNzZWQuIFdoZW4gaXQgaXMgdHJpZ2dlcmVkLCBhIG5ldyBwcm9kdWN0IHNob3VsZCBiZSBQT1NUZWQgdG8gdGhlIEFQSS4gSXQgc2hvdWxkIGltcG9ydCB0aGUgUHJvZHVjdENvbGxlY3Rpb24gY29tcG9uZW50LlxuaW1wb3J0IFByb2R1Y3RDb2xsZWN0aW9uIGZyb20gXCIuL3Byb2R1Y3RDb2xsZWN0aW9uXCI7XG5pbXBvcnQgcHJvZHVjdENvbGxlY3Rpb24gZnJvbSBcIi4vcHJvZHVjdENvbGxlY3Rpb25cIjtcblxuY29uc3QgcHJvZHVjdEZvcm0gPSB7XG4gIGJ1aWxkUHJvZHVjdEZvcm0oKSB7XG4gICAgY29uc3QgcHJvZHVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcm9kdWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9kdWN0IE5hbWU6IFwiO1xuXG4gICAgY29uc3QgcHJvZHVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9kdWN0TmFtZUlucHV0LmlkID0gXCJwcm9kdWN0LW5hbWUtaW5wdXRcIjtcblxuICAgIGNvbnN0IHByb2R1Y3RUeXBlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvZHVjdFR5cGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvZHVjdCBUeXBlOiBcIjtcblxuICAgIGNvbnN0IHByb2R1Y3RUeXBlRHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByb2R1Y3RUeXBlRHJvcERvd24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9kdWN0LXR5cGUtaW5wdXRcIik7XG5cbiAgICBwcm9kdWN0Q29sbGVjdGlvbi5nZXRBbGxQcm9kdWN0VHlwZXMoKS50aGVuKHByb2R1Y3RUeXBlc1Jlc3BvbnNlID0+IHtcbiAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICBwcm9kdWN0VHlwZXNSZXNwb25zZS5mb3JFYWNoKHByb2R1Y3RUeXBlID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdFR5cGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcm9kdWN0VHlwZU9wdGlvbi50ZXh0Q29udGVudCA9IHByb2R1Y3RUeXBlLm5hbWU7XG4gICAgICAgIHByb2R1Y3RUeXBlT3B0aW9uLnZhbHVlID0gcHJvZHVjdFR5cGUuaWQ7XG5cbiAgICAgICAgcHJvZHVjdFR5cGVEcm9wRG93bi5hcHBlbmRDaGlsZChwcm9kdWN0VHlwZU9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2R1Y3RGb3JtU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHByb2R1Y3RGb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9kdWN0TmFtZUxhYmVsKTtcbiAgICBwcm9kdWN0Rm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvZHVjdE5hbWVJbnB1dCk7XG4gICAgcHJvZHVjdEZvcm1TZWN0aW9uLmFwcGVuZENoaWxkKHByb2R1Y3RUeXBlTGFiZWwpO1xuICAgIHByb2R1Y3RGb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9kdWN0VHlwZURyb3BEb3duKTtcblxuICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXktY29udGFpbmVyXCIpO1xuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdEZvcm1TZWN0aW9uKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdEZvcm07XG4iLCIvLyBUaGUgcHJvZHVjdExpc3QgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgYWxsIHByb2R1Y3RzLiBJdCBzaG91bGQgaW1wb3J0IHRoZSBQcm9kdWN0IGNvbXBvbmVudCBhbmQgdGhlIFByb2R1Y3RDb2xsZWN0aW9uIGNvbXBvbmVudC5cbmltcG9ydCBwcm9kdWN0Q29sbGVjdGlvbiBmcm9tIFwiLi9wcm9kdWN0Q29sbGVjdGlvblwiO1xuaW1wb3J0IHByb2R1Y3QgZnJvbSBcIi4vcHJvZHVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RBbGxQcm9kdWN0cygpIHtcbiAgICBwcm9kdWN0Q29sbGVjdGlvbi5nZXRBbGxQcm9kdWN0cygpLnRoZW4ocHJvZHVjdHNSZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9kdWN0c1Jlc3BvbnNlKTtcblxuICAgICAgY29uc3QgcHJvZHVjdHNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICAgIHByb2R1Y3RzUmVzcG9uc2UuZm9yRWFjaCgodGhlUHJvZHVjdCwgaW5kZXhOdW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdEhUTUwgPSBwcm9kdWN0LmJ1aWxkUHJvZHVjdCh0aGVQcm9kdWN0KTtcbiAgICAgICAgcHJvZHVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKHByb2R1Y3RIVE1MKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdHNTZWN0aW9uKTtcbiAgICB9KTtcbiAgfVxufTtcbiJdfQ==
