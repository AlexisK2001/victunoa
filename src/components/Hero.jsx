import styles from './Hero.module.css';

export default function Hero({
    title,
    subtitle,
    backgroundImage = '/images/heroimage2.png',
    size = 'large',
    children
}) {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`
    };

    return (
        <section
            className={`${styles.hero} ${size === 'small' ? styles.small : ''}`}
            style={heroStyle}
        >
            <div className={styles.heroOverlay}></div>
            <div className={`container ${styles.heroContent}`}>
                <div className={styles.heroText}>
                    <h1 className={`${styles.heroTitle} fade-in`}>{title}</h1>
                    {subtitle && (
                        <p className={`${styles.heroSubtitle} fade-in-delay`}>{subtitle}</p>
                    )}
                    {children && (
                        <div className={`${styles.heroButtons} fade-in-delay-2`}>
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
