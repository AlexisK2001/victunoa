import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import Button from '../components/Button';
import styles from './Home.module.css';
import iconMayor from '../assets/icons/mayor.webp';
import iconMenor from '../assets/icons/menor.webp';
import iconSanos from '../assets/icons/animales_mas_sanos.webp';
import iconSoporteTecnico from '../assets/icons/soporte_tecnico.webp';
import iconMayorRendimiento from '../assets/icons/mayor_rendimiento.webp';
import iconReduccionCostos from '../assets/icons/reduccion_de_costo.webp';
import iconSaludAnimalSostenida from '../assets/icons/salud_animal_sostenida.webp';


/* ──────────────────────────────────────
   DATA
────────────────────────────────────── */
const VALUE_PROPS = [
    {
        icon: (
            <img src={iconMayor} alt="Ganancia de peso" />
        ),
        title: 'Mayor ganancia de peso',
        text: 'Activa los microbianos del rumen para mejorar el aprovechamiento de fibra y proteína, resultando en mayor ganancia diaria de peso con menos insumos.'
    },
    {
        icon: (
            <img src={iconMenor} alt="Costo por kilo producido" />
        ),
        title: 'Menos costo por kilo producido',
        text: 'Al optimizar la digestión, reducís la cantidad de suplemento necesaria. Mejor conversión alimenticia para que cada peso invertido rinda más.'
    },
    {
        icon: (
            <img src={iconSanos} alt="Animales más sanos" />
        ),
        title: 'Animales más sanos',
        text: 'Microbiota ruminal equilibrada, menos episodios de acidosis y timpanismo. Animales con mejor estado inmunológico y menor mortalidad en el lote.'
    }
];

const PRODUCT_CARDS = [
    {
        id: 'cria',
        slug: 'cria',
        label: 'CRÍA',
        title: 'Cría',
        desc: 'Suplementación mineral y probiótica para vacas de cría y terneros. Mejora la eficiencia reproductiva y el desarrollo temprano.',
        fieldImg: '/images/vaca_cria.webp',
    },
    {
        id: 'recria',
        slug: 'recria',
        label: 'RECRÍA',
        title: 'Recría',
        desc: 'Soluciones nutricionales para maximizar el crecimiento entre el destete y el inicio del engorde.',
        fieldImg: '/images/vacas_recria.webp',
    },
    {
        id: 'engorde',
        slug: 'engorde',
        label: 'ENGORDE',
        title: 'Engorde',
        desc: 'Formulaciones de alta performance para feedlot y sistemas de engorde intensivo en pasturas.',
        fieldImg: '/images/vacas_engorde.webp',
    },
    {
        id: 'tambo',
        slug: 'tambo',
        label: 'TAMBO',
        title: 'Tambo',
        desc: 'Bionutrición especializada para incrementar la producción láctea y sostener la condición corporal.',
        fieldImg: '/images/vaca_tambo.webp',
    }
];

const BENEFITS = [
    {
        icon: (
            <img src={iconMayorRendimiento} alt="Mayor rendimiento" />
        ),
        title: 'Mayor rendimiento',
        text: 'Mejora comprobada en conversión alimenticia y ganancia de peso diaria en sistemas a campo'
    },
    {
        icon: (
            <img src={iconReduccionCostos} alt="Reducción de costos" />
        ),
        title: 'Reducción de costos',
        text: 'Optimización del costo por kilo producido con formulaciones de alta eficiencia productiva'
    },
    {
        icon: (
            <img src={iconSaludAnimalSostenida} alt="Salud animal sostenida" />
        ),
        title: 'Salud animal sostenida',
        text: 'Fortalecimiento del sistema inmune y reducción de episodios sanitarios en el rodeo'
    },
    {
        icon: (
            <img src={iconSoporteTecnico} alt="Soporte técnico" />
        ),
        title: 'Soporte técnico experto',
        text: 'Acompañamiento profesional en campo para implementación, seguimiento y resultados'
    }
];

const STEPS = [
    { num: '01', title: 'Diagnóstico', text: 'Evaluamos el sistema productivo, la categoría animal y los objetivos del productor.', color: '#2B3A2B', textColor: '#C9A96E' },
    { num: '02', title: 'Plan Nutricional', text: 'Diseñamos un programa personalizado con los productos adecuados para cada etapa.', color: '#6B8C6B', textColor: '#FFFFFF' },
    { num: '03', title: 'Seguimiento', text: 'Monitoreamos resultados, ajustamos el plan y brindamos asistencia técnica continua.', color: '#C9A96E', textColor: '#2B3A2B' },
];

