import { useSelector } from "react-redux";
import ProductItem from '../ProductItem/ProductItem';
import s from "./SaleSection.module.css";

export default function SaleSection(){
const products = useSelector(store => store.products.data)
const listDiscountedProducts = products?.filter(elem => elem.discount_price !== null)?.slice(0,3)
console.log(listDiscountedProducts)

    return (
      <div className={s.container}>
        <h2 className={s.title}>Sale</h2>
        <div className={s.products_wrapper}>
          {listDiscountedProducts.map((elem) => (
              <ProductItem key={elem.id} {...elem} className={s.product_item}/>
          ))}
        </div>
      </div>
    );
}