import { useNavigate } from "react-router-dom";
import s from "./BannerSection.module.css";

export default function BannerSection() {

  const navigate = useNavigate();

//   const saleBtnStyle = {
//     width: "155px",
//     height: "82px",
//     borderRadius: "13px",
//     padding: "25px 50px",
//     backgroundColor: "white",
//     fontSize: "25px",
//     fontWeight: "700",
//     lineHeight: "32.5px",
//     color: "black",
//     border: "none",
//     marginRight: "20px",
//     cursor: 'pointer'
//   };

//   const btnStyle = {
//     width: "230px",
//     height: "82px",
//     borderRadius: "13px",
//     border: "2px solid white",
//     padding: "25px 40px",
//     backgroundColor: "transparent",
//     fontSize: "25px",
//     fontWeight: "700",
//     lineHeight: "32.5px",
//     color: "white",
//   };

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
