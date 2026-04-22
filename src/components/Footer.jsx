import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { zonas } from '../data/zonas';

import instagramIcon from '../assets/icons/instagram.svg?raw';
import facebookIcon from '../assets/icons/facebook.svg?raw';
import youtubeIcon from '../assets/icons/youtube.svg?raw';
import emailIcon from '../assets/icons/email.svg?raw';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerTop}`}>
                {/* Col 1 — Brand */}
                <div className={styles.footerBrand}>
                    <p className={styles.footerLogo}>VICTU</p>
                    <p className={styles.footerTagline}>
                        Alimentación sustentable para la ganadería
                    </p>
                    <div className={styles.footerSocials}>
                        <a
                            href="https://www.instagram.com/victunoa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="Instagram"
                            dangerouslySetInnerHTML={{ __html: instagramIcon }}
                        />
                        <a
                            href="https://www.facebook.com/share/1ApR4Kdu5i/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="Facebook"
                            dangerouslySetInnerHTML={{ __html: facebookIcon }}
                        />
                        <a
                            href="https://www.youtube.com/@VictuNoa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="YouTube"
                            dangerouslySetInnerHTML={{ __html: youtubeIcon }}
                        />
                        <a
                            href="mailto:faqndosuarez@gmail.com"
                            className={styles.socialIcon}
                            aria-label="Email"
                            dangerouslySetInnerHTML={{ __html: emailIcon }}
                        />
                    </div>
                </div>

                {/* Col 2 — Productos */}
                <div className={styles.footerCol}>
                    <h4 className={styles.footerColTitle}>PRODUCTOS</h4>
                    <ul className={styles.footerLinks}>
                        <li><Link to="/cria#biosal-autoconsumo">Biosal Autoconsumo</Link></li>
                        <li><Link to="/engorde#biosal-mix">Biosal Mix</Link></li>
                        <li><Link to="/recria#biosal-max">Biosal Max</Link></li>
                        <li><Link to="/tambo#rbr">Regulador Biológico Ruminal</Link></li>
                        <li><Link to="/tambo#afi">AFI</Link></li>
                    </ul>
                </div>

                {/* Col 3 — Zonas */}
                <div className={styles.footerCol}>
                    <h4 className={styles.footerColTitle}>ZONAS</h4>
                    <ul className={styles.footerLinks}>
                        {zonas.map(z => (
                            <li key={z.slug}>
                                <Link to={`/zonas/${z.slug}`}>{z.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 4 — Empresa */}
                <div className={styles.footerCol}>
                    <h4 className={styles.footerColTitle}>EMPRESA</h4>
                    <ul className={styles.footerLinks}>
                        <li><Link to="/sobre-victu">Quiénes somos</Link></li>
                        <li><Link to="/biosales">¿Qué son las biosales?</Link></li>
                    </ul>
                </div>

                {/* Col 5 — Contacto */}
                <div className={styles.footerCol}>
                    <h4 className={styles.footerColTitle}>CONTACTO</h4>
                    <ul className={styles.footerLinks}>
                        <li>
                            <a href="https://wa.me/5493816542124" target="_blank" rel="noreferrer">
                                WhatsApp
                            </a>
                        </li>
                        <li>
                            <a href="mailto:faqndosuarez@gmail.com">faqndosuarez@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className={styles.footerBottom}>
                <div className="container">
                    <div className={styles.footerBottomInner}>
                        <p>© 2024 VICTU. Todos los derechos reservados.</p>
                        <div className={styles.footerLegal}>
                            <a href="#">Términos y condiciones</a>
                            <a href="#">Política de privacidad</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
