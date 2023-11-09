import { useDispatch, useSelector } from "react-redux";
import s from "./ProductsListPage.module.css";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductsFilterBar from "../../components/ProductsFilterBar/ProductsFilterBar";
import {
  applyDiscountFilterAction,
  applyPriceFilterAction,
  resetFilterAction,
} from "../../store/reducer/productsListReducer";

export default function ProductsListPage() {
  useEffect(() => {
    dispatch(resetFilterAction());
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const formRef = useRef();

  const { data } = useSelector((store) => store.categories);
  const { isLoading } = useSelector((store) => store.products.isLoading);
  const productsList = useSelector((store) => store.products.data).filter(
    (elem) => elem.isShowByPrice && elem.isShowBySale
  );

  function checkboxHandler(e) {
    dispatch(applyDiscountFilterAction(e.target.checked));
  }

  function formHandler(e) {
    let form_data = new FormData(formRef.current);
    let data = Object.fromEntries(form_data);
    data.min = data.min ? +data.min : -Infinity;
    data.max = data.max ? +data.max : Infinity;
    dispatch(applyPriceFilterAction(data));
  }

  const category = data.find((elem) => elem.id === +id);

  return (
    <>
      {isLoading ? (
        <p className={s.loader}>Loading...</p>
      ) : (
        <>
          {location.pathname === "/products/sale" ? (
            <div className={s.container}>
              <div className={s.filter_wrapper}>
                <h2 className={s.products_title}>Products with sale</h2>
                <ProductsFilterBar
                  checkboxHandler={checkboxHandler}
                  formHandler={formHandler}
                  formRef={formRef}
                />
              </div>
              <div className={s.products_wrapper}>
                {productsList
                  .filter((product) => product.discount_price)
                  .map((product) => (
                    <ProductItem key={product.id} {...product} />
                  ))}
              </div>
            </div>
          ) : (
            <div className={s.container}>
              <div className={s.filter_wrapper}>
                <h2 className={s.products_title}>
                  {category === undefined ? "All products" : category.title}
                </h2>
                <ProductsFilterBar
                  checkboxHandler={checkboxHandler}
                  formHandler={formHandler}
                  formRef={formRef}
                />
              </div>
              <div className={s.products_wrapper}>
                {productsList.map((product) => (
                  <ProductItem key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
