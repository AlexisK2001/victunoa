import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Button from '../components/Button';
import CategoryCard from '../components/CategoryCard';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactForm from '../components/ContactForm';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';
import styles from './Home.module.css';

export default function Home() {
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
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>Cobertura regional</h3>
                            <h4 className={styles.valueText}>Region NOA</h4>
                            <p className={styles.valueText}>Tucuman, Salta, Jujuy, Santiago del Estero y Catamarca</p>
                            <h4 className={styles.valueText}>Region NEA</h4>
                            <p className={styles.valueText}>Chaco y Formosa</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>Logística a campo</h3>
                            <p className={styles.valueText}>Aseguramos disponibilidad de producto cuando se necesita.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>Acompañamiento técnico</h3>
                            <p className={styles.valueText}>Soporte continuo para optimizar cada kilo de alimento.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Productos */}
            <section id="productos" className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Líneas de productos</h2>
                        <div className="title-underline"></div>
                        <p className="section-intro">
                            Ofrecemos una línea completa de bionutrición y alimentos balanceados para
                            diferentes etapas y sistemas productivos, apoyados en la tecnología de Suplefeed.
                        </p>
                    </div>

                    <div className={styles.productCategories}>
                        {categories.map(category => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
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

            {/* Beneficios */}
            <section id="beneficios" className="section section-green">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Beneficios para tu producción</h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {[
                            {
                                title: 'Menor consumo',
                                text: 'Mejor resultado con menor consumo, gracias al aprovechamiento óptimo de proteínas, carbohidratos y grasas presentes en la dieta.',
                                icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            },
                            {
                                title: 'Menor costo',
                                text: 'Reducción de costo por kilo producido, optimizando la relación entre inversión en alimento y output de carne o leche.',
                                icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            },
                            {
                                title: 'Mayor rendimiento',
                                text: 'Mayor rendimiento de carga por hectárea, mejorando el uso de la fibra disponible en pasturas y reservas.',
                                icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            },
                            {
                                title: 'Mayor eficiencia',
                                text: 'Mejora en conversión alimenticia, reduciendo desbalances y pérdidas en el proceso digestivo.',
                                icon: (
                                    <>
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                        <polyline points="10 9 9 9 8 9" />
                                    </>
                                )
                            }
                        ].map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        {benefit.icon}
                                    </svg>
                                </div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitText}>{benefit.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Video Section */}
                    <div className={styles.videoSection}>
                        <div className={styles.videoHeader}>
                            <h3 className={styles.videoTitle}>Conoce nuestros productos en acción</h3>
                            <p className={styles.videoDescription}>
                                Descubre cómo nuestros productos de bionutrición transforman la producción ganadera.
                            </p>
                        </div>
                        <div className={styles.videoContainer}>
                            <video controls>
                                <source src="/videos/video-presentacion-suplefeed.mp4" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos HTML5.
                            </video>
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
                            <p className={styles.valueText}>Tucuman, Salta, Jujuy, Santiago del Estero y Catamarca</p>
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
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                        </svg>
                                        <span>Facundo Suárez</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        <a href="tel:+5493816542124">381 6542124</a>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        <a href="mailto:gvictunoa@gmail.com">ejemplo@ejemplo.com</a>
                                    </div>
                                </div>
                                <div className={styles.contactButtons}>
                                    <a href="https://wa.me/5493816542124" target="_blank" rel="noreferrer">
                                        <Button variant="primary" className="btn-full">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
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
