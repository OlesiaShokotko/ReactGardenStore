import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { shoppingCartReducer } from '../../store/reducer/shoppingCartReducer';
import { useSelector } from 'react-redux';


export default function Header() {

    const shoppingCart = useSelector(store => store.shoppingCart)
    const count = shoppingCart?.reduce((sum, item) => sum + item.count, 0)

    return (
      <div className={s.container}>
        <div className={s.main}>
          <Link className={s.link_style} to={"/"}>
            <img src="main_logo.png" />
          </Link>
          <Link className={s.link_style} to={"/categories"}>
            <button className={s.header_button}>Catalog</button>
          </Link>
        </div>
        <div className={s.menu}>
          <ul className={s.menu_wrapper}>
            <Link className={`${s.link_style} ${s.menu_item}`} to={"/"}>
              <li>Main Page</li>
            </Link>
            <Link
              className={`${s.link_style} ${s.menu_item}`}
              to={"/products/all"}
            >
              <li>All products</li>
            </Link>
            <Link
              className={`${s.link_style} ${s.menu_item}`}
              to={"/products/sale"}
            >
              <li>All sales</li>
            </Link>
          </ul>
          <Link className={s.link_style} to={"/cart"}>
            <div className={s.cart_icon_container}>
              <img src="shopping_bag_icon.svg" alt="Cart" />
              <span className={s.cart_count}>{count}</span>
            </div>
          </Link>
        </div>
      </div>
    );
}