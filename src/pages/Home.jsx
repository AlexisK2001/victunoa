import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Button from '../components/Button';
import CategoryCard from '../components/CategoryCard';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactForm from '../components/ContactForm';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';
import styles from './Home.module.css';

import menorConsumo from '../assets/icons/menorConsumo.PNG';
import menorCosto from '../assets/icons/menorCosto.PNG';
import mayorRendimiento from '../assets/icons/mayorRendimiento.PNG';
import mayorEficiencia from '../assets/icons/mayorEficiencia.PNG';

import userIcon from '../assets/icons/user.svg?raw';
import phoneIcon from '../assets/icons/phone.svg?raw';
import emailIcon from '../assets/icons/email.svg?raw';
import whatsappIcon from '../assets/icons/whatsapp.svg?raw';
import IMG_2632 from '../assets/icons/IMG_2632.PNG';
import IMG_2633 from '../assets/icons/IMG_2633.PNG';
import IMG_2634 from '../assets/icons/IMG_2634.PNG';

import { useSEO } from '../hooks/useSEO';

const BENEFITS = [
    {
        title: 'Menor consumo',
        text: 'Mejor resultado con menor consumo, gracias al aprovechamiento óptimo de proteínas, carbohidratos y grasas presentes en la dieta.',
        icon: menorConsumo
    },
    {
        title: 'Menor costo',
        text: 'Reducción de costo por kilo producido, optimizando la relación entre inversión en alimento y output de carne o leche.',
        icon: menorCosto
    },
    {
        title: 'Mayor rendimiento',
        text: 'Mayor rendimiento de carga por hectárea, mejorando el uso de la fibra disponible en pasturas y reservas.',
        icon: mayorRendimiento
    },
    {
        title: 'Mayor eficiencia',
        text: 'Mejora en conversión alimenticia, reduciendo desbalances y pérdidas en el proceso digestivo.',
        icon: mayorEficiencia
    }
];

const SERVICE_STEPS = [
    { num: 1, title: 'Relevamiento', text: 'Análisis del establecimiento y del sistema de alimentación actual.' },
    { num: 2, title: 'Propuesta', text: 'Plan de productos y suministro según objetivo (carne o leche).' },
    { num: 3, title: 'Logística', text: 'Coordinación y entregas directas a campo.' },
    { num: 4, title: 'Seguimiento', text: 'Monitoreo de resultados y ajustes junto al productor.' }
];

const iconStyle = (icon) => ({
    width: '100%',
    height: '100%',
    backgroundColor: 'currentColor',
    WebkitMaskImage: `url(${icon})`,
    WebkitMaskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskImage: `url(${icon})`,
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    maskPosition: 'center'
});

