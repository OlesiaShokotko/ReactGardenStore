import { Link } from "react-router-dom";
import { LINK } from "../../store/link/link";
import { useDispatch } from "react-redux";
import s from "./ProductItem.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCartAction } from "../../store/reducer/shoppingCartReducer";

export default function ProductItem({
  id,
  image,
  price,
  discount_price,
  title,
}) {

  const linkToImg = `${LINK}${image}`;
  const link = `/products/${id}`;
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    toast.success("The product has been successfully added to your cart!");
    event.stopPropagation();
    dispatch(addToCartAction(+id));
  };

  return (
    <article className={s.container}>
      <button className={s.product_btn} onClick={handleAddToCart}>
        Add to Cart
      </button>
      <Link style={{ textDecoration: "none" }} to={link}>
        <div className={s.product_img}>
          <img src={linkToImg} alt={title} />
        </div>
        {discount_price ? (
          <div className={s.price_container}>
            <p className={s.discount_price}>
              {discount_price}
              <span>$</span>
            </p>
            <p className={s.price}>
              {price}
              <span>$</span>
            </p>
            <p className={s.discount}>
              -{(((price - discount_price) / price) * 100).toFixed(0)}%
            </p>
          </div>
        ) : (
          <div className={s.price_container}>
            <p className={s.discount_price}>
              {price}
              <span>$</span>
            </p>
          </div>
        )}
        <p className={s.title}>{title}</p>
      </Link>
    </article>
  );
}
