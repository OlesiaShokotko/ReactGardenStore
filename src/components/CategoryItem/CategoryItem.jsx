import { Link } from "react-router-dom";
import s from "./CategoryItem.module.css";
import { LINK } from "../../store/link/link";


export default function CategoryItem({ id, title, image }) {
  const linkToImg = `${LINK}${image}`;
  const link = `/categories/${id}`;

  return (
    <Link className={s.category_link} to={link}>
      <div className={s.category_item}>
        <img className={s.category_img} src={linkToImg} />
        <p className={s.category_title}>{title}</p>
      </div>
    </Link>
  );
}
