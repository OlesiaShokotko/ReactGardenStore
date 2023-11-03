import { useDispatch } from "react-redux";
import s from "./ProductsFilterBar.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  applyPriceFilterAction,
  sortedProductsFilterAction,
} from "../../store/reducer/productsReducer";
import { useLocation } from "react-router-dom";
import CustomCheckbox from "react-custom-checkbox";
import Checkbox from "react-custom-checkbox";

export default function ProductsFilterBar({
  handleDiscountCheckboxChange,
  displayDiscountCheckbox,
//   handlePriceFilter,
//   minPrice,
//   maxPrice,
}) 
{
  const dispatch = useDispatch();

  const location = useLocation();

  // useEffect(() => {
  //     const filterValues = {
  //         minPrice: Number(minPrice),
  //         maxPrice: Number(maxPrice),
  //     };
  //     dispatch(applyPriceFilterAction(filterValues))
  // }, [minPrice, maxPrice])

  return (
    <div className={s.container}>
      {location.pathname === "/products/sale" ? (
        <>
          <form className={s.price_wrapper}>
            <h3>Price</h3>
            <input
              type="number"
              inputMode="none"
              name="minPrice"
              placeholder="from"
            //   value={minPrice}
            //   onChange={(e) => handlePriceFilter(e)}
            />
            <input
              type="number"
              inputMode="none"
              name="maxPrice"
              placeholder="to"
            //   value={maxPrice}
            //   onChange={(e) => handlePriceFilter(e)}
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
          <form className={s.price_wrapper}>
            <h3>Price</h3>
            <input
              type="number"
              inputMode="none"
              name="minPrice"
              placeholder="from"
            //   value={minPrice}
            //   onChange={handlePriceFilter}
            />
            <input
              type="number"
              inputMode="none"
              name="maxPrice"
              placeholder="to"
            //   value={maxPrice}
            //   onChange={handlePriceFilter}
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
