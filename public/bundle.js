(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import the ProductList component and the ProductForm component.
_productList.default.listAllProducts();

},{"./productList":4}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9wcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7Ozs7QUFEQTtBQUdBLHFCQUFZLGVBQVo7Ozs7Ozs7OztBQ0hBO2VBQ2U7QUFDYixFQUFBLFlBQVksQ0FBQyxPQUFELEVBQVU7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFFQSxVQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUF2QjtBQUVBLFVBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQXRCO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxHQUE0QixPQUFPLENBQUMsSUFBcEM7QUFFQSxVQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQXpCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixHQUErQixPQUFPLENBQUMsYUFBdkM7QUFFQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLGFBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixnQkFBM0I7QUFFQSxXQUFPLGNBQVA7QUFDRDs7QUFuQlksQzs7Ozs7Ozs7OztBQ0RmO2VBQ2U7QUFDYixFQUFBLGNBQWMsR0FBRztBQUNmLFdBQU8sS0FBSyxDQUFDLGdDQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVEOztBQUpZLEM7Ozs7Ozs7Ozs7O0FDQWY7O0FBQ0E7Ozs7QUFGQTtlQUllO0FBQ2IsRUFBQSxlQUFlLEdBQUc7QUFDaEIsK0JBQWtCLGNBQWxCLEdBQW1DLElBQW5DLENBQXdDLGdCQUFnQixJQUFJO0FBQzFELE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxnQkFBWjtBQUVBLFlBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXhCO0FBRUEsTUFBQSxnQkFBZ0IsQ0FBQyxPQUFqQixDQUF5QixDQUFDLFVBQUQsRUFBYSxXQUFiLEtBQTZCO0FBQ3BELGNBQU0sV0FBVyxHQUFHLGlCQUFRLFlBQVIsQ0FBcUIsVUFBckIsQ0FBcEI7O0FBQ0EsUUFBQSxlQUFlLENBQUMsV0FBaEIsQ0FBNEIsV0FBNUI7QUFDRCxPQUhEO0FBS0EsWUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFDQSxNQUFBLGdCQUFnQixDQUFDLFdBQWpCLENBQTZCLGVBQTdCO0FBQ0QsS0FaRDtBQWFEOztBQWZZLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbXBvcnQgdGhlIFByb2R1Y3RMaXN0IGNvbXBvbmVudCBhbmQgdGhlIFByb2R1Y3RGb3JtIGNvbXBvbmVudC5cbmltcG9ydCBwcm9kdWN0TGlzdCBmcm9tIFwiLi9wcm9kdWN0TGlzdFwiO1xuXG5wcm9kdWN0TGlzdC5saXN0QWxsUHJvZHVjdHMoKTtcbiIsIi8vIFRoZSBwcm9kdWN0IGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGEgYSBwcm9kdWN0J3MgbmFtZSBhbmQgdHlwZS5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYnVpbGRQcm9kdWN0KHByb2R1Y3QpIHtcbiAgICAvLyA8YXJ0aWNsZT5cbiAgICAvLyAgIDxoMz5Qcm9kdWN0IE5hbWU8L2gzPlxuICAgIC8vICAgPHA+UHJvZHVjdCBUeXBlPC9wPlxuICAgIC8vIDwvYXJ0aWNsZT5cblxuICAgIGNvbnN0IHByb2R1Y3RBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG5cbiAgICBjb25zdCBwcm9kdWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2R1Y3RIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9kdWN0Lm5hbWU7XG5cbiAgICBjb25zdCBwcm9kdWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvZHVjdFBhcmFncmFwaC50ZXh0Q29udGVudCA9IHByb2R1Y3QucHJvZHVjdFR5cGVJZDtcblxuICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RIZWFkZXIpO1xuICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RQYXJhZ3JhcGgpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RBcnRpY2xlO1xuICB9XG59O1xuIiwiLy8gVGhlIHByb2R1Y3RDb2xsZWN0aW9uIGNvbXBvbmVudCB0aGF0IGxvYWRzIGV4aXN0aW5nIHByb2R1Y3RzIGZyb20gYSBqc29uLXNlcnZlciBBUEksIGFuZCBzYXZlcyBuZXcgb25lcy5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0QWxsUHJvZHVjdHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Byb2R1Y3RzXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9XG59XG4iLCIvLyBUaGUgcHJvZHVjdExpc3QgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgYWxsIHByb2R1Y3RzLiBJdCBzaG91bGQgaW1wb3J0IHRoZSBQcm9kdWN0IGNvbXBvbmVudCBhbmQgdGhlIFByb2R1Y3RDb2xsZWN0aW9uIGNvbXBvbmVudC5cbmltcG9ydCBwcm9kdWN0Q29sbGVjdGlvbiBmcm9tIFwiLi9wcm9kdWN0Q29sbGVjdGlvblwiO1xuaW1wb3J0IHByb2R1Y3QgZnJvbSBcIi4vcHJvZHVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3RBbGxQcm9kdWN0cygpIHtcbiAgICBwcm9kdWN0Q29sbGVjdGlvbi5nZXRBbGxQcm9kdWN0cygpLnRoZW4ocHJvZHVjdHNSZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9kdWN0c1Jlc3BvbnNlKTtcblxuICAgICAgY29uc3QgcHJvZHVjdHNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICAgIHByb2R1Y3RzUmVzcG9uc2UuZm9yRWFjaCgodGhlUHJvZHVjdCwgaW5kZXhOdW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdEhUTUwgPSBwcm9kdWN0LmJ1aWxkUHJvZHVjdCh0aGVQcm9kdWN0KTtcbiAgICAgICAgcHJvZHVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKHByb2R1Y3RIVE1MKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdHNTZWN0aW9uKTtcbiAgICB9KTtcbiAgfVxufTtcbiJdfQ==
