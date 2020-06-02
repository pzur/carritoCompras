import { SET_PRODUCTS, SET_PRODUCT_DETAIL } from "./constans";

function setProducts(payload) {
  return {
    type: SET_PRODUCTS,
    payload,
  };
}

function setProductDetail(payload) {
  return {
    type: SET_PRODUCT_DETAIL,
    payload,
  };
}

function getProducts() {
  return function (dispatch) {
    fetch("https://carallenglish.herokuapp.com/apis_product/List_Products")
      .then((response) => response.json())
      .then((products) => dispatch(setProducts(products)));
  };
}

function getProductDetail(id) {
  return function (dispatch) {
    fetch(`http://localhost:3000/product-detail/${id}`)
      .then((response) => response.json())
      .then((product) => dispatch(setProductDetail(product)));
  };
}

export { setProducts, setProductDetail, getProducts, getProductDetail };
