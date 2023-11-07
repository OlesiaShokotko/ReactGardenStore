import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.css";
import { useSelector } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { ReactComponent as CartIcon } from "../../components/icons/cart_icon.svg";
import { ReactComponent as MainLogo } from "../../components/icons/main_logo.svg";
import Button from "../UI/Button/Button";
import { useState } from "react";

export default function Header() {
  const shoppingCart = useSelector((store) => store.shoppingCart);
  const count = shoppingCart?.reduce((sum, item) => sum + item.count, 0);
  const location = useLocation();

  const menu = [
    { id: 1, title: "Main Page", link: "/" },
    { id: 2, title: "All products", link: "/products/all" },
    { id: 3, title: "All sales", link: "/products/sale" },
  ];

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div className={s.container}>
      <div className={s.main}>
        <Link to={"/"}>
          <MainLogo />
        </Link>
        <Link to={"/categories"}>
          <Button title={"Catalog"} styleBtn={"header_button"} />
        </Link>
      </div>
      <div className={s.menu}>
        <ul className={s.menu_wrapper}>
          {menu.map((elem) => (
            <Link
              className={
                location.pathname === elem.link
                  ? `${s.menu_item} ${s.elem_green}`
                  : `${s.menu_item}`
              }
              to={elem.link}
              key={elem.id}
            >
              <li>{elem.title}</li>
            </Link>
          ))}
        </ul>
        <Link className={s.link_style} to={"/cart"}>
          <div className={s.cart_icon_container}>
            <CartIcon />
            <span className={s.cart_count}>{count}</span>
          </div>
        </Link>
        <div className={s.burger_menu} onClick={toggleBurgerMenu}>
          <BiMenu size={24} color="#000" />
        </div>
      </div>
      {isBurgerMenuOpen && (
        <ul className={s.burger_menu_wrapper}>
          {menu.map((elem) => (
            <Link
              className={s.burger_menu_item}
              to={elem.link}
              key={elem.id}
              onClick={toggleBurgerMenu}
            >
              <li>{elem.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
