import { useForm } from "react-hook-form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import s from "./FormElem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearShoppingCartAction } from "../../store/reducer/shoppingCartReducer";
import { sendOrder } from "../../asyncActions/order";

export default function FormElem({
  btnTitle,
  placeholder,
  shoppingCartList,
  discount,
}) {
  const dispatch = useDispatch();
  const { shoppingCart } = useSelector((store) => store);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });


const cartProducts = shoppingCartList.reduce((result, item) => {
  const matchingItem = shoppingCart.find((elem) => elem.id === item.id);
  if (matchingItem) {
    result.push({
      id: item.id,
      price: item.price,
      discount_price: item.discount_price,
      count: matchingItem.count,
    });
  }
  return result;
}, []);



const totalProductsPrice = cartProducts.reduce(
  (sum, elem) =>
    sum +
    (parseFloat(elem.discount_price)
      ? parseFloat(elem.discount_price)
      : parseFloat(elem.price)) *
      elem.count,
  0
);

const discountPrice = (totalProductsPrice * 0.95).toFixed(2);



  const onSubmit = () => {
    const order = cartProducts.map((elem) => ({
      id: elem.id,
      count: elem.count.toString(),
      price: elem.price,
    }));
    dispatch(sendOrder(order));
    dispatch(clearShoppingCartAction());
    reset();
  };
  

  return (
    <div className={s.order_details}>
      <h2 className={s.order_title}>Order details</h2>
      {discount.success ? (
        <>
          <div className={s.total_price}>
            <p className={s.sum_title}>Total</p>
            <p className={s.order_price}>
              {discountPrice}
              <span>$</span>
            </p>
            <p className={s.price}>
              {totalProductsPrice}
              <span>$</span>
            </p>
          </div>
          <p>The 5% discount has been applied!</p>
        </>
      ) : (
        <div className={s.total_price}>
          <p className={s.order_title}>Total</p>
          <p className={s.order_price}>
            {totalProductsPrice}
            <span>$</span>
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder={placeholder}
          className={s.input_elem}
          {...register("phoneNumber", {
            required: "The field must not be empty",
            pattern: {
              value: /^\+49\s\d{2,5}\s\d{6,12}$/,
              message: "Please enter a valid international phone number",
            },
          })}
        />
        {errors.phoneNumber && (
          <p className={s.error_message}>{errors.phoneNumber.message}</p>
        )}
        <button className={s.form_btn}>{btnTitle}</button>
      </form>
    </div>
  );
}
