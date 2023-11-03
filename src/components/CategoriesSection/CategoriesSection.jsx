import { useSelector } from 'react-redux';
import CategoryItem from '../CategoryItem/CategoryItem';
import s from './CategoriesSection.module.css';
import { useNavigate } from 'react-router-dom';

export default function CategoriesSection() {

  const categories = useSelector((state) => state.categories);
  const navigate = useNavigate()


  return (
    <div className={s.container}>
      <div className={s.content_wrapper}>
        <h2 className={s.title}>Catalog</h2>
        <button
          onClick={() => navigate("/categories")}
          className={s.categories_btn}
        >
            All categories
        </button>
      </div>
      <div className={s.categories_wrapper}>
        {categories
          .filter((elem) => elem.id < 5)
          .map((elem) => (
            <CategoryItem key={elem.id} {...elem} />
          ))}
      </div>
    </div>
  );
}


