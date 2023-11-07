import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import s from "./CategoriesPage.module.css";
import { useEffect } from "react";

export default function CategoriesPage() {
  const {isLoading, data} = useSelector((store) => store.categories);

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      {isLoading ? (
        <p className={s.loader}>Loading...</p>
      ) : (
        <div className={s.container}>
          <h2 className={s.categories_title}>Categories</h2>
          <div className={s.categories_wrapper}>
            {data.map((elem) => (
              <CategoryItem key={elem.id} {...elem} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
