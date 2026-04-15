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
                    <span className={styles.heroLabel}>
                        <span className={styles.heroLabelAccent}></span>
                        NUTRICIÓN ANIMAL TÉCNICA
                    </span>
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
                        <div className={styles.heroStatCard}>
                            <span className={styles.heroStatNum}>15+</span>
                            <span className={styles.heroStatLabel}>Años de experiencia</span>
                        </div>
                        <div className={styles.heroStatCard}>
                            <span className={styles.heroStatNum}>8</span>
                            <span className={styles.heroStatLabel}>Provincias cubiertas</span>
                        </div>
                        <div className={styles.heroStatCard}>
                            <span className={styles.heroStatNum}>100%</span>
                            <span className={styles.heroStatLabel}>Soporte técnico</span>
                        </div>
                    </div>
                </div>

                {/* Right column - product cards with CategoryCard DNA */}
                <div className={styles.heroRight}>
                    <div className={styles.heroCard}>
                        <span className={styles.heroCardCategory}>MINERAL</span>
                        <div className={styles.heroCardIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                            </svg>
                        </div>
                        <span className={styles.heroCardBadge}>Producto Destacado</span>
                        <img
                            src="/images/biosal-autoconsumo-new.webp"
                            alt="Biosal Autoconsumo - Suplemento mineral para bovinos"
                            className={styles.heroCardImg}
                            fetchpriority="high"
                            loading="eager"
                        />
                        <div className={styles.heroCardBody}>
                            <span className={styles.heroCardTitle}>Biosal Autoconsumo</span>
                            <span className={styles.heroCardDesc}>Suplemento mineral para bovinos</span>
                        </div>
                        <span className={styles.heroCardLink}>Ver producto →</span>
                    </div>

                    <div className={`${styles.heroCard} ${styles.heroCardAlt}`}>
                        <span className={styles.heroCardCategory}>PROBIÓTICO</span>
                        <div className={`${styles.heroCardIcon} ${styles.heroCardIconAlt}`}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m-.235 9.197a3.75 3.75 0 005.853-3.45" />
                            </svg>
                        </div>
                        <img
                            src="/images/afi-balde.webp"
                            alt="AFI - Activador Flora Intestinal"
                            className={styles.heroCardImg}
                            loading="lazy"
                        />
                        <div className={styles.heroCardBody}>
                            <span className={styles.heroCardTitle}>AFI</span>
                            <span className={styles.heroCardDesc}>Activador Flora Intestinal</span>
                        </div>
                        <span className={styles.heroCardLink}>Ver producto →</span>
                    </div>
                </div>
            </div>

            {/* Bottom accent */}
            <div className={styles.heroBottomAccent}></div>
        </section>
    );
}
