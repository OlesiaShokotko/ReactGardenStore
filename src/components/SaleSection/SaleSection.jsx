import { useSelector } from "react-redux";
import ProductItem from '../ProductItem/ProductItem';
import s from "./SaleSection.module.css";
import { forwardRef } from "react";

const SaleSection = forwardRef((props, ref) => {
  const products = useSelector((store) => store.products.data);
  const listDiscountedProducts = products
    ?.filter((elem) => elem.discount_price !== null)
    ?.slice(0, 3);

  return (
    <div className={s.container} ref={ref}>
      <h2 className={s.title}>Sale</h2>
      <div className={s.products_wrapper}>
        {listDiscountedProducts.map((elem) => (
          <ProductItem key={elem.id} {...elem} className={s.product_item} />
        ))}
      </div>
    </div>
  );
});

export default SaleSection;