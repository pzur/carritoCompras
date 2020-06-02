import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/actions";
import { addProduct } from "../shoping-car/store/actions";
import Search from "../../components/Search";
import CardProduct from "../../components/CardProduct";
import style from "./products.module.css";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={style.products}>
      <Search />
      <div className={style.grid}>
        {products.length > 0 ? (
          products.map((product) => (
            <CardProduct
              {...product}
              key={product.id}
              addProduct={() => dispatch(addProduct(product))}
            />
          ))
        ) : (
          <h2>No hay productos</h2>
        )}
      </div>
    </div>
  );
}

export default Products;
