import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import s from "./CategoriesPage.module.css";

export default function CategoriesPage() {
  const categoriesList = useSelector((store) => store.categories);

  return (
    <div className={s.container}>
      <h2 className={s.categories_title}>Categories</h2>
      <div className={s.categories_wrapper}>
        {categoriesList.map((elem) => (
          <CategoryItem key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
