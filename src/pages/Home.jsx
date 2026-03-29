import { useState, useRef, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import Button from '../components/Button';
import styles from './Home.module.css';
import iconMayor from '../assets/icons/mayor.PNG';
import iconMenor from '../assets/icons/menor.PNG';
import iconSanos from '../assets/icons/animales_mas_sanos.PNG';
import iconSoporteTecnico from '../assets/icons/soporte_tecnico.PNG';
import iconMayorRendimiento from '../assets/icons/mayor_rendimiento.PNG';
import iconReduccionCostos from '../assets/icons/reduccion_de_costo.PNG';
import iconSaludAnimalSostenida from '../assets/icons/salud_animal_sostenida.PNG';


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
        fieldImg: '/images/vaca_cria.jpeg',
    },
    {
        id: 'recria',
        slug: 'recria',
        label: 'RECRÍA',
        title: 'Recría',
        desc: 'Soluciones nutricionales para maximizar el crecimiento entre el destete y el inicio del engorde.',
        fieldImg: '/images/vacas_recria.jpeg',
    },
    {
        id: 'engorde',
        slug: 'engorde',
        label: 'ENGORDE',
        title: 'Engorde',
        desc: 'Formulaciones de alta performance para feedlot y sistemas de engorde intensivo en pasturas.',
        fieldImg: '/images/vacas_engorde.jpeg',
    },
    {
        id: 'tambo',
        slug: 'tambo',
        label: 'TAMBO',
        title: 'Tambo',
        desc: 'Bionutrición especializada para incrementar la producción láctea y sostener la condición corporal.',
        fieldImg: '/images/vaca_tambo.jpeg',
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

const GALLERY = [
    {
        badge: 'Foto',
        title: 'Rodeo en etapa intermedia',
        desc: 'Animales bajo dieta de recria, con variaciones en el estado corporal',
        img: '/images/engorde2.jpeg'
    },
    {
        badge: 'Foto',
        title: 'Rodeo en etapa intermedia',
        desc: 'Animales en recria, algunos ya presentan buen estado corporal',
        img: '/images/engorde1.jpeg'
    },
    {
        badge: 'Foto',
        title: 'Recorrida del campo',
        desc: 'Analisis del estado corporal y desempeño productivo',
        img: '/images/engorde3.jpeg'
    },
    {
        badge: 'Foto',
        title: 'Lote de cria',
        desc: 'Buen estado corporal de los animales',
        img: '/images/victu_image.jpeg'
    },
    {
        badge: 'Foto',
        title: 'Lote de cria',
        desc: 'Buen estado corporal de los animales',
        img: '/images/victu_image2.jpeg'
    },
    {
        badge: 'Foto',
        title: 'Recorrida del campo',
        desc: 'Analisis del estado corporal y desempeño productivo',
        img: '/images/victu_image3.jpeg'
    },
    {
        badge: 'Foto',
        title: 'Manejo del pastoreo',
        desc: 'Pasturas subtropicales (Gatton Panic)',
        img: '/images/victu_image4.jpeg',
    },
    {
        badge: 'Foto',
        title: 'Recorrida del campo',
        desc: 'Analisis del estado corporal y desempeño productivo',
        img: '/images/imagen_victu1.jpeg',
    },
    {
        badge: 'Video',
        img: '/images/logo_og.png',
        isVideo: true,
        src: '/videos/video_victu6.mp4'
    },
    {
        badge: 'Video',
        img: '/images/logo_og.png',
        isVideo: true,
        src: '/videos/victu_video8.mp4'
    },
    {
        badge: 'Video',
        img: '/images/logo_og.png',
        isVideo: true,
        src: '/videos/victu_video9.mp4'
    },
    {
        badge: 'Video',
        img: '/images/logo_og.png',
        isVideo: true,
        src: '/videos/victu_video7.mp4'
    },
    {
        badge: 'Video',
        img: '/images/logo_og.png',
        isVideo: true,
        src: '/videos/victu_video10.mp4'
    },
    {
        badge: 'Video',
        img: '/images/logo_og.png',
        isVideo: true,
        src: '/videos/video_victu1.mp4'
    },

    {
        badge: 'Video',
        img: '/images/logo_og.png',
        isVideo: true,
        src: '/videos/video_victu3.mp4'
    },
    {
        badge: 'Video',
        img: '/images/logo_og.png',
        isVideo: true,
        src: '/videos/victu_video5.mp4'
    },
    {
        badge: 'Video',
        title: 'Manejo del pastoreo',
        desc: 'Pasturas subtropicales (Gatton Panic)',
        img: '/images/logo_og.png',
        isVideo: true,
        src: '/videos/video_victu4.mp4'
    }
];

const GALLERY_MEDIA = GALLERY.map(item => ({
    ...item,
    mediaType: item.isVideo ? 'video' : 'image'
}));

/* ──────────────────────────────────────
   COMPONENT
────────────────────────────────────── */
const CRITICAL_IMAGES = [
    '/images/hero2.jpeg',
    iconMayor,
    iconMenor,
    iconSanos,
    iconSoporteTecnico,
    iconMayorRendimiento,
    iconReduccionCostos,
    iconSaludAnimalSostenida,
];

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
    const [fullscreenIndex, setFullscreenIndex] = useState(0);
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);
    const carouselRef = useRef(null);
    const fullscreenContainerRef = useRef(null);
    const closeButtonRef = useRef(null);
    const lastFocusedElement = useRef(null);
    const totalMedia = GALLERY_MEDIA.length;

    const prevSlide = () => setGalleryIndex(i => (i - 1 + GALLERY.length) % GALLERY.length);
    const nextSlide = () => setGalleryIndex(i => (i + 1) % GALLERY.length);

    const handlePrevSlide = (event) => {
        event.currentTarget.blur();
        prevSlide();
    };

    const handleNextSlide = (event) => {
        event.currentTarget.blur();
        nextSlide();
    };

    const openFullscreen = (index) => {
        if (index === null || index === undefined || index < 0 || index >= totalMedia) return;
        setFullscreenIndex(index);
        setIsFullscreenOpen(true);
    };

    const closeFullscreen = () => setIsFullscreenOpen(false);

    const handleFullscreenClose = (event) => {
        event.currentTarget.blur();
        closeFullscreen();
    };

    const prevFullscreen = () => {
        setFullscreenIndex(current => {
            if (totalMedia === 0) return 0;
            return (current - 1 + totalMedia) % totalMedia;
        });
    };

    const nextFullscreen = () => {
        setFullscreenIndex(current => {
            if (totalMedia === 0) return 0;
            return (current + 1) % totalMedia;
        });
    };

    const handlePrevFullscreen = (event) => {
        event.currentTarget.blur();
        prevFullscreen();
    };

    const handleNextFullscreen = (event) => {
        event.currentTarget.blur();
        nextFullscreen();
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) delta > 0 ? nextSlide() : prevSlide();
        touchStartX.current = null;
        touchStartY.current = null;
    };

    useEffect(() => {
        let cancelled = false;
        const promises = CRITICAL_IMAGES.map(src => new Promise(resolve => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
        }));
        Promise.all(promises).then(() => {
            if (!cancelled) setIsLoading(false);
        });
        return () => { cancelled = true; };
    }, []);

    // Register non-passive touchmove to allow preventDefault (needed for swipe-right)
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        const onMove = (e) => {
            if (touchStartX.current === null) return;
            const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
            const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
            if (dx > dy && dx > 8) e.preventDefault();
        };
        el.addEventListener('touchmove', onMove, { passive: false });
        return () => el.removeEventListener('touchmove', onMove);
    }, []);

    useEffect(() => {
        if (!isFullscreenOpen) return undefined;
        return () => {
            setGalleryIndex(fullscreenIndex);
        };
    }, [isFullscreenOpen, fullscreenIndex]);

    useEffect(() => {
        if (!isFullscreenOpen) return;
        lastFocusedElement.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        if (closeButtonRef.current) closeButtonRef.current.focus();
        const getFocusableElements = () => {
            if (!fullscreenContainerRef.current) return [];
            return Array.from(
                fullscreenContainerRef.current.querySelectorAll(
                    'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
            );
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                setIsFullscreenOpen(false);
                return;
            }
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                setFullscreenIndex(current => (current - 1 + totalMedia) % totalMedia);
                return;
            }
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                setFullscreenIndex(current => (current + 1) % totalMedia);
                return;
            }
            if (event.key === 'Tab') {
                const focusable = getFocusableElements();
                if (!focusable.length) {
                    event.preventDefault();
                    return;
                }
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                } else if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                }
            }
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
            if (lastFocusedElement.current) {
                lastFocusedElement.current.focus();
            }
        };
    }, [isFullscreenOpen, totalMedia]);

    const fullscreenItem = GALLERY_MEDIA[fullscreenIndex];
    useSEO({
        title: '',
        description: 'Victu: biosales y nutrición animal en Tucumán. Representantes oficiales de Suplefeed en NOA y NEA. Soluciones para cría, recría, engorde y tambo bovino.',
        keywords: 'Victu, victu tucuman, biosales tucuman, biosales argentina, bionutricion tucuman, nutricion animal tucuman, suplefeed tucuman, ganaderia tucuman, NOA NEA, suplemento ganadero, feedlot tucuman, nutricion bovina',
        url: '/',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Qué son las biosales Victu?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Las biosales Victu son suplementos nutricionales con Bioenzymix que mejoran la digestión ruminal, incrementan la ganancia de peso y reducen el costo por kilo producido en sistemas ganaderos de NOA y NEA."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Dónde consigo biosales en Tucumán?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Victu es el representante oficial de Suplefeed en Tucumán y el NOA. Podés consultarnos por WhatsApp al +54 381 654 2124 o a través de nuestra web victunoa.com."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Qué zonas cubre Victu?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Victu cubre el NOA (Tucumán, Salta, Jujuy, Santiago del Estero, Catamarca y La Rioja) y el NEA (Chaco y Formosa)."
                    }
                }
            ]
        }
    });

    return (
        <div className={styles.page}>
            {isLoading && (
                <div className={styles.loadingOverlay} aria-hidden="true">
                    <img src="/images/logovictu.png" alt="Victu" className={styles.loadingLogo} />
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
                            Alimentación sustentable para la ganadería
                        </h1>
                        <p className={styles.heroSub}>
                            Soluciones técnicas para mejorar digestión, rendimiento y rentabilidad en bovinos, ovinos y sistemas a campo.
                        </p>
                        <div className={styles.heroCtas}>
                            <a href="https://wa.me/5493816542124" target="_blank" rel="noreferrer">
                                <Button variant="primary">Consultar por WhatsApp</Button>
                            </a>
                            <a href="#productos">
                                <Button variant="secondary">Ver productos</Button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.heroRight}>
                        <img
                            src="/images/hero2.jpeg"
                            alt="Ganado bovino en pastoreo"
                            className={styles.heroImg}
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
                PRODUCTS — 2x2 grid con fotos reales
            ══════════════════════════════════════ */}
            <section id="productos" className={styles.productsSection}>
                <div className="container">
                    <div className={styles.secHeader}>
                        <span className={styles.secLabel}>SOLUCIONES POR ETAPA PRODUCTIVA</span>
                        <h2 className={styles.secTitle}>Nuestros Productos</h2>
                        <p className={styles.secSub}>Soluciones nutricionales diseñadas para cada etapa productiva</p>
                    </div>
                    <div className={styles.productGrid}>
                        {PRODUCT_CARDS.map(p => (
                            <Link key={p.id} to={`/${p.slug}`} className={styles.productCard}>
                                <div className={styles.productCardMedia}>
                                    <img src={p.fieldImg} alt={p.title} loading="lazy" />
                                    <span className={styles.productCardBadge}>{p.label}</span>
                                </div>
                                <div className={styles.productCardBody}>
                                    <h3 className={styles.productCardTitle}>{p.title}</h3>
                                    <p className={styles.productCardDesc}>{p.desc}</p>
                                    <span className={styles.productCardLink}>Ver más →</span>
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
                STATS
            ══════════════════════════════════════ */}
            <section id="como-trabajamos" className={styles.statsSection}>
                <div className="container">
                    <div className={styles.secHeader}>
                        <span className={styles.secLabel}>CONFIANZA Y TRAYECTORIA</span>
                        <h2 className={styles.statsSectionTitle}>La elección de productores en todo el país</h2>
                    </div>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statNum}>8+</span>
                            <span className={styles.statLabel}>Años de experiencia</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNum}>200+</span>
                            <span className={styles.statLabel}>Clientes activos</span>
                        </div>
                        <div className={styles.statCard}>
                            <p className={styles.coverageTitle}>Cobertura regional</p>
                            <div className={styles.coverageCard}>
                                <div className={styles.coverageRow}>
                                    <span className={styles.coverageBadge}>NOA</span>
                                    <span className={styles.coverageText}>Tucumán, Salta, Jujuy,{' '}Santiago del Estero,{' '}Catamarca y La Rioja</span>
                                </div>
                                <div className={styles.coverageRow}>
                                    <span className={`${styles.coverageBadge} ${styles.coverageBadgeAlt}`}>NEA</span>
                                    <span className={styles.coverageText}>Chaco y Formosa</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.statCard} ${styles.statCardDark}`}>
                            <span className={`${styles.statNum} ${styles.statNumGold}`}>100%</span>
                            <span className={styles.statLabelLight}>Asesoramiento técnico especializado</span>
                        </div>
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
                        {STEPS.map((s, i) => (
                            <Fragment key={s.num}>
                                <div className={styles.stepItem}>
                                    <div className={styles.stepCircle} style={{ backgroundColor: s.color, color: s.textColor }}>{s.num}</div>
                                    <h3 className={styles.stepTitle}>{s.title}</h3>
                                    <p className={styles.stepText}>{s.text}</p>
                                </div>
                                {i < STEPS.length - 1 && (
                                    <div className={styles.stepArrow}>→</div>
                                )}
                            </Fragment>
                        ))}
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
                GALLERY — "Conocé nuestros productos en acción"
            ══════════════════════════════════════ */}
            <section id="galeria" className={styles.gallerySection}>
                <div className="container">
                    <div className={styles.secHeader}>
                        <span className={styles.secLabel}>GALERÍA / NOVEDADES</span>
                        <h2 className={styles.secTitle}>Conocé nuestros productos en acción</h2>
                    </div>

                    {/* Carousel track — swipeable */}
                    <div
                        ref={carouselRef}
                        className={styles.galleryCarousel}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className={styles.galleryTrack}
                            style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
                        >
                            {GALLERY.map((g, i) => (
                                <div key={i} className={styles.gallerySlide}>
                                    <div className={styles.galleryCard}>
                                        <div className={styles.galleryMedia}>
                                            {g.isVideo ? (
                                                <div className={styles.galleryMediaVideo}>
                                                    <video
                                                        controls
                                                        preload="metadata"
                                                        poster={g.img}
                                                        playsInline
                                                        aria-label={`Video ${g.title}`}
                                                    >
                                                        <source src={g.src} type="video/mp4" />
                                                    </video>
                                                </div>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className={styles.galleryMediaButton}
                                                    onClick={() => openFullscreen(i)}
                                                    aria-label={`Abrir imagen ${g.title} en pantalla completa`}
                                                >
                                                    <img src={g.img} alt={g.title} loading="lazy" style={g.imgFit ? { objectFit: g.imgFit } : undefined} />
                                                </button>
                                            )}
                                            <span className={`${styles.galleryBadge} ${g.isVideo ? styles.galleryBadgeVideo : ''}`}>
                                                {g.badge}
                                            </span>
                                        </div>
                                        <div className={styles.galleryInfo}>
                                            <p className={styles.galleryTitle}>{g.title}</p>
                                            <p className={styles.galleryDesc}>{g.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots + agrupación de botones prev/next */}
                    <div className={styles.galleryNav}>
                        <div className={styles.galleryDots}>
                            {GALLERY.map((_, i) => (
                                <button
                                    key={i}
                                    className={`${styles.galleryDot} ${i === galleryIndex ? styles.galleryDotActive : ''}`}
                                    onClick={(event) => {
                                        event.currentTarget.blur();
                                        setGalleryIndex(i);
                                    }}
                                    aria-label={`Ir a slide ${i + 1}`}
                                />
                            ))}
                        </div>
                        <div className={styles.galleryArrows}>
                            <button className={styles.galleryArrow} onClick={handlePrevSlide} aria-label="Anterior">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button className={styles.galleryArrow} onClick={handleNextSlide} aria-label="Siguiente">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {isFullscreenOpen && fullscreenItem && (
                <div
                    className={styles.galleryFullscreen}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Galería en pantalla completa"
                    onClick={closeFullscreen}
                >
                    <div
                        ref={fullscreenContainerRef}
                        className={styles.galleryFullscreenInner}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <span className={styles.galleryFullscreenCounter}>
                            {fullscreenIndex + 1} / {totalMedia}
                        </span>
                        <button
                            type="button"
                            className={styles.galleryFullscreenClose}
                            onClick={handleFullscreenClose}
                            aria-label="Cerrar pantalla completa"
                            ref={closeButtonRef}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className={`${styles.galleryFullscreenArrow} ${styles.galleryFullscreenPrev}`}
                            onClick={handlePrevFullscreen}
                            aria-label="Imagen anterior"
                            disabled={totalMedia <= 1}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        {fullscreenItem.mediaType === 'video' ? (
                            <video
                                key={fullscreenItem.src}
                                className={styles.galleryFullscreenMedia}
                                src={fullscreenItem.src}
                                controls
                                autoPlay
                                playsInline
                                preload="auto"
                                poster={fullscreenItem.img}
                            />
                        ) : (
                            <img
                                src={fullscreenItem.img}
                                alt={fullscreenItem.title}
                                className={styles.galleryFullscreenMedia}
                            />
                        )}
                        <button
                            type="button"
                            className={`${styles.galleryFullscreenArrow} ${styles.galleryFullscreenNext}`}
                            onClick={handleNextFullscreen}
                            aria-label="Imagen siguiente"
                            disabled={totalMedia <= 1}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                        <div className={styles.galleryFullscreenMeta}>
                            <p className={styles.galleryFullscreenTitle}>{fullscreenItem.title}</p>
                            <p className={styles.galleryFullscreenDesc}>{fullscreenItem.desc}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* ══════════════════════════════════════
                CTA BANNER
            ══════════════════════════════════════ */}
            <section id="contacto" className={styles.ctaBanner}>
                <div className="container">
                    <div className={styles.ctaInner}>
                        <span className={styles.ctaLabel}>CONTACTO DIRECTO</span>
                        <h2 className={styles.ctaTitle}>¿Listo para mejorar el rendimiento de tu campo?</h2>
                        <p className={styles.ctaSub}>Hablá con nuestro equipo técnico y recibí una consulta personalizada para tu sistema productivo.</p>
                        <div className={styles.ctaButtons}>
                            <a href="https://wa.me/5493816542124" target="_blank" rel="noreferrer">
                                <Button variant="primary" size="large">
                                    <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}>
                                        <path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.385.68 4.61 1.86 6.5L4 29l7.697-1.836A12.94 12.94 0 0 0 16.003 28C22.632 28 28 22.627 28 16S22.632 3 16.003 3zm0 2C21.534 5 26 9.477 26 15S21.534 25 16.003 25c-1.8 0-3.49-.48-4.96-1.32l-.356-.207-4.572 1.09 1.12-4.464-.23-.372A10.94 10.94 0 0 1 5 15C5 9.477 9.474 5 16.003 5zm-3.9 5.09c-.22 0-.56.082-.852.39-.293.308-1.12 1.094-1.12 2.667 0 1.572 1.146 3.09 1.305 3.305.16.213 2.23 3.55 5.49 4.838 2.71 1.07 3.26.858 3.85.804.59-.054 1.9-.776 2.168-1.525.27-.75.27-1.393.19-1.527-.08-.135-.293-.215-.614-.376-.32-.16-1.9-.937-2.194-1.044-.293-.107-.507-.16-.72.16-.213.32-.826 1.044-.986 1.258-.16.214-.32.24-.614.08-.293-.16-1.237-.456-2.357-1.453-.871-.776-1.46-1.733-1.63-2.027-.17-.293-.018-.45.128-.596.13-.13.293-.34.44-.508.146-.17.195-.294.293-.508.097-.213.048-.4-.025-.56-.074-.16-.69-1.74-.963-2.38-.254-.613-.52-.534-.72-.543-.19-.008-.4-.01-.614-.01z" />
                                    </svg>
                                    Consultar por WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
