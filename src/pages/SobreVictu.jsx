import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import styles from './SobreVictu.module.css';

const WHATSAPP_NUMBER = '5493816542124';
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hola! Me gustaría conocer más sobre Victu y sus productos de bionutrición.'
)}`;

const EQUIPO = [
    {
        nombre: 'Javier Kviatkovski',
        rol: 'Asesor Técnico',
        descripcion: 'Técnico asesor en alimentación del ganado bovino de carne; producción y manejo de la ganadería subtropical. Sistemas de pastoreos. conservación de forrajes. Acompaña a productores del NOA y NEA en la implementación y seguimiento de planes nutricionales con tecnología Bioenzymix™️.',
        initials: 'JK',
    },
    {
        nombre: 'Facundo Suarez',
        rol: 'Asesor Comercial',
        descripcion: 'Referente comercial de Victu para la región. Facilita el acceso a la línea completa de productos Suplefeed y coordina la atención personalizada a cada productor.',
        initials: 'FS',
    },
];

const VALORES = [
    {
        title: 'Técnica de campo',
        text: 'No vendemos desde un catálogo. Visitamos cada establecimiento, evaluamos el sistema productivo y diseñamos una solución a medida.',
    },
    {
        title: 'Bioenzymix™',
        text: 'Nuestra tecnología propia de probióticos y enzimas mejora la microbiota ruminal desde adentro, con resultados medibles en kilos ganados y costos reducidos.',
    },
    {
        title: 'Suplefeed — respaldo nacional',
        text: 'Somos representantes oficiales de Suplefeed en NOA y NEA, la empresa líder en bionutrición animal de Argentina, con más de 15 años de desarrollo científico.',
    },
    {
        title: 'Compromiso regional',
        text: 'Crecimos junto a los productores del NOA y NEA. Conocemos el campo de la región, sus desafíos y sus oportunidades.',
    },
];

const ZONAS_COBERTURA = [
    'Tucumán', 'Salta', 'Jujuy', 'Santiago del Estero',
    'Catamarca', 'La Rioja', 'Chaco', 'Formosa',
];

export default function SobreVictu() {
    useSEO({
        title: 'Sobre Victu - Representante Suplefeed NOA y NEA',
        description: 'Conocé quiénes somos en Victu: representantes oficiales de Suplefeed para NOA y NEA. Más de 8 años acompañando productores ganaderos con biosales y soporte técnico en campo.',
        url: '/sobre-victu',
        structuredData: [
            {
                '@context': 'https://schema.org',
                '@type': 'AboutPage',
                name: 'Sobre Victu',
                url: 'https://victunoa.com/sobre-victu',
                description: 'Victu es representante oficial de Suplefeed en NOA y NEA. Conocé al equipo, la misión y las zonas de cobertura.',
                publisher: {
                    '@type': 'Organization',
                    '@id': 'https://victunoa.com/#organization',
                    name: 'Victu',
                },
            },
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://victunoa.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Sobre Victu', item: 'https://victunoa.com/sobre-victu' },
                ],
            },
            {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                '@id': 'https://victunoa.com/#organization',
                name: 'Victu',
                alternateName: ['VICTU', 'Victu Biosales', 'Victu NOA'],
                url: 'https://victunoa.com',
                logo: 'https://victunoa.com/images/logo_og.png',
                description: 'Victu es representante oficial de Suplefeed en NOA y NEA. Proveemos biosales y soluciones de bionutrición animal para ganaderos en Tucumán, Salta, Jujuy, Santiago del Estero, Catamarca, La Rioja, Chaco y Formosa.',
                telephone: '+54-381-654-2124',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'San Miguel de Tucumán',
                    addressRegion: 'Tucumán',
                    addressCountry: 'AR',
                },
                areaServed: ZONAS_COBERTURA.map(name => ({ '@type': 'State', name })),
                knowsAbout: [
                    'Bionutrición animal',
                    'Suplementación bovina',
                    'Biosales para ganadería',
                    'Probióticos ruminales',
                    'Feedlot',
                    'Sistemas de cría extensiva',
                    'Tambo bovino',
                ],
                employee: [
                    {
                        '@type': 'Person',
                        name: 'Javier Kviatkovski',
                        jobTitle: 'Asesor Técnico',
                        worksFor: { '@type': 'Organization', name: 'Victu' },
                        knowsAbout: ['Bionutrición bovina', 'Suplementación animal', 'Biosales', 'Probióticos ruminales'],
                    },
                    {
                        '@type': 'Person',
                        name: 'Facundo Suarez',
                        jobTitle: 'Asesor Comercial',
                        worksFor: { '@type': 'Organization', name: 'Victu' },
                    },
                ],
            },
        ],
    });

    return (
        <div className={styles.page}>

            {/* ── BREADCRUMB ── */}
            <nav className={styles.breadcrumb} aria-label="Navegación de ruta">
                <Link to="/">Inicio</Link>
                <span aria-hidden="true"> › </span>
                <span aria-current="page">Sobre Victu</span>
            </nav>

            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroInner}`}>
                    <span className={styles.heroBadge}>QUIÉNES SOMOS</span>
                    <h1 className={styles.heroTitle}>
                        Bionutrición técnica para el campo argentino
                    </h1>
                    <p className={styles.heroSub}>
                        Victu es el representante oficial de Suplefeed en NOA y NEA. Más de 8 años acompañando productores ganaderos de 8 provincias con biosales, Bioenzymix™ y soporte técnico en campo.
                    </p>
                </div>
            </section>

            {/* ── MISIÓN ── */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.misionGrid}>
                        <div>
                            <h2 className={styles.secTitle}>Nuestra misión</h2>
                            <p className={styles.secText}>
                                Hacer accesible la bionutrición de precisión a cada productor ganadero del norte argentino. Creemos que la diferencia entre un campo rentable y uno que no lo es puede estar en cómo se alimenta el rumen de cada animal.
                            </p>
                            <p className={styles.secText}>
                                Por eso distribuimos los productos Suplefeed — con tecnología Bioenzymix™ — y acompañamos cada implementación con asesoramiento técnico real, en campo, con seguimiento de resultados.
                            </p>
                        </div>
                        <div className={styles.misionImg}>
                            <img
                                src="/images/hero2.webp"
                                alt="Ganado bovino en pastoreo - Victu Biosales"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ORIGEN ── */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.origenGrid}>
                        <div className={styles.origenText}>
                            <span className={styles.origenBadge}>NUESTRA HISTORIA</span>
                            <h2 className={styles.secTitle}>Cómo nació Victu</h2>
                            <p className={styles.secText}>
                                Conocé cómo nace Victu, quiénes están detrás de la marca y cómo sus biosales aportan beneficios en producción animal, rendimiento y calidad. Un recorrido por la historia, la experiencia y los resultados.
                            </p>
                        </div>
                        <div className={styles.origenVideo}>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    src="https://www.youtube.com/embed/WN23lbFxQE4"
                                    title="Conocé Victu | Biosales para mejor producción, rendimiento y calidad"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BIOENZYMIX ── */}
            <section className={styles.bioSection}>
                <div className="container">
                    <div className={styles.bioInner}>
                        <div>
                            <h2 className={styles.bioTitle}>
                                <span>Bio</span>enzymix™
                            </h2>
                            <p className={styles.bioSub}>Nuestra tecnología diferencial</p>
                        </div>
                        <p className={styles.bioText}>
                            Nuestra fórmula de probióticos y enzimas activa la microbiota ruminal para transformar el aprovechamiento de fibra y proteína en más kilos y menos costos.
                            <br />
                            <br />
                            Bioenzymix es un innovador núcleo compuesto por una combinación sinérgica de enzimas, probióticos, prebióticos, levaduras, aminoácidos, aditivos específicos para la estimulación de la flora celulolítica, vitaminas (A, D, E) y minerales esenciales (Cu, Zn, Fe, Mn, I, Co, Se).
                        </p>
                    </div>
                </div>
            </section>

            {/* ── EQUIPO ── */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.secTitle}>Nuestro equipo</h2>
                    <div className={styles.equipoGrid}>
                        {EQUIPO.map((m) => (
                            <div key={m.nombre} className={styles.equipoCard}>
                                <div className={styles.equipoAvatar}>{m.initials}</div>
                                <div className={styles.equipoInfo}>
                                    <h3 className={styles.equipoNombre}>{m.nombre}</h3>
                                    <span className={styles.equipoRol}>{m.rol}</span>
                                    <p className={styles.equipoDesc}>{m.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VALORES ── */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.secTitle}>Cómo trabajamos</h2>
                    <div className={styles.valoresGrid}>
                        {VALORES.map((v) => (
                            <div key={v.title} className={styles.valorCard}>
                                <h3 className={styles.valorTitle}>{v.title}</h3>
                                <p className={styles.valorText}>{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COBERTURA ── */}
            <section className={styles.coberturaSection}>
                <div className="container">
                    <h2 className={styles.secTitleLight}>Dónde estamos presentes</h2>
                    <p className={styles.coberturaIntro}>
                        Cubrimos las principales provincias ganaderas del norte argentino:
                    </p>
                    <ul className={styles.zonasList}>
                        {ZONAS_COBERTURA.map((zona) => (
                            <li key={zona} className={styles.zonaItem}>
                                <Link
                                    to={`/zonas/${zona.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                                    className={styles.zonaLink}
                                >
                                    {zona} →
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statNum}>8+</span>
                            <span className={styles.statLabel}>Años de experiencia</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNum}>8</span>
                            <span className={styles.statLabel}>Provincias cubiertas</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNum}>200+</span>
                            <span className={styles.statLabel}>Productores atendidos</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNum}>100%</span>
                            <span className={styles.statLabel}>Soporte técnico en campo</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUPLEFEED ── */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.secTitle}>Representantes oficiales de Suplefeed</h2>
                    <p className={styles.secText}>
                        Suplefeed es una empresa argentina especializada en bionutrición animal con más de 15 años de desarrollo científico. Sus productos están formulados con Bioenzymix™ y están diseñados para sistemas ganaderos extensivos e intensivos del norte y noreste argentino.
                    </p>
                    <p className={styles.secText}>
                        Como representantes exclusivos en NOA y NEA, Victu garantiza el acceso directo a toda la línea Suplefeed con soporte técnico local y asesoramiento personalizado.
                    </p>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>¿Querés conocer más sobre Victu?</h2>
                    <p className={styles.ctaSub}>
                        Hablá con nuestro equipo técnico. Evaluamos tu sistema productivo y te recomendamos la solución ideal.
                    </p>
                    <a href={waLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">Consultar por WhatsApp</Button>
                    </a>
                </div>
            </section>

        </div>
    );
}
