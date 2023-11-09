import { useDispatch } from "react-redux";
import s from "./ProductsFilterBar.module.css";
import { sortedProductsFilterAction } from "../../store/reducer/productsListReducer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { MdFilterList } from "react-icons/md";

export default function ProductsFilterBar({
  formHandler,
  formRef,
  checkboxHandler,
}) {
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();

  const handleClickFilterBar = () => {
    setIsFilterBarOpen(!isFilterBarOpen);
  };

  return (
    <>
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
            <form
              onChange={formHandler}
              ref={formRef}
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
            <div className={s.discount_wrapper}>
              <h3>Discounted items</h3>
              <input
                id="myCheckbox"
                className={s.input_checkbox}
                type="checkbox"
                onClick={checkboxHandler}
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
      <div className={s.filter_icon} onClick={handleClickFilterBar}>
        <MdFilterList size={40} color="#000" />
      </div>
    </>
  );
}
