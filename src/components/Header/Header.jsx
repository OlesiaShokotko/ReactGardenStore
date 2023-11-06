import { Link } from "react-router-dom";
import s from "./Header.module.css";
import { useSelector } from "react-redux";
import { ReactComponent as CartIcon } from "../../components/icons/cart_icon.svg";
import { ReactComponent as MainLogo } from "../../components/icons/main_logo.svg";
import Button from "../UI/Button/Button";

export default function Header() {
  const shoppingCart = useSelector((store) => store.shoppingCart);
  const count = shoppingCart?.reduce((sum, item) => sum + item.count, 0);

  const menu = [
    { id: 1, title: "Main Page", link: "/" },
    { id: 2, title: "All products", link: "/products/all" },
    { id: 3, title: "All sales", link: "/products/sale" },
  ];

  return (
    <div className={s.container}>
      <div className={s.main}>
        <Link className={s.link_style} to={"/"}>
          <MainLogo />
        </Link>
        <Link className={s.link_style} to={"/categories"}>
          <Button title={"Catalog"} styleBtn={"header_button"} />
        </Link>
      </div>
      <div className={s.menu}>
        <ul className={s.menu_wrapper}>
          {menu.map((elem) => (
            <Link className={s.menu_item} to={elem.link} key={elem.id}>
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
      </div>
    </div>
  );
}
