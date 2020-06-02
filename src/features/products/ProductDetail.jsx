import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "./store/actions";
import { addProduct } from "../shoping-car/store/actions";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";

import Button from "../../ui/Button";
import Counter from "../../components/Counter";
import style from "./productDetail.module.css";

function ProductDetail({ addCar = () => {} }) {
  const [totalProducts, setTotalProducts] = useState(1);
  const dispatch = useDispatch();
  let { detail } = useParams();
  const currentProduct = useSelector((state) => state.products.productDetail);
  const productsAdded = useSelector((state) => state.shoppingCar.productsAdded);
  const productFound = productsAdded.find((product) => product.id == detail);

  const {
    producto: title,
    descripcion: description,
    lista_precios,
    producto_fotos,
  } = currentProduct;

  useEffect(() => {
    dispatch(getProductDetail(detail));
  }, [detail]);

  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //   },
  // ];

  console.log("currentProduct", currentProduct);

  const images =
    !!producto_fotos && !!producto_fotos.length
      ? producto_fotos.map(({ photo }) => {
          return {
            original: photo,
            thumbnail: photo,
          };
        })
      : false;

  return (
    <div className={style.productDetail}>
      {Object.entries(currentProduct).length > 0 ? (
        <>
          <div className={style.arrowTop}>
            {images && (
              <div>
                <ImageGallery items={images} />
              </div>
            )}
            <div>
              <h1>{title}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h2>
                S/
                {!!lista_precios &&
                  !!lista_precios.length &&
                  lista_precios[0] &&
                  lista_precios[0].precioventa &&
                  lista_precios[0].precioventa}{" "}
                x kg
              </h2>
              <Counter
                className="mb-20"
                watch={(value) => {
                  setTotalProducts(value);
                }}
                initialValue={productFound && productFound.total}
              />
              <Button
                className="mb-20"
                fullWidth
                primary
                onClick={() =>
                  dispatch(addProduct(currentProduct, totalProducts))
                }
              >
                AGREGAR AL CARRITO
              </Button>
              <div>
                <h3>Disponibilidad y tiempos de entrega</h3>
                <ul>
                  <li>Disponible para despachao a domicilio</li>
                  <li>Disponible para retiro en tu tienda seleccionada</li>
                  <li>Disponible para despacho express</li>
                </ul>
              </div>
            </div>
          </div>
          <div clasName={style.arrowBottom}>
            <h2>Descripcion del producto</h2>
            <p className={style.customP}>{description}</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      ) : (
        <h1>no hay datos</h1>
      )}
    </div>
  );
}

export default ProductDetail;
