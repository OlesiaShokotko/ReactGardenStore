import { useSelector } from "react-redux";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";
import FormElem from "../../components/FormElem/FormElem";
import s from "./ShoppingCartPage.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function ShoppingCartPage() {

  

  const { products, shoppingCart, discount } = useSelector((store) => store);

  const navigate = useNavigate();

  const shoppingCartList = shoppingCart?.map((item) => {
    const product = products.data.find(({ id }) => id === item.id);
    return product;
  });
 


  return (
    <div className={s.container}>
      <h2 className={s.shopping_cart_title}>Shopping cart</h2>
      {products.data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={s.wrapper}>
            <div className={s.back_wrapper} onClick={() => navigate(-1)}>
              <p>Back to the store</p>
              <img src="icon_go_back.svg" />
            </div>
          </div>
          <div className={s.stripe_wrapper}>
            <img className={s.stripe} src="stripe.png" />
          </div>
          {shoppingCartList?.length === 0 ? (
            <p>Your shopping cart is empty.</p>
          ) : (
            <div className={s.cart_container}>
              <div className={s.products_wrapper}>
                {shoppingCartList?.map((item) => (
                  <ShoppingCartItem key={item.id} {...item} />
                ))}
              </div>
              <div>
                <FormElem
                  discount={discount}
                  shoppingCartList={shoppingCartList}
                  btnTitle={"Order"}
                  placeholder={"Phone number"}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
