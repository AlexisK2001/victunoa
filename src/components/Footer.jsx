import styles from './Footer.module.css';

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
                        <p className={styles.footerText}>☎️ Tel: 381 6542124</p>
                        <p className={styles.footerText}>📧 Email: gvictunoa@gmail.com</p>


                        <a
                            href="https://www.instagram.com/victunoa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footerText}
                            style={{ textDecoration: 'none' }}
                        >
                            📸 Instagram: @victunoa
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
