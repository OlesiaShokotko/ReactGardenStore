import { useNavigate } from "react-router-dom";
import s from "./BannerSection.module.css";

export default function BannerSection() {

  const navigate = useNavigate();


  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.descr_wrapper}>
          <p className={s.sale}>Sale</p>
          <p className={s.season}>New season</p>
        </div>
        <div className={s.btn_wrapper}>
          <button className={s.sale_btn} onClick={() => ({})}>
            Sale
          </button>
          <button
            className={s.more_btn}
            onClick={() => navigate("/products/sale")}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
