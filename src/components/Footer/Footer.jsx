import s from './Footer.module.css';

export default function Footer() {
    return (
        <div className={s.container}>
            <div className={s.content_wrapper}>
                <div style={{ marginRight: '162px' }}>
                    <h2 className={s.footer_title}>Contact</h2>
                    <p style={{ fontSize: '70px', fontWeight: '600', marginBottom: '30px' }}>+49 999 999 99 99</p>
                    <div className={s.footer_icons}>
                        <a style={{ marginRight: '35px' }} href='https://instagram.com/alesyaaaaaa_888?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'>
                            <span className={s.icon_wrapper}>
                                <img src='instagram_icon.svg' alt='Instagram link' />
                                <p>Instagram</p>
                            </span>
                        </a>
                        <a href='https://wa.me/4915143215184'>
                            <span className={s.icon_wrapper}>
                                <img src='whatsapp_icon.svg' alt='WhatsApp link' />
                                <p>WhatsApp</p>
                            </span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className={s.footer_title}>Address</h2>
                    <a href='https://www.google.com/search?q=telranDE' style={{ fontSize: '40px', fontWeight: '600', color: 'black' }}>
                        Linkstraße 2, 8 OG, 10785,<br /> Berlin, Deutschland
                    </a>
                    <p style={{ fontSize: '18px', fontWeight: '500', marginTop: '30px' }}>
                        Working Hours:
                        <br />
                        <span style={{ fontSize: '24px', fontWeight: '600' }}>24 hours a day</span>
                    </p>
                </div>
            </div>
            <div style={{ width: '100%', margin: '50px 0 40px' }}>
                <iframe width="100%" height="525" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=525&amp;hl=en&amp;q=Tel-Ran,%20Berlin+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    )
}