export default function Home() {
    useSEO({
        title: '',
        description: 'Potencia tu producción ganadera con biosales y alimentos balanceados de alta performance. Representantes oficiales de Suplefeed en NOA y NEA.',
        keywords: 'biosales, bionutricion, nutricion animal, suplefeed, ganaderia, NOA, NEA, alimento balanceado, engorde, feedlot, cria, recria, tambo',
        url: '/',
        structuredData: [
            {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "VICTU - Biosales y Nutrición Animal",
                "description": "Representantes oficiales de Suplefeed SA en NOA y NEA. Biosales de autoconsumo, premezclas, concentrados y alimentos balanceados para ganadería.",
                "url": "https://victunoa.com",
                "telephone": "+5493816542124",
                "email": "faqndosuarez@gmail.com",
                "image": "https://victunoa.com/images/logo3.jpg",
                "areaServed": [
                    { "@type": "State", "name": "Tucumán" },
                    { "@type": "State", "name": "Salta" },
                    { "@type": "State", "name": "Jujuy" },
                    { "@type": "State", "name": "Santiago del Estero" },
                    { "@type": "State", "name": "Catamarca" },
                    { "@type": "State", "name": "La Rioja" },
                    { "@type": "State", "name": "Chaco" },
                    { "@type": "State", "name": "Formosa" }
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+5493816542124",
                    "contactType": "sales",
                    "availableLanguage": "Spanish"
                },
                "sameAs": ["https://wa.me/5493816542124"]
            },
            {
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "name": "Presentación Suplefeed - Bionutrición Animal",
                "description": "Conoce cómo los productos de bionutrición de Suplefeed transforman la producción ganadera en el NOA y NEA.",
                "contentUrl": "https://victunoa.com/videos/video-presentacion-suplefeed.mp4",
                "thumbnailUrl": "https://victunoa.com/images/logo3.jpg",
                "uploadDate": "2025-01-01"
            }
        ]
    });

    return (
        <div>
            <Hero
                title="Alimentación inteligente para la ganadería"
                subtitle="Bionutrición y balanceados de alta performance para productores del NOA y NEA."
            >
                <a href="#productos">
                    <Button variant="primary">Ver línea de productos</Button>
                </a>
                <a href="#contacto">
                    <Button variant="secondary">Contactar un asesor</Button>
                </a>
            </Hero>

            <section id="como-trabajamos" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Quiénes somos y cómo trabajamos</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div>
                        <p className="lead-text">
                            Representantes oficiales de Suplefeed SA en NOA y NEA. Llevamos biotecnología de bionutrición directamente al campo, con respaldo técnico y logística propia.
                        </p>
                        <ul className={styles.aboutBullets}>
                            <li>Biotecnología desarrollada en EEUU que activa microbióticos en el rumen para aprovechar al máximo pasturas, reservas y cereales.</li>
                            <li>Menos grano, más pastura — mismos resultados productivos a menor costo por kilo.</li>
                            <li>Diagnóstico, propuesta y seguimiento técnico incluidos en cada vínculo comercial.</li>
                        </ul>
                    </div>

                    <div className={styles.valueProps}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <img
                                    src={IMG_2633}
                                    alt="Cobertura Regional"
                                    loading="lazy"
                                    width="80"
                                    height="80"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)', transform: 'scale(1.65)' }}
                                />
                            </div>
                            <h3 className={styles.valueTitle}>Cobertura regional</h3>
                            <h4 className={styles.valueText}>NOA</h4>
                            <p className={styles.valueText}>Tucumán, Salta, Jujuy, Santiago del Estero, Catamarca y La Rioja</p>
                            <h4 className={styles.valueText}>NEA</h4>
                            <p className={styles.valueText}>Chaco y Formosa</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <img
                                    src={IMG_2632}
                                    alt="Logística a campo"
                                    loading="lazy"
                                    width="80"
                                    height="80"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)', transform: 'scale(1.75)' }}
                                />
                            </div>
                            <h3 className={styles.valueTitle}>Logística a campo</h3>
                            <p className={styles.valueText}>Aseguramos disponibilidad de producto cuando se necesita.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <img
                                    src={IMG_2634}
                                    alt="Acompañamiento técnico"
                                    loading="lazy"
                                    width="80"
                                    height="80"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)', transform: 'scale(1.75)' }}
                                />
                            </div>
                            <h3 className={styles.valueTitle}>Acompañamiento técnico</h3>
                            <p className={styles.valueText}>Soporte continuo para optimizar cada kilo de alimento.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="productos" className="section section-alt">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center' }}>
                        <h2 className="section-title">Líneas de productos</h2>
                        <div className="title-underline"></div>
                        <p className="section-intro">
                            Bionutrición y balanceados para cada etapa productiva.
                        </p>
                    </div>
                    <div className={styles.productGrid}>
                        {categories.map(category => (
                            <Link key={category.id} to={`/${category.slug}`} className={styles.productHeroCard}>
                                <div className={styles.productHeroIcon} dangerouslySetInnerHTML={{ __html: category.icon }} />
                                <div className={styles.productHeroContent}>
                                    <h3 className={styles.productHeroTitle}>{category.name}</h3>
                                    <p className={styles.productHeroDesc}>{category.description}</p>
                                    <span className={styles.productHeroLink}>Ver productos →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="beneficios" className="section section-green">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center' }}>
                        <h2 className="section-title">Beneficios para tu producción</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className={styles.benefitGrid}>
                        {BENEFITS.map((benefit, index) => (
                            <div key={index} className={`${styles.benefitGridCard} ${index % 2 === 1 ? styles.benefitGridCardAlt : ''}`}>
                                <div className={styles.benefitGridIcon}>
                                    <div style={iconStyle(benefit.icon)} />
                                </div>
                                <div className={styles.benefitGridContent}>
                                    <h3 className={styles.benefitGridTitle}>{benefit.title}</h3>
                                    <p className={styles.benefitGridText}>{benefit.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <div className={styles.videoSection}>
                        <div className={styles.videoHeader}>
                            <h3 className={styles.videoTitle}>Conoce nuestros productos en acción</h3>
                            <p className={styles.videoDescription}>
                                Descubre cómo nuestros productos de bionutrición transforman la producción ganadera.
                            </p>
                        </div>
                        <div className={styles.videoGrid}>
                            <div className={styles.videoContainer}>
                                <video controls preload="none" poster="/images/logo3.jpg">
                                    <source src="/videos/video-presentacion-suplefeed.mp4" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos HTML5.
                                </video>
                            </div>
                            <div className={styles.videoContainer}>
                                <video controls preload="none" poster="/images/logo3.jpg">
                                    <source src="/videos/Anweg.mp4" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos HTML5.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonios" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Testimonios</h2>
                        <div className="title-underline"></div>
                    </div>
                    <TestimonialSlider testimonials={testimonials} />
                </div>
            </section>

            <section id="contacto" className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Contacto</h2>
                        <div className="title-underline"></div>
                        <p className="section-intro">Atendemos productores de NOA y NEA. Escribinos o llamanos directamente.</p>
                    </div>

                    <div className={styles.contactLayout}>
                        <div className={styles.contactInfo}>
                            <div className={styles.infoCard}>
                                <h3 className={styles.infoTitle}>VICTU</h3>
                                <p className={styles.infoSubtitle}>Representación NOA y NEA</p>
                                <div className={styles.infoDetails}>
                                    <div className={styles.infoItem}>
                                        <div className={styles.iconS} dangerouslySetInnerHTML={{ __html: userIcon }} />
                                        <span>Facundo Suárez</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <div className={styles.iconS} dangerouslySetInnerHTML={{ __html: phoneIcon }} />
                                        <a href="tel:+5493816542124">381 6542124</a>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <div className={styles.iconS} dangerouslySetInnerHTML={{ __html: emailIcon }} />
                                        <a href="mailto:faqndosuarez@gmail.com">faqndosuarez@gmail.com</a>
                                    </div>
                                </div>
                                <div className={styles.contactButtons}>
                                    <a href="https://wa.me/5493816542124" target="_blank" rel="noreferrer">
                                        <Button variant="primary" className="btn-full">
                                            <span style={{ width: '24px', height: '24px', marginRight: '8px', display: 'flex' }} dangerouslySetInnerHTML={{ __html: whatsappIcon }} />
                                            WhatsApp
                                        </Button>
                                    </a>
                                    <a href="tel:+5493816542124">
                                        <Button variant="secondary" className="btn-full">Llamar ahora</Button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contactFormWrapper}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
