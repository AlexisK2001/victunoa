import { useParams, Link } from 'react-router-dom';
import { getZonaBySlug } from '../data/zonas';
import { useSEO } from '../hooks/useSEO';
import Button from '../components/Button';
import styles from './ZonaPage.module.css';

const WHATSAPP_NUMBER = '5493816542124';

export default function ZonaPage() {
    const { zona: zonaSlug } = useParams();
    const zona = getZonaBySlug(zonaSlug);

    useSEO({
        title: zona ? zona.seoTitle.replace(' | Victu NOA', '').replace(' | Victu', '') : 'Zona no encontrada',
        description: zona ? zona.seoDescription : '',
        url: `/zonas/${zonaSlug}`,
        structuredData: zona
            ? [
                {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://victunoa.com/' },
                        { '@type': 'ListItem', position: 2, name: zona.name, item: `https://victunoa.com/zonas/${zonaSlug}` },
                    ],
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'LocalBusiness',
                    '@id': 'https://victunoa.com/#localbusiness',
                    name: 'Victu - Biosales y Nutrición Animal',
                    url: 'https://victunoa.com',
                    telephone: '+54-381-654-2124',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'San Miguel de Tucumán',
                        addressRegion: 'Tucumán',
                        addressCountry: 'AR',
                    },
                    areaServed: {
                        '@type': 'State',
                        name: zona.name,
                    },
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: zona.coords.lat,
                        longitude: zona.coords.lng,
                    },
                },
            ]
            : null,
    });

    if (!zona) {
        return (
            <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <h1>Zona no encontrada</h1>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hola! Soy productor de ${zona.name} y me interesa conocer más sobre sus biosales.`
    )}`;

    return (
        <div className={styles.page}>

            {/* ── BREADCRUMB NAV ── */}
            <nav className={styles.breadcrumb} aria-label="Navegación de ruta">
                <Link to="/">Inicio</Link>
                <span aria-hidden="true"> › </span>
                <span aria-current="page">{zona.name}</span>
            </nav>

            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroInner}`}>
                    <div className={styles.heroBadge}>{zona.region}</div>
                    <h1 className={styles.heroTitle}>{zona.h1}</h1>
                    <p className={styles.heroSub}>{zona.intro}</p>
                    <div className={styles.heroCtas}>
                        <a href={waLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary">Consultar por WhatsApp</Button>
                        </a>
                        <Link to="/#categorias">
                            <Button variant="secondary">Ver productos</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── GANADERÍA LOCAL ── */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.secTitle}>Ganadería en {zona.name}</h2>
                    <p className={styles.secText}>{zona.ganaderia}</p>
                </div>
            </section>

            {/* ── PRODUCTOS RECOMENDADOS ── */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.secTitle}>Productos recomendados para {zona.name}</h2>
                    <p className={styles.secText}>
                        En base al sistema productivo predominante en {zona.name}, estos son los productos Suplefeed de mayor impacto:
                    </p>
                    <div className={styles.productGrid}>
                        {zona.productos.map((p) => (
                            <div key={p.nombre} className={styles.productCard}>
                                <h3 className={styles.productName}>{p.nombre}</h3>
                                <p className={styles.productRazon}>{p.razon}</p>
                            </div>
                        ))}
                    </div>
                    <p className={styles.productNote}>
                        La selección final puede variar según lo que el técnico de Victu evalúe en campo. Cada establecimiento tiene sus propias condiciones de pastoreo, manejo y carga, y el plan nutricional se ajusta a esa realidad específica.
                    </p>
                    <div className={styles.productCta}>
                        <Link to="/#categorias">
                            <Button variant="secondary">Ver todos los productos</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── BIOENZYMIX STRIP ── */}
            <section className={styles.bioSection}>
                <div className="container">
                    <div className={styles.bioInner}>
                        <p className={styles.bioTitle}>
                            <span>Bio</span>enzymix™
                        </p>
                        <p className={styles.bioDesc}>
                            Nuestra fórmula de probióticos y enzimas activa la microbiota ruminal para transformar el aprovechamiento de fibra y proteína en más kilos y menos costos.
                            <br />
                            <br />
                            Bioenzymix es un innovador núcleo compuesto por una combinación sinérgica de enzimas, probióticos, prebióticos, levaduras, aminoácidos, aditivos específicos para la estimulación de la flora celulolítica, vitaminas (A, D, E) y minerales esenciales (Cu, Zn, Fe, Mn, I, Co, Se).
                        </p>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIAL ── */}
            {zona.testimonial && (
                <section className={styles.testiSection}>
                    <div className="container">
                        <h2 className={styles.secTitle}>Lo que dicen en {zona.name}</h2>
                        <blockquote className={styles.testimonial}>
                            <p className={styles.testiText}>{zona.testimonial.text}</p>
                            <footer className={styles.testiAuthor}>
                                <strong>{zona.testimonial.author}</strong>
                                <span>{zona.testimonial.role}</span>
                            </footer>
                        </blockquote>
                    </div>
                </section>
            )}

            {/* ── BIBLIOGRAFÍA ── */}
            {zona.bibliografia && zona.bibliografia.length > 0 && (
                <section className={styles.section}>
                    <div className="container">
                        <h2 className={styles.secTitle}>Fuentes de información</h2>
                        <ul className={styles.bibList}>
                            {zona.bibliografia.map((b, i) => (
                                <li key={i} className={styles.bibItem}>
                                    <strong>{b.titulo}</strong> ({b.anio}).{' '}
                                    {b.autor}. <em>{b.fuente}</em>.
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            {/* ── CTA FINAL ── */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>
                        ¿Producís en {zona.name}?
                    </h2>
                    <p className={styles.ctaSub}>
                        Hablá con nuestro equipo técnico y diseñamos un plan nutricional para tu rodeo.
                    </p>
                    <a href={waLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">Consultar ahora por WhatsApp</Button>
                    </a>
                </div>
            </section>

        </div>
    );
}
