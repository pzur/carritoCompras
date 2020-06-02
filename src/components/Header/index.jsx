import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { logout } from "../../features/auth/store/actions";

import NavUser from "../NavUser";
import NavShoppingCar from "../NavShoppingCar";
import Categories from "../Categories";
import "./Header.scss";

function Header({ className }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.auth.user);
  return (
    <header className={classNames("header", className)}>
      <div className="container">
        <div className="header__top flex jc-between ai-center">
          <a href="/">CARRITO DE COMPRA</a>
          <div className="header__row">
            <NavUser
              text={user ? user : "Ingresar"}
              items={
                user
                  ? [
                      {
                        href: "/logout",
                        text: "Logout",
                        cb: (e) => {
                          e.preventDefault();
                          dispatch(logout());
                          history.replace("login");
                        },
                      },
                    ]
                  : [{ href: "/register", text: "Registrar", cb: () => {} }]
              }
            />
            <NavShoppingCar className="header__navShopping" />
          </div>
        </div>
        <div className="header__bottom">
          <Categories
            categories={[
              {
                href: "/",
                text: "Todos",
              },
              {
                href: "/carnes",
                text: "Carnes",
              },
              {
                href: "/avicola",
                text: "Avicola",
              },
              {
                href: "/dulces",
                text: "Dulces",
              },
            ]}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