const TESTIMONIALS = [
    {
        text: '"Trabajando con biosales logramos una carne de excelente calidad. Sabemos que es una carne sin antibióticos, con la terneza del corral pero con el verdadero sabor de la carne a pasto. Además, obtenemos una grasa óptima y un producto más limpio, sin sabores indeseados. Los resultados en el campo y en la calidad final de la carne se notan."',
        author: 'Vaca Roja',
        role: 'Carnicería — Tucumán',
        initials: 'VR',
        avatarColor: '#C9A96E'
    },
    {
        text: '"Desde que implementamos estas soluciones con probióticos, mejoró mucho el resultado final. Logramos una carne tierna, con buen sabor y una grasa equilibrada, manteniendo un sistema más natural de producción."',
        author: 'Don Juan',
        role: 'Carnicería — Chaco',
        initials: 'DJ',
        avatarColor: '#6B8C6B'
    }
];

const FAQS = [
    {
        q: '¿Qué son las biosales y cómo funcionan?',
        a: 'Las biosales son suplementos nutricionales para bovinos que combinan sales minerales con probióticos y enzimas digestivas. A diferencia de los suplementos tradicionales, actúan directamente sobre la microbiota ruminal para que el animal aproveche mejor cada bocado de forraje, sin antibióticos.'
    },
    {
        q: '¿Qué es Bioenzymix™?',
        a: 'Bioenzymix™ es la tecnología diferencial de Suplefeed: un sistema de probióticos vivos y enzimas digestivas que activa el rumen desde adentro. Mejora la fermentación de fibra y proteína, incrementa la ganancia diaria de peso y reduce el costo por kilo producido. Es lo que distingue a las biosales de un simple suplemento mineral.'
    },
    {
        q: '¿Para qué categorías ganaderas son los productos?',
        a: 'Tenemos formulaciones específicas para cría (vacas y terneros), recría (desde destete hasta engorde), engorde (feedlot e intensivo a pasto) y tambo (producción láctea). Cada línea está diseñada para los requerimientos nutricionales de esa etapa productiva.'
    },
    {
        q: '¿En qué provincias trabaja Victu?',
        a: 'Cubrimos el NOA: Tucumán, Salta, Jujuy, Santiago del Estero, Catamarca y La Rioja; y el NEA: Chaco y Formosa. Somos el representante oficial de Suplefeed para toda esta región del norte argentino.'
    },
    {
        q: '¿Victu da asistencia técnica en campo?',
        a: 'Sí. Nuestro asesor técnico Javier Kviatkovski realiza visitas al campo para diagnóstico del sistema productivo, diseño del plan nutricional y seguimiento de resultados. No vendemos solo el producto — acompañamos la implementación.'
    },
    {
        q: '¿Cómo empiezo a trabajar con Victu?',
        a: 'El primer paso es una consulta gratuita por WhatsApp (+54 381 654 2124). Evaluamos tu sistema productivo, la categoría animal y tus objetivos. A partir de ahí diseñamos el plan nutricional y coordinamos la primera entrega con seguimiento técnico incluido.'
    },
];

