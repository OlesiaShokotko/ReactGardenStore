import s from "./ProductDescriptionPage.module.css";
import { useParams } from "react-router-dom";
import { LINK } from "../../store/link/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../store/reducer/shoppingCartReducer";
import { useEffect } from "react";
import { fetchProductItemAction } from "../../asyncActions/product";
import { toast } from "react-toastify";
import Button from "../../components/UI/Button/Button";

export default function ProductDescriptionPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((store) => store.product);
  const { title, description, discount_price, price, image } = data;
  const linkToImg = `${LINK}${image}`;

  const handleAddToCart = () => {
    dispatch(addToCartAction(+id));
    toast.success("The product has been successfully added to your cart!");
  };

  useEffect(() => {
    dispatch(fetchProductItemAction(id));
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <p className={s.loader}>Loading...</p>
      ) : (
        <main className={s.container}>
          <h2 className={s.product_title}>{title}</h2>
          <div className={s.content_wrapper}>
            <img className={s.product_image} src={linkToImg} alt={title} />
            <div className={s.info_wrapper}>
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
              <Button
                onClick={handleAddToCart}
                styleBtn={"product_btn"}
                title={" To cart"}
              />
              <div className={s.descr_container}>
                <h3 className={s.descr_title}>Description</h3>
                <p className={s.product_descr}>{description}</p>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
