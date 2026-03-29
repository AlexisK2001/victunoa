import styles from './Hero.module.css';

export default function Hero({
    title,
    subtitle,
    children
}) {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroInner}`}>
                {/* Left column - text */}
                <div className={styles.heroLeft}>
                    <span className={styles.heroLabel}>NUTRICIÓN ANIMAL TÉCNICA</span>
                    <h1 className={`${styles.heroTitle} fade-in`}>{title}</h1>
                    {subtitle && (
                        <p className={`${styles.heroSubtitle} fade-in-delay`}>{subtitle}</p>
                    )}
                    {children && (
                        <div className={`${styles.heroButtons} fade-in-delay-2`}>
                            {children}
                        </div>
                    )}
                    <div className={styles.heroStats}>
                        <div className={styles.heroStat}>
                            <span className={styles.heroStatNum}>15+</span>
                            <span className={styles.heroStatLabel}>Años de experiencia</span>
                        </div>
                        <div className={styles.heroStatDivider}></div>
                        <div className={styles.heroStat}>
                            <span className={styles.heroStatNum}>8</span>
                            <span className={styles.heroStatLabel}>Provincias cubiertas</span>
                        </div>
                        <div className={styles.heroStatDivider}></div>
                        <div className={styles.heroStat}>
                            <span className={styles.heroStatNum}>100%</span>
                            <span className={styles.heroStatLabel}>Soporte técnico</span>
                        </div>
                    </div>
                </div>

                {/* Right column - product showcase */}
                <div className={styles.heroRight}>
                    <div className={styles.heroImgCard}>
                        <div className={styles.heroImgBadge}>Producto Destacado</div>
                        <img
                            src="/images/biosal-autoconsumo-new.webp"
                            alt="Biosal Autoconsumo - Suplemento mineral para bovinos"
                            className={styles.heroProductImg}
                            fetchpriority="high"
                            loading="eager"
                        />
                    </div>
                    <div className={styles.heroImgCard2}>
                        <img
                            src="/images/afi-balde.webp"
                            alt="AFI - Activador Flora Intestinal"
                            className={styles.heroProductImg2}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom accent */}
            <div className={styles.heroBottomAccent}></div>
        </section>
    );
}
