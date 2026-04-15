import { useState, useRef, useEffect, useCallback } from 'react';
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

const GALLERY = [
    {
        badge: 'Foto',
        title: 'Rodeo en etapa intermedia',
        desc: 'Animales bajo dieta de recria, con variaciones en el estado corporal',
        img: '/images/engorde2.webp'
    },
    {
        badge: 'Foto',
        title: 'Rodeo en etapa intermedia',
        desc: 'Animales en recria, algunos ya presentan buen estado corporal',
        img: '/images/engorde1.webp'
    },
    {
        badge: 'Foto',
        title: 'Recorrida del campo',
        desc: 'Analisis del estado corporal y desempeño productivo',
        img: '/images/engorde3.webp'
    },
    {
        badge: 'Foto',
        title: 'Lote de cria',
        desc: 'Buen estado corporal de los animales',
        img: '/images/victu_image.webp'
    },
    {
        badge: 'Foto',
        title: 'Lote de cria',
        desc: 'Buen estado corporal de los animales',
        img: '/images/victu_image2.webp'
    },
    {
        badge: 'Foto',
        title: 'Recorrida del campo',
        desc: 'Analisis del estado corporal y desempeño productivo',
        img: '/images/victu_image3.webp'
    },
    {
        badge: 'Foto',
        title: 'Manejo del pastoreo',
        desc: 'Pasturas subtropicales (Gatton Panic)',
        img: '/images/victu_image4.webp',
    },
    {
        badge: 'Foto',
        title: 'Recorrida del campo',
        desc: 'Analisis del estado corporal y desempeño productivo',
        img: '/images/imagen_victu1.webp',
    },
];

const GALLERY_MEDIA = GALLERY.map(item => ({
    ...item,
    mediaType: item.isVideo ? 'video' : 'image'
}));

// ── YouTube ───────────────────────────
// Reemplazá cada id con el ID real del video de YouTube (lo encontrás en la URL: ?v=AQUI)
const YOUTUBE_VIDEOS = [
    { id: 'U8t8V8fmE_0', title: 'Propuesta de manejo del pastoreo en pasturas megatérmicas', isShort: true },
    { id: 'rbXfvVn8HBw', title: 'Suplementacion en base a pasturas megatérmicas', isShort: true },
    { id: 'YzLiOxQ-wS8', title: 'Señales de alerta: Mortandad animal y el mal olor en corrales', isShort: true },
    { id: '6iP3YwQi0wQ', title: 'Visitando campos de productores que trabajan con nosotros', isShort: true },
    { id: 'xcD5Vv3yYxw', title: 'Visitando campos de productores que trabajan con nosotros', isShort: true },
    { id: 'Bt9HRueIjF0', title: 'Visitando campos de productores que trabajan con nosotros', isShort: true },
];

/* ──────────────────────────────────────
   COMPONENT
────────────────────────────────────── */
const CRITICAL_IMAGES = [
    '/images/hero2.webp',
    iconMayor,
    iconMenor,
    iconSanos,
    iconSoporteTecnico,
    iconMayorRendimiento,
    iconReduccionCostos,
    iconSaludAnimalSostenida,
    // Primera imagen de la galería — visible en el viewport inicial
    '/images/engorde2.webp',
    // Imágenes hero de cada categoría — se precargan para navegación instantánea
    '/images/vaca_cria.webp',
    '/images/vacas_recria.webp',
    '/images/vacas_engorde.webp',
    '/images/vaca_tambo.webp',
    // Imágenes de productos — se precargan para que aparezcan al instante al entrar a una categoría
    '/images/biosala.webp',
    '/images/biosalmax.webp',
    '/images/biosalmix.webp',
    '/images/rbr.webp',
    '/images/afi.webp',
    // Imágenes de galería — se precargan para que el fullscreen abra al instante
    '/images/engorde1.webp',
    '/images/engorde3.webp',
    '/images/victu_image.webp',
    '/images/victu_image2.webp',
    '/images/victu_image3.webp',
    '/images/victu_image4.webp',
    '/images/imagen_victu1.webp',
];

