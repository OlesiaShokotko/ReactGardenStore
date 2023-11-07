import { useNavigate } from "react-router-dom";
import s from "./BannerSection.module.css";
import Button from "../UI/Button/Button";

export default function BannerSection({ scrollToSaleSection }) {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.descr_wrapper}>
          <p className={s.sale}>Sale</p>
          <p className={s.season}>New season</p>
        </div>
        <div className={s.btn_wrapper}>
          <Button
            title={"Sale"}
            onClick={scrollToSaleSection}
            styleBtn={"sale_btn"}
          />
          <Button
            title={"Learn more"}
            onClick={() => navigate("/products/sale")}
            styleBtn={"more_btn"}
          />
        </div>
      </div>
    </div>
  );
}
