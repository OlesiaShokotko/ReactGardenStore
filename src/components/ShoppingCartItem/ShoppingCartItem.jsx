import React from "react";
import { LINK } from "../../store/link/link";
import s from "./ShoppingCartItem.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { cartItemDecrementAction, cartItemIncrementAction, removeFromCartAction } from "../../store/reducer/shoppingCartReducer";

export default function ShoppingCartItem({
  id,
  image,
  title,
  price,
  discount_price,
  count,
}) {


  const linkToImg = `${LINK}${image}`;
  const dispatch = useDispatch();
  const shoppingCart = useSelector(store => store.shoppingCart)
  const product = shoppingCart.find(elem => elem.id === id)

  return (
    <div className={s.container}>
      <div className={s.item_wrapper}>
        <img src={linkToImg} className={s.image} />

        <div className={s.info_wrapper}>
          <p className={s.title}>{title}</p>
          <div className={s.counter}>
            <BiMinus className={s.btn_count} onClick={() => dispatch(cartItemDecrementAction(+id))}/>
            <p className={s.btn_num}>{product.count}</p>
            <BiPlus className={s.btn_count} onClick={() => dispatch(cartItemIncrementAction(+id))}/>
          </div>
        </div>

        {discount_price ? (
          <div className={s.price_container}>
            <p className={s.discount_price}>
              {discount_price * product.count}
              <span className={s.discount_dollar}>$</span>
            </p>
            <p className={s.price}>
              {price * product.count}
              <span>$</span>
            </p>
          </div>
        ) : (
          <div className={s.price_container}>
            <p className={s.discount_price}>
              {price * product.count}
              <span className={s.discount_dollar}>$</span>
            </p>
          </div>
        )}
        <GrClose className={s.btn_cross} onClick={() => dispatch(removeFromCartAction(id))} />
      </div>
      <img className={s.stripe} src="stripe.png" />
    </div>
  );
}
