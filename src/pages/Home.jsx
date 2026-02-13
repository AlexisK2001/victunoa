import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Button from '../components/Button';
import CategoryCard from '../components/CategoryCard';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactForm from '../components/ContactForm';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';
import styles from './Home.module.css';

// Value Props Icons
import regionIcon from '../assets/icons/region.svg?raw';
import logisticsIcon from '../assets/icons/logistics.svg?raw';
import supportIcon from '../assets/icons/technical-support.svg?raw';

// Benefits Icons
import benefitConsumption from '../assets/icons/benefit-consumption.svg?raw';
import benefitCost from '../assets/icons/benefit-cost.svg?raw';
import benefitYield from '../assets/icons/benefit-yield.svg?raw';
import benefitEfficiency from '../assets/icons/benefit-efficiency.svg?raw';

// Contact Icons
import userIcon from '../assets/icons/user.svg?raw';
import phoneIcon from '../assets/icons/phone.svg?raw';
import emailIcon from '../assets/icons/email.svg?raw';
import whatsappIcon from '../assets/icons/whatsapp.svg?raw';

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
                                <div
                                    className={styles.valueIcon}
                                    dangerouslySetInnerHTML={{ __html: regionIcon }}
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
                                <div
                                    className={styles.valueIcon}
                                    dangerouslySetInnerHTML={{ __html: logisticsIcon }}
                                />
                            </div>
                            <h3 className={styles.valueTitle}>Logística a campo</h3>
                            <p className={styles.valueText}>Aseguramos disponibilidad de producto cuando se necesita.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <div
                                    className={styles.valueIcon}
                                    dangerouslySetInnerHTML={{ __html: supportIcon }}
                                />
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
                                icon: benefitConsumption
                            },
                            {
                                title: 'Menor costo',
                                text: 'Reducción de costo por kilo producido, optimizando la relación entre inversión en alimento y output de carne o leche.',
                                icon: benefitCost
                            },
                            {
                                title: 'Mayor rendimiento',
                                text: 'Mayor rendimiento de carga por hectárea, mejorando el uso de la fibra disponible en pasturas y reservas.',
                                icon: benefitYield
                            },
                            {
                                title: 'Mayor eficiencia',
                                text: 'Mejora en conversión alimenticia, reduciendo desbalances y pérdidas en el proceso digestivo.',
                                icon: benefitEfficiency
                            }
                        ].map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <div
                                        className={styles.benefitIcon}
                                        dangerouslySetInnerHTML={{ __html: benefit.icon }}
                                    />
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
