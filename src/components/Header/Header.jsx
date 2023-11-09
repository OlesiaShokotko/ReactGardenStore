import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.css";
import { useSelector } from "react-redux";
import { MdClear, MdMenu } from "react-icons/md";
import { ReactComponent as CartIcon } from "../../components/icons/cart_icon.svg";
import { ReactComponent as MainLogo } from "../../components/icons/main_logo.svg";
import Button from "../UI/Button/Button";
import { useEffect, useRef, useState } from "react";


export default function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const shoppingCart = useSelector((store) => store.shoppingCart);

  const count = shoppingCart?.reduce((sum, item) => sum + item.count, 0);

  const location = useLocation();

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsBurgerMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const menu = [
    { id: 1, title: "Main Page", link: "/" },
    { id: 2, title: "All products", link: "/products/all" },
    { id: 3, title: "All sales", link: "/products/sale" },
  ];

  const handleBurgerMenuClick = (event) => {
    event.stopPropagation();
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.left_wrapper}>
          <Link to={"/"}>
            <MainLogo className={s.logo} />
          </Link>
          <Link to={"/categories"}>
            <Button title={"Catalog"} styleBtn={"header_button"} />
          </Link>
        </div>
        <div className={s.right_wrapper}>
          <nav
            className={`${s.header_nav} ${isBurgerMenuOpen ? s.active : ""}`}
            ref={menuRef}
          >
            <div
              className={s.close_icon_mobile}
              onClick={handleBurgerMenuClick}
            >
              <MdClear size={40} color="#000" />
            </div>
            <ul className={s.header_nav_list}>
              {menu.map((elem) => (
                <Link
                  className={
                    location.pathname === elem.link
                      ? `${s.header_nav_item} ${s.elem_green}`
                      : `${s.header_nav_item}`
                  }
                  to={elem.link}
                  key={elem.id}
                  onClick={() => setIsBurgerMenuOpen(false)}
                >
                  <li>{elem.title}</li>
                </Link>
              ))}
            </ul>
          </nav>

          <div className={s.cart}>
            <Link className={s.link_style} to={"/cart"}>
              <div className={s.cart_icon_container}>
                <CartIcon />
                <span className={s.cart_count}>{count}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className={s.burger_menu} onClick={handleBurgerMenuClick}>
          <MdMenu size={40} color="#000" />
        </div>
      </div>
    </div>
  );
}
