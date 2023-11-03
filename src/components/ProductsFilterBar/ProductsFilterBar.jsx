import { useDispatch } from "react-redux";
import s from "./ProductsFilterBar.module.css";
import {
  applyPriceFilterAction,
  sortedProductsFilterAction,
} from "../../store/reducer/productsReducer";
import { useLocation } from "react-router-dom";


export default function ProductsFilterBar({
  handleDiscountCheckboxChange,
  displayDiscountCheckbox,
  formHandler,
  formRef
}) {
  const dispatch = useDispatch();

  const location = useLocation();


  return (
    <div className={s.container}>
      {location.pathname === "/products/sale" ? (
        <>
          <form
            ref={formRef}
            onChange={formHandler}
            className={s.price_wrapper}
          >
            <h3>Price</h3>
            <input
              className={s.input}
              type="number"
              inputMode="none"
              name="min"
              placeholder="from"
            />
            <input
              className={s.input}
              type="number"
              inputMode="none"
              name="max"
              placeholder="to"
            />
          </form>
          <div className={s.sort_wrapper}>
            <h3>Sorted</h3>
            <select
              onClick={(e) =>
                dispatch(sortedProductsFilterAction(e.target.value))
              }
            >
              <option>by default</option>
              <option>price, low to high</option>
              <option>price, high to low</option>
              <option>discount, low to high</option>
              <option>discount, high to low</option>
              <option>alphabetically, A-Z</option>
              <option>alphabetically, Z-A</option>
            </select>
          </div>
        </>
      ) : (
        <>
          <form onChange={formHandler} ref={formRef} className={s.price_wrapper}>
            <h3>Price</h3>
            <input
              className={s.input}
              type="number"
              inputMode="none"
              name="min"
              placeholder="from"
            />
            <input
              className={s.input}
              type="number"
              inputMode="none"
              name="max"
              placeholder="to"
            />
          </form>
          <div className={s.discount_wrapper}>
            <h3>Discounted items</h3>
            <input
              id="myCheckbox"
              className={s.input_checkbox}
              type="checkbox"
              checked={displayDiscountCheckbox}
              onChange={() =>
                handleDiscountCheckboxChange(!displayDiscountCheckbox)
              }
            />
            <label
              htmlFor="myCheckbox"
              className={s.custom_checkbox_label}
            ></label>
          </div>
          <div className={s.sort_wrapper}>
            <h3>Sorted</h3>
            <select
              onClick={(e) =>
                dispatch(sortedProductsFilterAction(e.target.value))
              }
            >
              <option>by default</option>
              <option>price, low to high</option>
              <option>price, high to low</option>
              <option>discount, low to high</option>
              <option>discount, high to low</option>
              <option>alphabetically, A-Z</option>
              <option>alphabetically, Z-A</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
}