/* ──────────────────────────────────────
   COMPONENT
────────────────────────────────────── */
export default function Home() {
    // 'loading' → overlay visible | 'fading' → overlay fade-out | 'done' → overlay removed
    const [loadingPhase, setLoadingPhase] = useState('loading');
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        let cancelled = false;

        const startFade = () => {
            if (cancelled) return;
            setLoadingPhase('fading');
            setTimeout(() => {
                if (!cancelled) setLoadingPhase('done');
            }, 350);
        };

        // Solo esperar la imagen del hero — es lo único visible al abrir
        const heroImg = new Image();
        heroImg.onload = startFade;
        heroImg.onerror = startFade;
        heroImg.src = '/images/hero2.webp';

        // Timeout máximo: 1.2s en lugar de 3s
        const timeout = setTimeout(startFade, 1200);

        return () => {
            cancelled = true;
            clearTimeout(timeout);
        };
    }, []);

    useSEO({
        title: '',
        description: 'Victu: biosales y nutrición animal en Tucumán. Representantes oficiales de Suplefeed en NOA y NEA. Soluciones para cría, recría, engorde y tambo bovino.',
        keywords: 'Victu, victu tucuman, biosales tucuman, biosales argentina, bionutricion tucuman, nutricion animal tucuman, suplefeed tucuman, ganaderia tucuman, NOA NEA, suplemento ganadero, feedlot tucuman, nutricion bovina',
        url: '/',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
                }
            }))
        }
    });

    return (
        <div className={styles.page}>
            {loadingPhase !== 'done' && (
                <div
                    className={`${styles.loadingOverlay} ${loadingPhase === 'fading' ? styles.loadingOverlayHide : ''}`}
                    aria-hidden="true"
                >
                    <img src="/images/logovictu.webp" alt="Victu" className={styles.loadingLogo} />
                    <div className={styles.loadingSpinner} />
                </div>
            )}

            {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroInner}`}>
                    <div className={styles.heroLeft}>
                        <span className={styles.heroLabel}>NUTRICIÓN ANIMAL TÉCNICA</span>
                        <h1 className={styles.heroTitle}>
                            Biosales y nutrición animal para la ganadería <em>sustentable</em>
                        </h1>
                        <p className={styles.heroSub}>
                            Soluciones técnicas para mejorar digestión, rendimiento y rentabilidad en bovinos, ovinos y sistemas a campo.
                        </p>
                        <div className={styles.heroCtas}>
                            <a href="https://wa.me/5493816542124" target="_blank" rel="noreferrer">
                                <Button variant="primary">Consultar por WhatsApp</Button>
                            </a>
                            <a href="#categorias">
                                <Button variant="secondary">Ver categorías</Button>
                            </a>
                        </div>
                        <div className={styles.heroDataPills}>
                            <span className={styles.heroDataPill}>8+ años</span>
                            <span className={styles.heroDataPillDot} />
                            <span className={styles.heroDataPill}>200+ clientes</span>
                            <span className={styles.heroDataPillDot} />
                            <span className={styles.heroDataPill}>NOA · NEA</span>
                        </div>
                    </div>
                    <div className={styles.heroRight}>
                        <img
                            src="/images/hero2.webp"
                            alt="Ganado bovino en pastoreo"
                            className={styles.heroImg}
                            fetchPriority="high"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                VALUE PROPS — "Más resultado, menos costo"
            ══════════════════════════════════════ */}
            <section className={styles.valueSection}>
                <div className="container">
                    <h2 className={styles.valueSectionTitle}>Más resultado, menos costo</h2>
                    <div className={styles.valueGrid}>
                        {VALUE_PROPS.map((v, i) => (
                            <div key={i} className={styles.valueItem}>
                                <div className={styles.valueItemIcon}>{v.icon}</div>
                                <h3 className={styles.valueItemTitle}>{v.title}</h3>
                                <p className={styles.valueItemText}>{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                BIOENZYMIX — Technology strip
            ══════════════════════════════════════ */}
            <section className={styles.bioSection}>
                <div className="container">
                    <div className={styles.bioInner}>
                        <p className={styles.bioName}>
                            <span>Bio</span>enzymix™
                        </p>
                        <p className={styles.bioSub}>
                            Nuestra fórmula de probióticos y enzimas activa la microbiota ruminal para transformar el aprovechamiento de fibra y proteína en más kilos y menos costos.
                            <br />
                            <br />
                            Bioenzymix es un innovador núcleo compuesto por una combinación sinérgica de enzimas, probióticos, prebióticos, levaduras, aminoácidos, aditivos específicos para la estimulación de la flora celulolítica, vitaminas (A, D, E) y minerales esenciales (Cu, Zn, Fe, Mn, I, Co, Se).
                        </p>
                        <div className={styles.bioFlow}>
                            <span className={styles.bioFlowItem}>Microbiota</span>
                            <span className={styles.bioFlowArrow}>→</span>
                            <span className={styles.bioFlowItem}>Rumen</span>
                            <span className={styles.bioFlowArrow}>→</span>
                            <span className={styles.bioFlowItem}>Conversión</span>
                            <span className={styles.bioFlowArrow}>→</span>
                            <span className={styles.bioFlowItem}>Rentabilidad</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                PRODUCTS — 2x2 grid con fotos reales
            ══════════════════════════════════════ */}
            <section id="categorias" className={styles.productsSection}>
                <div className="container">
                    <div className={styles.secHeader}>
                        <span className={styles.secLabel}>SOLUCIONES POR ETAPA PRODUCTIVA</span>
                        <h2 className={styles.secTitle}>Nuestras Categorías</h2>
                        <p className={styles.secSub}>Soluciones nutricionales diseñadas para cada etapa productiva</p>
                    </div>
                    <div className={styles.productGrid}>
                        {PRODUCT_CARDS.map(p => (
                            <Link key={p.id} to={`/${p.slug}`} className={styles.productCard}>
                                <div className={styles.productCardMedia}>
                                    <img src={p.fieldImg} alt={p.title} loading="lazy" />
                                    <div className={styles.productCardOverlay} />
                                    <span className={styles.productCardBadge}>{p.label}</span>
                                    <div className={styles.productCardBody}>
                                        <h3 className={styles.productCardTitle}>{p.title}</h3>
                                        <p className={styles.productCardDesc}>{p.desc}</p>
                                        <span className={styles.productCardLink}>Ver productos →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                BENEFITS — DARK BG
            ══════════════════════════════════════ */}
            <section id="beneficios" className={styles.benefitsSection}>
                <div className="container">
                    <div className={`${styles.secHeader} ${styles.secHeaderLight}`}>
                        <span className={`${styles.secLabel} ${styles.secLabelLight}`}>BENEFICIOS COMPROBADOS</span>
                        <h2 className={`${styles.secTitle} ${styles.secTitleLight}`}>Resultados que hablan por sí solos</h2>
                    </div>
                    <div className={styles.benefitsGrid}>
                        {BENEFITS.map((b, i) => (
                            <div key={i} className={styles.benefitItem}>
                                <div className={styles.benefitIcon}>{b.icon}</div>
                                <h3 className={styles.benefitTitle}>{b.title}</h3>
                                <p className={styles.benefitText}>{b.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                PROCESS — 3 STEPS WITH ARROWS
            ══════════════════════════════════════ */}
            <section className={styles.processSection}>
                <div className="container">
                    <div className={styles.secHeader}>
                        <span className={styles.secLabel}>CÓMO TRABAJAMOS</span>
                        <h2 className={styles.secTitle}>Un proceso simple, resultados medibles</h2>
                        <p className={styles.secSub}>Desde el diagnóstico hasta el seguimiento, acompañamos cada etapa de tu sistema productivo.</p>
                    </div>
                    <div className={styles.stepsRow}>
                        {STEPS.map((s) => {
                            const isLightCard = s.textColor === '#2B3A2B';
                            return (
                                <div
                                    key={s.num}
                                    className={styles.stepItem}
                                    style={{ backgroundColor: s.color }}
                                >
                                    <p className={styles.stepNum} style={{ color: s.textColor }}>{s.num}</p>
                                    <h3 className={styles.stepTitle} style={{ color: isLightCard ? '#2B3A2B' : '#FFFFFF' }}>{s.title}</h3>
                                    <p className={styles.stepText} style={{ color: isLightCard ? 'rgba(43,58,43,0.72)' : 'rgba(255,255,255,0.72)' }}>{s.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                TESTIMONIALS — 2 COLUMNS
            ══════════════════════════════════════ */}
            <section id="testimonios" className={styles.testiSection}>
                <div className="container">
                    <div className={styles.secHeader}>
                        <span className={styles.secLabel}>TESTIMONIOS</span>
                        <h2 className={styles.secTitle}>Lo que dicen nuestros clientes</h2>
                    </div>
                    <div className={styles.testiGrid}>
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className={styles.testiCard}>
                                <p className={styles.testiText}>{t.text}</p>
                                <div className={styles.testiAuthor}>
                                    <div
                                        className={styles.testiAvatar}
                                        style={{ backgroundColor: t.avatarColor }}
                                    >
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className={styles.testiName}>{t.author}</p>
                                        <p className={styles.testiRole}>{t.role}</p>
                                    </div>
                                </div>
                                <div className={styles.testiStars}>★★★★★</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                FAQ
            ══════════════════════════════════════ */}
            <section className={styles.faqSection}>
                <div className="container">
                    <div className={styles.secHeader}>
                        <span className={styles.secLabel}>PREGUNTAS FRECUENTES</span>
                        <h2 className={styles.secTitle}>Todo lo que necesitás saber</h2>
                    </div>
                    <div className={styles.faqList}>
                        {FAQS.map((item, i) => (
                            <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                >
                                    <span>{item.q}</span>
                                    <svg className={styles.faqIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>
                                {openFaq === i && (
                                    <p className={styles.faqAnswer}>{item.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={styles.faqCta}>
                        <Link to="/biosales">
                            <Button variant="primary">Ver guía completa sobre biosales</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                CTA BANNER
            ══════════════════════════════════════ */}

        </div>
    );
}