// Detect Instagram in-app browser (IAB).
// Instagram's WebView ignores fetch() caching for video — it needs a different strategy.
const isInstagramBrowser =
    typeof navigator !== 'undefined' && /Instagram/.test(navigator.userAgent);

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
    const [fullscreenIndex, setFullscreenIndex] = useState(0);
    const [fullscreenImgLoaded, setFullscreenImgLoaded] = useState(false);
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
        setFullscreenImgLoaded(false);
        setFullscreenIndex(index);
        setIsFullscreenOpen(true);
    };

    const closeFullscreen = () => {
        setGalleryIndex(fullscreenIndex);
        setIsFullscreenOpen(false);
    };

    const handleFullscreenClose = (event) => {
        event.currentTarget.blur();
        closeFullscreen();
    };

    const prevFullscreen = useCallback(() => {
        setFullscreenImgLoaded(false);
        setFullscreenIndex(current => {
            if (totalMedia === 0) return 0;
            return (current - 1 + totalMedia) % totalMedia;
        });
    }, [totalMedia]);

    const nextFullscreen = useCallback(() => {
        setFullscreenImgLoaded(false);
        setFullscreenIndex(current => {
            if (totalMedia === 0) return 0;
            return (current + 1) % totalMedia;
        });
    }, [totalMedia]);

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

    // After the loading screen, preload videos in the background so they are
    // cached when the user reaches the gallery.
    //
    // Strategy A — normal browsers: sequential fetch() calls (browser caches the response).
    // Strategy B — Instagram IAB: hidden <video preload="auto"> elements, because Instagram's
    //              WebView does NOT honour fetch() caching for video media.
    useEffect(() => {
        if (isLoading) return;

        const videoUrls = GALLERY
            .filter(g => g.isVideo)
            .map(g => g.src);

        // ── STRATEGY B: Instagram in-app browser ─────────────────────────────
        if (isInstagramBrowser) {
            // Create an off-screen container with hidden <video> elements.
            // WebViews buffer video reliably when a <video preload="auto"> element exists,
            // even if it is invisible.
            const container = document.createElement('div');
            container.setAttribute('aria-hidden', 'true');
            container.style.cssText =
                'position:fixed;width:1px;height:1px;top:-9999px;left:-9999px;' +
                'overflow:hidden;pointer-events:none;visibility:hidden;';
            document.body.appendChild(container);

            // Only preload the first 4 videos to avoid killing mobile bandwidth.
            const PRELOAD_LIMIT = 4;
            videoUrls.slice(0, PRELOAD_LIMIT).forEach(url => {
                const v = document.createElement('video');
                v.preload = 'auto';
                v.muted = true;
                v.playsInline = true;
                v.src = url;
                v.load();               // explicitly trigger buffering
                container.appendChild(v);
            });

            return () => {
                // Stop buffering and remove all hidden elements on unmount
                Array.from(container.querySelectorAll('video')).forEach(v => {
                    v.pause();
                    v.removeAttribute('src');
                    v.load();
                });
                document.body.removeChild(container);
            };
        }

        // ── STRATEGY A: normal browsers ──────────────────────────────────────
        let cancelled = false;
        let index = 0;
        let timeoutId = null;

        const preloadNext = () => {
            if (cancelled || index >= videoUrls.length) return;
            const url = videoUrls[index];
            index += 1;

            fetch(url, { cache: 'force-cache' })
                .catch(() => { /* silently ignore network errors */ })
                .finally(() => {
                    if (!cancelled) {
                        // Small gap between fetches to avoid saturating the connection
                        timeoutId = setTimeout(preloadNext, 300);
                    }
                });
        };

        // Give the browser ~1s to settle after the page paints before starting
        timeoutId = setTimeout(preloadNext, 1000);

        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
        };
    }, [isLoading]);

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

    // Precargar imágenes adyacentes en fullscreen para evitar demora al navegar en móvil
    useEffect(() => {
        if (!isFullscreenOpen || totalMedia === 0) return;
        const indices = [
            (fullscreenIndex - 1 + totalMedia) % totalMedia,
            (fullscreenIndex + 1) % totalMedia,
        ];
        indices.forEach(i => {
            const item = GALLERY_MEDIA[i];
            if (item && item.mediaType === 'image' && item.img) {
                const img = new Image();
                img.src = item.img;
            }
        });
    }, [isFullscreenOpen, fullscreenIndex, totalMedia]);

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
                prevFullscreen();
                return;
            }
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                nextFullscreen();
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
    }, [isFullscreenOpen, totalMedia, nextFullscreen, prevFullscreen]);

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
                            Alimentación <em>sustentable</em> para la ganadería
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
                            {GALLERY.map((g, i) => {
                                // The video src is always injected because the background preloader
                                // (useEffect) has already fetched and cached the file.
                                // preload="none" for non-active slides so the <video> element doesn't
                                // make its own network request — the cache does the work.
                                const isActive = i === galleryIndex;

                                return (
                                    <div key={i} className={styles.gallerySlide}>
                                        <div className={styles.galleryCard}>
                                            <div className={styles.galleryMedia}>
                                                {g.isVideo ? (
                                                    <div className={styles.galleryMediaVideo}>
                                                        <video
                                                            controls
                                                            preload={isActive ? (isInstagramBrowser ? 'auto' : 'metadata') : 'none'}
                                                            poster={g.img}
                                                            playsInline
                                                            aria-label={`Video ${g.title || 'sin título'}`}
                                                        >
                                                            {/* src always present — browser reads from cache */}
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
                                                        <img src={g.img} alt={g.title} loading={i === 0 ? 'eager' : 'lazy'} style={g.imgFit ? { objectFit: g.imgFit } : undefined} />
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
                                );
                            })}
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
                            <>
                                {!fullscreenImgLoaded && (
                                    <div className={styles.galleryFullscreenSpinner} aria-hidden="true">
                                        <div className={styles.gallerySpinnerRing} />
                                    </div>
                                )}
                                <img
                                    key={fullscreenItem.img}
                                    src={fullscreenItem.img}
                                    alt={fullscreenItem.title}
                                    className={styles.galleryFullscreenMedia}
                                    loading="eager"
                                    fetchpriority="high"
                                    onLoad={() => setFullscreenImgLoaded(true)}
                                    style={fullscreenImgLoaded ? undefined : { opacity: 0 }}
                                />
                            </>
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
                YOUTUBE VIDEOS
            ══════════════════════════════════════ */}
            <section className={styles.ytSection}>
                <div className="container">
                    <div className={styles.secHeader}>
                        <span className={styles.secLabel}>VIDEOS EN YOUTUBE</span>
                        <h2 className={styles.secTitle}>Canal de YouTube VICTU</h2>
                        <p className={styles.secSub}>Mirá nuestro contenido directamente en YouTube y conocé más sobre nuestros productos y resultados.</p>
                    </div>
                    <div className={styles.ytGrid}>
                        {YOUTUBE_VIDEOS.map((v) => (
                            <a
                                key={v.id}
                                href={v.isShort ? `https://youtube.com/shorts/${v.id}` : `https://www.youtube.com/watch?v=${v.id}`}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.ytCard}
                            >
                                <div className={styles.ytThumb}>
                                    <img
                                        src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                                        alt={v.title}
                                        loading="lazy"
                                        className={styles.ytThumbImg}
                                    />
                                    <div className={styles.ytThumbOverlay} />
                                    <div className={styles.ytThumbPlay}>
                                        <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                                <div className={styles.ytInfo}>
                                    <p className={styles.ytTitle}>{v.title}</p>
                                    <span className={styles.ytLink}>
                                        <svg viewBox="0 0 24 24" fill="#FF0000" width="14" height="14"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.3 5 12 5 12 5s-4.3 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9C6.8 19 12 19 12 19s4.3 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.2 3L10 15z" /></svg>
                                        Ver en YouTube
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className={styles.ytCta}>
                        <a
                            href="https://www.youtube.com/channel/UCA-oPHSi4MbbAgAJhHG3d1Q"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.ytCtaBtn}
                        >
                            <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.3 5 12 5 12 5s-4.3 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9C6.8 19 12 19 12 19s4.3 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.2 3L10 15z" /></svg>
                            Ver canal en YouTube
                        </a>
                    </div>
                </div>
            </section>

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
