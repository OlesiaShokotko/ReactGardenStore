import s from "./Footer.module.css";
import { ReactComponent as InstagramIcon } from "../icons/instagram_icon.svg";
import { ReactComponent as WhatsappIcon } from "../icons/whatsapp_icon.svg";
import Iframe from "../Iframe/Iframe";

export default function Footer() {
  return (
    <div className={s.container}>
      <div className={s.content_wrapper}>
        <div style={{ marginRight: "162px" }}>
          <h2 className={s.footer_title}>Contact</h2>
          <a
            href="https://www.google.com/search?q=telrande+contact"
            style={{ textDecoration: "none" }}
          >
            <p className={s.contact}>+49 999 999 99 99</p>
          </a>
          <div className={s.footer_icons}>
            <a
              style={{ marginRight: "35px" }}
              href="https://instagram.com/alesyaaaaaa_888?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            >
              <span className={s.icon_wrapper}>
                <InstagramIcon />
                <p>Instagram</p>
              </span>
            </a>
            <a href="https://wa.me/4915143215184">
              <span className={s.icon_wrapper}>
                <WhatsappIcon />
                <p>WhatsApp</p>
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className={s.footer_title}>Address</h2>
          <a
            href="https://www.google.com/search?q=telranDE"
            className={s.address_link}
          >
            Linkstraße 2, 8 OG, 10785,
            <br /> Berlin, Deutschland
          </a>
          <p className={s.work_time_title}>
            Working Hours:
            <br />
            <span>24 hours a day</span>
          </p>
        </div>
      </div>
      <div className={s.iframe}>
        <Iframe/>
      </div>
    </div>
  );
}
