import { useDispatch, useSelector } from 'react-redux';
import s from "./ProductsListPage.module.css";
import ProductItem from '../../components/ProductItem/ProductItem';
import { useEffect, useState, useCallback } from "react";
import { fetchProductsList } from '../../asyncActions/products';
import { useParams, useLocation } from 'react-router-dom';
import ProductsFilterBar from '../../components/ProductsFilterBar/ProductsFilterBar';
import { applyDiscountFilterAction, applyPriceFilterAction, resetFilterAction } from '../../store/reducer/productsReducer';


export default function ProductsListPage() {

    const [displayDiscountCheckbox, setDisplayDiscountCheckbox] = useState(false)
    // const [minPrice, setMinPrice] = useState("");
    // const [maxPrice, setMaxPrice] = useState("");


    const { id } = useParams()

    const location = useLocation()
    const dispatch = useDispatch()

    // const handlePriceFilter = useCallback(
    //   (e) => {

    //     const { name, value } = e.target;

    //     if (name === "minPrice") {
    //       setMinPrice(value);
    //     } else if (name === "maxPrice") {
    //       setMaxPrice(value);
    //     }
    //     dispatch(applyPriceFilterAction({ minPrice, maxPrice }));
    //   },
    //   [dispatch, minPrice, maxPrice]
    // );
    

    const categories = useSelector((store) => store.categories);

    const isLoading = useSelector((store) => store.products.isLoading)

    const productsList = useSelector(store => {
        if (id === undefined) {
            return store.products.data;
        } else {
            return store.products.data.filter(product => product.categoryId === +id)
        }
    });

    

    const handleDiscountCheckboxChange = (checked) => {
        setDisplayDiscountCheckbox(checked);
        if(checked){
            dispatch(applyDiscountFilterAction())
        } else {
            dispatch(resetFilterAction())
        }
    }


    const category = categories.find(elem => elem.id === +id)

    
    useEffect(() => {
        dispatch(resetFilterAction())
    }, [])


    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {location.pathname === "/products/sale" ? (
              <div className={s.container}>
                <h2 className={s.products_title}>Products with sale</h2>
                <ProductsFilterBar
                  handleDiscountCheckboxChange={handleDiscountCheckboxChange}
                  displayDiscountCheckbox={displayDiscountCheckbox}
                //   handlePriceFilter={handlePriceFilter}
                //   minPrice={minPrice}
                //   maxPrice={maxPrice}
                />
                <div className={s.product_wrapper}>
                  {productsList
                    .filter((product) => product.discount_price)
                    .map((product) => (
                      <ProductItem key={product.id} {...product} />
                    ))}
                </div>
              </div>
            ) : (
              <div className={s.container}>
                <h2 className={s.products_title}>
                  {category === undefined ? "All products" : category.title}
                </h2>
                <ProductsFilterBar
                  handleDiscountCheckboxChange={handleDiscountCheckboxChange}
                  displayDiscountCheckbox={displayDiscountCheckbox}
                //   handlePriceFilter={handlePriceFilter}
                //   minPrice={minPrice}
                //   maxPrice={maxPrice}
                />
                <div className={s.product_wrapper}>
                  {productsList
                    .filter(
                      (product) =>
                        !displayDiscountCheckbox || product.discount_price
                    )
                    .map((product) => (
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