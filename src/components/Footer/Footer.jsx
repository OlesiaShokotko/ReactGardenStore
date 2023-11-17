 import s from "./Footer.module.css";
import { ReactComponent as InstagramIcon } from "../icons/instagram_icon.svg";
import { ReactComponent as WhatsappIcon } from "../icons/whatsapp_icon.svg";
import Iframe from "../Iframe/Iframe";

export default function Footer() {
  return (
    <footer className={s.container}>
      <div className={s.content_wrapper}>
        <section className={s.left_wrapper}>
          <h2 className={s.footer_title}>Contact</h2>
          <a href="tel:+499999999999" style={{ textDecoration: "none" }}>
            <p className={s.contact}>+49 999 999 99 99</p>
          </a>
          <div className={s.footer_icons}>
            <a
              className={s.icon_link}
              href="https://instagram.com/alesyaaaaaa_888?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            >
              <div className={s.icon_wrapper}>
                <InstagramIcon className={s.icon} />
                <p>Instagram</p>
              </div>
            </a>
            <a href="https://web.whatsapp.com/">
              <div className={s.icon_wrapper}>
                <WhatsappIcon className={s.icon} />
                <p>WhatsApp</p>
              </div>
            </a>
          </div>
        </section>
        <section className={s.right_wrapper}>
          <h2 className={s.footer_title}>Address</h2>
          <address>
            <a
              href="https://www.google.com/search?q=telranDE"
              className={s.address_link}
            >
              Linkstraße 2, 8 OG, 10785,
              <br /> Berlin, Deutschland
            </a>
          </address>
          <p className={s.work_time_title}>
            Working Hours:
            <br />
            <span>24 hours a day</span>
          </p>
        </section>
      </div>
      <div className={s.iframe}>
        <Iframe />
      </div>
    </footer>
  );
}

