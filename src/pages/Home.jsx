import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import Button from '../components/Button';
import CategoryCard from '../components/CategoryCard';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactForm from '../components/ContactForm';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';
import styles from './Home.module.css';


// Benefits Icons
import menorConsumo from '../assets/icons/menorConsumo.PNG';
import menorCosto from '../assets/icons/menorCosto.PNG';
import mayorRendimiento from '../assets/icons/mayorRendimiento.PNG';
import mayorEficiencia from '../assets/icons/mayorEficiencia.PNG';

// Contact Icons
import userIcon from '../assets/icons/user.svg?raw';
import phoneIcon from '../assets/icons/phone.svg?raw';
import emailIcon from '../assets/icons/email.svg?raw';
import whatsappIcon from '../assets/icons/whatsapp.svg?raw';
import IMG_2632 from '../assets/icons/IMG_2632.PNG';
import IMG_2633 from '../assets/icons/IMG_2633.PNG';
import IMG_2634 from '../assets/icons/IMG_2634.PNG';

import { useSEO } from '../hooks/useSEO';

const BenefitAnimatedCard = ({ benefit }) => {
    const cardRef = useRef(null);
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    });

    // On mobile use no animation (native scroll is used instead of Framer)
    const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [0.7, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [0, 1]);

    return (
        <motion.div
            ref={cardRef}
            style={{ scale, opacity }}
            className={styles.benefitCardWrapper}
        >
            <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'currentColor',
                            WebkitMaskImage: `url(${benefit.icon})`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: `url(${benefit.icon})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center'
                        }}
                    />
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitText}>{benefit.text}</p>
            </div>
        </motion.div>
    );
};

export default function Home() {
    useSEO({
        title: '', // Uses default title
        description: 'Potencia tu producción ganadera con biosales y alimentos balanceados de alta performance. Representantes oficiales de Suplefeed en NOA y NEA.',
        keywords: 'biosales, bionutricion, nutricion animal, suplefeed, ganaderia, NOA, NEA, alimento balanceado, engorde, feedlot, cria, recria, tambo',
        url: '/'
    });
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // As we scroll horizontally, map 0->1 to 0% -> -75% horizontal shift (to reveal all 4 cards)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    // Array of dynamic scale and opacity transforms for each of the 4 cards based on scroll position
    const scales = [
        useTransform(scrollYProgress, [0, 0.33, 0.66], [1.15, 0.85, 0.85]),
        useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0.85, 1.15, 0.85, 0.85]),
        useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0.85, 0.85, 1.15, 0.85]),
        useTransform(scrollYProgress, [0.33, 0.66, 1], [0.85, 0.85, 1.15])
    ];

    const opacities = [
        useTransform(scrollYProgress, [0, 0.33, 0.66], [1, 0.5, 0.5]),
        useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0.5, 1, 0.5, 0.5]),
        useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0.5, 0.5, 1, 0.5]),
        useTransform(scrollYProgress, [0.33, 0.66, 1], [0.5, 0.5, 1])
    ];

    // Scroll Logic for Products (Vertical Carousel)
    const productsRef = useRef(null);
    const { scrollYProgress: productsScrollY } = useScroll({
        target: productsRef,
    });
    // With track at 400% height, translating it by -75% of its own 400% height means 3 items
    const productY = useTransform(productsScrollY, [0, 1], ["0%", "-75%"]);

    return (
        <div>
            {/* Hero Section */}
            <Hero
                title="Alimentación inteligente para la ganadería del NOA"
                subtitle="En VICTU acercamos la bionutrición y los alimentos balanceados de alta performance a productores del NOA y NEA, como representación oficial de Suplefeed SA."
            >
                <a href="#productos">
                    <Button variant="primary">Ver línea de productos</Button>
                </a>
                <a href="#contacto">
                    <Button variant="secondary">Contactar un asesor</Button>
                </a>
            </Hero>
            {/* Quiénes Somos */}
            <section id="quienes-somos" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Quiénes somos</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div>
                        <p className="lead-text" style={{ textAlign: 'justify' }}>
                            En VICTU trabajamos para que los productores del NOA y NEA tengan acceso a soluciones de bionutrición por medio de biosales de autoconsumo, premezclas, concentrados y alimentos balanceados con respaldo técnico y logístico.
                        </p>
                        <div className="body-text" style={{ textAlign: 'justify' }}>
                            <h4 style={{ color: '#000000', marginBottom: '1rem' }}>Somos representantes oficiales de la empresa Suplefeed SA.</h4>
                            <p>
                                Los productos de SUPLEFEED son una biotecnología desarrollada en EEUU, se trata de microbióticos que se activan en el rumen para desarmar en forma progresiva y secuencial la celulosa y hemicelulosa que se encuentran en las pasturas secas o diferidas y transformarlas en hidratos de carbonos (azúcares) utilizables, ésta en lo que respecta a digestar fibras en pastoreo o en TMR, por otro lado, contamos con biotecnología para dietas híper-energéticas que nos permiten eficientizar la síntesis del almidón presente en el maíz y otros cereales.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                El objetivo de uso de estas biotecnologías, es de utilizar el menor contenido de grano o concentrados y mayor cantidad de pasturas y o subproductos de baja calidad y costo para obtener resultados iguales a los obtenidos con la utilización de dietas convencionales hasta ahora utilizadas por todos.
                            </p>
                        </div>
                    </div>

                    <div className={styles.valueProps}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <img
                                    src={IMG_2633}
                                    alt="Cobertura Regional"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)', transform: 'scale(1.65)' }}
                                />
                            </div>
                            <h3 className={styles.valueTitle}>Cobertura regional</h3>
                            <h4 className={styles.valueText}>Region NOA</h4>
                            <p className={styles.valueText}>Tucuman, Salta, Jujuy, Santiago del Estero, Catamarca y La Rioja</p>
                            <h4 className={styles.valueText}>Region NEA</h4>
                            <p className={styles.valueText}>Chaco y Formosa</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <img
                                    src={IMG_2632}
                                    alt="Logistica a campo"
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
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)', transform: 'scale(1.75)' }}
                                />
                            </div>
                            <h3 className={styles.valueTitle}>Acompañamiento técnico</h3>
                            <p className={styles.valueText}>Soporte continuo para optimizar cada kilo de alimento.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Productos - Vertical Scroll Carousel */}
            <section id="productos" className="section section-alt" style={{ paddingBottom: 0 }}>
                <div ref={productsRef} className={styles.productsCarouselContainer}>
                    {/* Snap anchors for products */}
                    <div className={styles.snapAnchor} style={{ top: '0%' }}></div>
                    <div className={styles.snapAnchor} style={{ top: '25%' }}></div>
                    <div className={styles.snapAnchor} style={{ top: '50%' }}></div>
                    <div className={styles.snapAnchor} style={{ top: '75%' }}></div>

                    <div className={styles.productsStickyWrapper}>
                        <div className="container">
                            <div className="section-header" style={{ textAlign: 'center', margin: 0 }}>
                                <h2 className={styles.benefitsTitle} style={{ marginBottom: '1rem' }}>Líneas de productos</h2>
                                <div className="title-underline" style={{ margin: '0 auto' }}></div>
                                <p className="section-intro" style={{ marginTop: '1rem', fontSize: '1rem' }}>
                                    Ofrecemos una línea completa de bionutrición y alimentos balanceados para
                                    diferentes etapas y sistemas productivos, apoyados en la tecnología de Suplefeed.
                                </p>
                            </div>
                        </div>

                        <div className={styles.productsTrackContainer}>
                            <motion.div style={{ y: productY }} className={styles.productsTrack}>
                                {categories.map(category => (
                                    <div key={category.id} className={styles.productCardWrapper}>
                                        <CategoryCard category={category} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios */}
            <section id="servicios" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Servicio técnico y logística a campo</h2>
                        <div className="title-underline"></div>
                        <p className="section-intro">
                            No solo vendemos producto: acompañamos al productor con diagnóstico,
                            planificación y seguimiento para que cada inversión en alimentación se traduzca en resultados.
                        </p>
                    </div>

                    <div className={styles.serviceSteps}>
                        {[
                            { num: 1, title: 'Relevamiento', text: 'Análisis del establecimiento y del sistema de alimentación actual.' },
                            { num: 2, title: 'Propuesta', text: 'Plan de productos y suministro según objetivo (carne o leche).' },
                            { num: 3, title: 'Logística', text: 'Coordinación y entregas directas a campo.' },
                            { num: 4, title: 'Seguimiento', text: 'Monitoreo de resultados y ajustes junto al productor.' }
                        ].map(step => (
                            <div key={step.num} className={styles.stepItem}>
                                <div className={styles.stepNumber}>{step.num}</div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepText}>{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beneficios - Scroll Carousel */}
            <section id="beneficios" className="section section-green" style={{ paddingBottom: 0 }}>
                <div ref={targetRef} className={styles.benefitsCarouselContainer}>
                    {/* Snap anchors to perfectly pause the scroll when swiping down */}
                    <div className={styles.snapAnchor} style={{ top: '0%' }}></div>
                    <div className={styles.snapAnchor} style={{ top: '25%' }}></div>
                    <div className={styles.snapAnchor} style={{ top: '50%' }}></div>
                    <div className={styles.snapAnchor} style={{ top: '75%' }}></div>

                    <div className={styles.benefitsStickyWrapper}>
                        <div className="container">
                            <div className="section-header" style={{ textAlign: 'center' }}>
                                <h2 className={styles.benefitsTitle} style={{ marginBottom: 'var(--spacing-2xl)' }}>Beneficios para tu producción</h2>
                                <div className="title-underline" style={{ margin: '0 auto' }}></div>
                            </div>
                        </div>

                        <div className={styles.benefitsTrackContainer}>
                            {/* Mobile: plain CSS swipe carousel without any Framer Motion */}
                            {isMobile ? (
                                <div className={styles.benefitsTrack}>
                                    {[
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
                                    ].map((benefit, index) => (
                                        <div key={index} className={styles.benefitCardWrapper}>
                                            <div className={styles.benefitCard}>
                                                <div className={styles.benefitIcon}>
                                                    <div style={{
                                                        width: '100%', height: '100%',
                                                        backgroundColor: 'currentColor',
                                                        WebkitMaskImage: `url(${benefit.icon})`,
                                                        WebkitMaskSize: 'contain',
                                                        WebkitMaskRepeat: 'no-repeat',
                                                        WebkitMaskPosition: 'center',
                                                        maskImage: `url(${benefit.icon})`,
                                                        maskSize: 'contain',
                                                        maskRepeat: 'no-repeat',
                                                        maskPosition: 'center'
                                                    }} />
                                                </div>
                                                <div className={styles.benefitContent}>
                                                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                                    <p className={styles.benefitText}>{benefit.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                /* Desktop: Framer Motion animated horizontal track */
                                <motion.div style={{ x }} className={styles.benefitsTrack}>
                                    {[
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
                                    ].map((benefit, index) => (
                                        <div key={index} className={styles.benefitCardWrapper}>
                                            <motion.div
                                                className={styles.benefitCard}
                                                style={{ scale: scales[index], opacity: opacities[index] }}
                                            >
                                                <div className={styles.benefitIcon}>
                                                    <div
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'currentColor',
                                                            WebkitMaskImage: `url(${benefit.icon})`,
                                                            WebkitMaskSize: 'contain',
                                                            WebkitMaskRepeat: 'no-repeat',
                                                            WebkitMaskPosition: 'center',
                                                            maskImage: `url(${benefit.icon})`,
                                                            maskSize: 'contain',
                                                            maskRepeat: 'no-repeat',
                                                            maskPosition: 'center'
                                                        }}
                                                    />
                                                </div>
                                                <div className={styles.benefitContent}>
                                                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                                    <p className={styles.benefitText}>{benefit.text}</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                        {/* Swipe indicator - only visible on mobile via CSS */}
                        <div className={styles.swipeHint}>
                            <span>Deslizá para ver más</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Video Section (Moved outside of sticky area, back to normal flow but still in section-green) */}
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
                                <video controls>
                                    <source src="/videos/video-presentacion-suplefeed.mp4" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos HTML5.
                                </video>
                            </div>
                            <div className={styles.videoContainer}>
                                <video controls>
                                    <source src="/videos/Anweg.mp4" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos HTML5.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section id="testimonios" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Productores que ya trabajan con VICTU</h2>
                        <div className="title-underline"></div>
                    </div>
                    <TestimonialSlider testimonials={testimonials} />
                </div>
            </section>

            {/* Contacto */}
            <section id="contacto" className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Representación NOA y NEA</h2>
                        <div className="title-underline"></div>
                        <p className="section-intro">
                            Atendemos productores de <h4 className={styles.valueText}>Region NOA</h4>
                            <p className={styles.valueText}>Tucuman, Salta, Jujuy, Santiago del Estero, Catamarca y La Rioja</p>
                            <h4 className={styles.valueText}>Region NEA</h4>
                            <p className={styles.valueText}>Chaco y Formosa</p>
                        </p>
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
                                        <a href="mailto:gvictunoa@gmail.com">faqndosuarez@gmail.com</a>
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

            {/* Alianza Suplefeed */}
            <section id="alianza" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Respaldados por Suplefeed</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div>
                        <p className="lead-text">
                            Como representantes de Suplefeed SA en el NOA y NEA, trabajamos con una línea de productos
                            desarrollados específicamente para potenciar la eficiencia en la producción de carne y leche.
                        </p>
                        <p className="body-text">
                            Esa alianza nos permite ofrecer innovación en bionutrición junto con el soporte
                            cercano de un equipo local.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
