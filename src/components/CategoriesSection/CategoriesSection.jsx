import { useSelector } from "react-redux";
import CategoryItem from "../CategoryItem/CategoryItem";
import s from "./CategoriesSection.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";

export default function CategoriesSection() {
  const { data } = useSelector((state) => state.categories);
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.content_wrapper}>
        <h2 className={s.title}>Catalog</h2>
        <Button
          title={"All categories"}
          onClick={() => navigate("/categories")}
          styleBtn={"categories_btn"}
        />
      </div>
      <div className={s.categories_wrapper}>
        {data
          .filter((elem) => elem.id < 5)
          .map((elem) => (
            <CategoryItem key={elem.id} {...elem} />
          ))}
      </div>
    </div>
  );
}
