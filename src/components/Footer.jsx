import styles from './Footer.module.css';

import whatsappIcon from '../assets/icons/whatsapp.svg?raw';
import emailIcon from '../assets/icons/email.svg?raw';
import instagram from '../assets/icons/instagram.svg?raw';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerColumn}>
                        <h4 className={styles.footerTitle}>VICTU NOA</h4>
                        <p className={styles.footerText}>
                            Representación oficial de Suplefeed en el Noroeste Argentino.
                        </p>
                    </div>
                    <div className={styles.footerColumn}>
                        <h4 className={styles.footerTitle}>Contacto</h4>

                        <div className={styles.footerItem}>
                            <div className={styles.footerIcon} dangerouslySetInnerHTML={{ __html: whatsappIcon }} />
                            <span>381 6542124</span>
                        </div>

                        <div className={styles.footerItem}>
                            <div className={styles.footerIcon} dangerouslySetInnerHTML={{ __html: emailIcon }} />
                            <span>faqndosuarez@gmail.com</span>
                        </div>

                        <a
                            href="https://www.instagram.com/victunoa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footerItem}
                        >
                            <div className={styles.footerIcon} dangerouslySetInnerHTML={{ __html: instagram }} />
                            <span>@victunoa</span>
                        </a>
                    </div>
                    <div className={styles.footerColumn}>
                        <h4 className={styles.footerTitle}>Cobertura</h4>
                        <p className={styles.footerText}>
                            Zonas NOA y NEA
                        </p>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2026 VICTU. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
