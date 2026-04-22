import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import Button from '../components/Button';
import styles from './BiosalesGuia.module.css';

const WHATSAPP = 'https://wa.me/5493816542124';

const COMPARACION = [
    { aspecto: 'Componente base', biosales: 'Sales minerales + probióticos + enzimas', tradicional: 'Sales minerales únicamente' },
    { aspecto: 'Acción en el rumen', biosales: 'Activa la microbiota ruminal', tradicional: 'No actúa sobre la microbiota' },
    { aspecto: 'Digestión de fibra', biosales: 'Mejora significativamente', tradicional: 'Sin efecto directo' },
    { aspecto: 'Ganancia de peso', biosales: 'Incremento comprobado', tradicional: 'Resultado variable' },
    { aspecto: 'Costo por kilo producido', biosales: 'Se reduce con el tiempo', tradicional: 'Sin optimización' },
    { aspecto: 'Uso de antibióticos', biosales: 'No requiere', tradicional: 'Puede requerir' },
    { aspecto: 'Asesoramiento técnico', biosales: 'Incluido con Victu', tradicional: 'Generalmente no incluido' },
];

const BENEFICIOS_CATEGORIA = [
    {
        categoria: 'Cría',
        slug: 'cria',
        beneficios: [
            'Mejora la eficiencia reproductiva en vacas de cría',
            'Acelera el desarrollo de terneros en etapa temprana',
            'Reduce la mortalidad perinatal',
            'Optimiza el estado corporal durante la preñez',
        ]
    },
    {
        categoria: 'Recría',
        slug: 'recria',
        beneficios: [
            'Maximiza la ganancia de peso entre destete y engorde',
            'Mejora la conversión del forraje disponible',
            'Reduce el tiempo de recría',
            'Prepara al animal para la etapa de terminación',
        ]
    },
    {
        categoria: 'Engorde',
        slug: 'engorde',
        beneficios: [
            'Incrementa la ganancia diaria de peso en feedlot',
            'Mejora la conversión alimenticia',
            'Reduce episodios de acidosis y timpanismo',
            'Produce carne sin antibióticos, con mejor calidad organoléptica',
        ]
    },
    {
        categoria: 'Tambo',
        slug: 'tambo',
        beneficios: [
            'Incrementa la producción láctea',
            'Mejora la condición corporal de la vaca',
            'Optimiza la fermentación ruminal en dietas de alta energía',
            'Sostiene la salud metabólica en el posparto',
        ]
    },
];

const PRODUCTOS_SUPLEFEED = [
    {
        sistema: 'Cría extensiva',
        nombre: 'Biosal Autoconsumo',
        slug: 'biosal-autoconsumo',
        descripcion: 'Formulado con Bioenzymix, macrominerales (Ca, P, Mg, Na, S), palatabilizantes naturales y urea como fuente de nitrógeno no proteico. Se suministra en batea de acceso libre, sin intervención de mano de obra. Ideal para rodeos a campo con pastoreo directo.',
        uso: 'Batea a campo · Consumo libre · Vacas de cría',
    },
    {
        sistema: 'Recría a pasto',
        nombre: 'Biosal Max',
        slug: 'biosal-max',
        descripcion: 'Pellets de consumo limitado con Bioenzymix ultra concentrado, proteínas verdaderas y energía. Formulado para mantener y aumentar el peso en recría, especialmente en épocas de pastos secos o diferidos de invierno.',
        uso: 'Pellets · Consumo limitado · Recría invernal',
    },
    {
        sistema: 'Feedlot y engorde',
        nombre: 'Biosal Mix',
        slug: 'biosal-mix',
        descripcion: 'Premezcla para raciones con más del 50% de inclusión de fibra (celulosa y hemicelulosa). Disponible con y sin urea. Mejora la digestibilidad de la fibra y reduce el costo por kilo producido en feedlot y recría intensiva.',
        uso: 'Premezcla · Raciones fibrosas · TMR',
    },
    {
        sistema: 'Tambo y feedlot alta energía',
        nombre: 'Regulador Biológico Ruminal',
        slug: 'rbr',
        descripcion: 'Bacterias liofilizadas de cepas específicas más levaduras vivas. Consume ácido láctico, estabiliza el pH ruminal y maximiza el aprovechamiento del almidón en dietas de alta concentración. Previene la acidosis y equilibra la flora ruminal.',
        uso: 'Tambo · Feedlot concentrado · Prevención de acidosis',
    },
    {
        sistema: 'Ovinos, caprinos y camélidos',
        nombre: 'Biosal Pequeños Rumiantes',
        slug: 'biosal-pr',
        descripcion: 'Formulación específica con Bioenzymix, macrominerales y probióticos seleccionados para la microbiota de pequeños rumiantes. Estimula la flora celulolítica y optimiza la digestión de fibra en ovinos, caprinos y camélidos.',
        uso: 'Ovinos · Caprinos · Camélidos',
    },
];

const FAQS = [
    {
        q: '¿Las biosales reemplazan al suplemento mineral tradicional?',
        a: 'Sí, en la mayoría de los sistemas productivos las biosales reemplazan completamente al suplemento mineral tradicional. Al incorporar probióticos y enzimas, no solo cubren las necesidades minerales sino que además mejoran la digestión ruminal, obteniendo resultados superiores con un costo diferencial mínimo.'
    },
    {
        q: '¿Cuánto tiempo tarda en verse el efecto?',
        a: 'Los primeros cambios en el estado corporal y la actividad animal suelen verse entre 3 y 6 semanas de uso continuo. Los resultados en ganancia de peso y eficiencia reproductiva se evalúan a partir del tercer mes de implementación.'
    },
    {
        q: '¿Son aptas para cualquier sistema de producción?',
        a: 'Sí. Las biosales Suplefeed están formuladas para sistemas extensivos a campo, semiintensivos y feedlot. Nuestro equipo técnico adapta la línea de producto y el plan de suplementación a las condiciones específicas de cada establecimiento.'
    },
    {
        q: '¿Se pueden combinar con otros suplementos?',
        a: 'Depende del sistema. En general, las biosales se integran como suplemento base y se combinan con energía (grano) según la etapa productiva. Nuestro asesor técnico evalúa cada caso para evitar sobresuplementación y optimizar el costo.'
    },
    {
        q: '¿Cómo sé qué producto Suplefeed es el más adecuado para mi rodeo?',
        a: 'Cada producto está formulado para un sistema específico: Biosal Autoconsumo para cría extensiva a campo, Biosal Max para recría a pasto en épocas críticas, Biosal Mix para feedlot con raciones fibrosas (con o sin urea), RBR para tambo y feedlot de alta concentración, y Biosal Pequeños Rumiantes para ovinos, caprinos o camélidos. Nuestro asesor técnico visita el establecimiento y diseña el plan nutricional más adecuado para cada caso.'
    },
    {
        q: '¿Por qué elegir Victu como proveedor?',
        a: 'Victu es el único representante oficial de Suplefeed en el NOA y NEA. A diferencia de distribuidores convencionales, incluimos asesoramiento técnico en campo, seguimiento de resultados y acompañamiento durante toda la implementación.'
    },
];

export default function BiosalesGuia() {
    const [openFaq, setOpenFaq] = useState(null);

    useSEO({
        title: '¿Qué son las biosales? Guía completa para ganaderos',
        description: 'Todo sobre las biosales para bovinos: qué son, cómo funcionan, beneficios vs suplementos tradicionales y por qué Victu es el referente en NOA y NEA.',
        url: '/biosales',
        keywords: 'qué son las biosales, biosales bovinos, biosales ganadería, suplementos probióticos bovinos, bioenzymix, biosales vs minerales, cómo funcionan las biosales, biosales tucuman, suplementación bovina noa',
        structuredData: [
            {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: '¿Qué son las biosales? Guía completa para ganaderos del NOA',
                description: 'Guía técnica sobre biosales para bovinos: definición, mecanismo de acción, comparación con suplementos tradicionales y beneficios por categoría.',
                author: {
                    '@type': 'Person',
                    name: 'Javier Kviatkovski',
                    jobTitle: 'Asesor Técnico en Nutrición Bovina',
                    worksFor: {
                        '@type': 'Organization',
                        name: 'Victu',
                        url: 'https://victunoa.com'
                    }
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Victu',
                    url: 'https://victunoa.com',
                    logo: 'https://victunoa.com/images/logo_og.png'
                },
                datePublished: '2026-04-14',
                dateModified: '2026-04-14',
                url: 'https://victunoa.com/biosales',
                about: {
                    '@type': 'Thing',
                    name: 'Biosales para bovinos',
                    description: 'Suplementos nutricionales para ganado bovino que combinan sales minerales con probióticos y enzimas digestivas'
                }
            },
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://victunoa.com/' },
                    { '@type': 'ListItem', position: 2, name: '¿Qué son las biosales?', item: 'https://victunoa.com/biosales' },
                ]
            },
            {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: FAQS.map(item => ({
                    '@type': 'Question',
                    name: item.q,
                    acceptedAnswer: { '@type': 'Answer', text: item.a }
                }))
            }
        ]
    });

    return (
        <div className={styles.page}>

            {/* ── BREADCRUMB ── */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link to="/">Inicio</Link>
                <span aria-hidden="true"> › </span>
                <span aria-current="page">¿Qué son las biosales?</span>
            </nav>

            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroInner}`}>
                    <span className={styles.heroBadge}>GUÍA TÉCNICA</span>
                    <h1 className={styles.heroTitle}>
                        ¿Qué son las biosales?<br />Guía completa para ganaderos
                    </h1>
                    <p className={styles.heroSub}>
                        Todo lo que necesitás saber sobre la suplementación bovina con biosales: cómo funcionan, por qué superan a los suplementos minerales tradicionales y cómo implementarlas en tu campo.
                    </p>
                    <p className={styles.heroAuthor}>
                        Por <strong>Javier Kviatkovski</strong> — Asesor Técnico en Nutrición Bovina · Victu NOA
                    </p>
                </div>
            </section>

            {/* ── QUÉ SON LAS BIOSALES ── */}
            <section className={styles.section} id="que-son">
                <div className="container">
                    <div className={styles.contentBlock}>
                        <h2 className={styles.secTitle}>¿Qué son las biosales?</h2>
                        <p className={styles.secText}>
                            Las <strong>biosales</strong> son suplementos nutricionales para bovinos que van más allá de la suplementación mineral tradicional. Combinan tres componentes en un solo producto:
                        </p>
                        <ul className={styles.defList}>
                            <li className={styles.defItem}>
                                <span className={styles.defIcon}>01</span>
                                <div>
                                    <strong>Sales minerales</strong> — macrominerales (calcio, fósforo, magnesio, sodio) y microminerales (zinc, cobre, manganeso, selenio, yodo) esenciales para el metabolismo bovino.
                                </div>
                            </li>
                            <li className={styles.defItem}>
                                <span className={styles.defIcon}>02</span>
                                <div>
                                    <strong>Probióticos vivos</strong> — microorganismos benéficos que colonizan y equilibran la microbiota del rumen, el órgano digestivo central del bovino.
                                </div>
                            </li>
                            <li className={styles.defItem}>
                                <span className={styles.defIcon}>03</span>
                                <div>
                                    <strong>Enzimas digestivas</strong> — catalizadores biológicos que aceleran la degradación de fibra y proteína en el rumen, aumentando la digestibilidad del forraje disponible.
                                </div>
                            </li>
                        </ul>
                        <p className={styles.secText}>
                            El resultado es un suplemento que no solo cubre deficiencias minerales, sino que actúa sobre el proceso digestivo desde adentro, permitiendo que el animal aproveche mucho mejor el alimento que ya consume — ya sea pasto, rastrojo o ración de feedlot.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CÓMO FUNCIONA EL RUMEN ── */}
            <section className={`${styles.section} ${styles.sectionAlt}`} id="como-funciona">
                <div className="container">
                    <div className={styles.contentBlock}>
                        <h2 className={styles.secTitle}>El rumen: por qué es la clave de la producción bovina</h2>
                        <p className={styles.secText}>
                            El bovino es un animal rumiante. Su aparato digestivo está diseñado alrededor del <strong>rumen</strong>, una cámara de fermentación donde viven miles de millones de bacterias, hongos y protozoos que degradan la celulosa del pasto.
                        </p>
                        <p className={styles.secText}>
                            Cuando la microbiota ruminal está equilibrada, el animal digiere bien, produce más, engorda más rápido y se reproduce con mayor eficiencia. Cuando está desequilibrada — por cambios de dieta, estrés, deficiencias minerales o exceso de carbohidratos — aparecen problemas: acidosis, timpanismo, merma en la ganancia de peso, fallas reproductivas.
                        </p>
                        <p className={styles.secText}>
                            Las biosales actúan directamente sobre este ecosistema ruminal. Los probióticos refuerzan las poblaciones bacterianas benéficas; las enzimas potencian la degradación de la fibra. El resultado es un rumen más eficiente, que extrae más energía y proteína de cada bocado de forraje.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── BIOENZYMIX ── */}
            <section className={styles.bioSection} id="bioenzymix">
                <div className="container">
                    <div className={styles.bioInner}>
                        <div>
                            <h2 className={styles.bioTitle}><span>Bio</span>enzymix™</h2>
                            <p className={styles.bioSub}>La tecnología detrás de los productos Suplefeed</p>
                        </div>
                        <p className={styles.bioText}> Nuestra fórmula de probióticos y enzimas activa la microbiota ruminal para transformar el aprovechamiento de fibra y proteína en más kilos y menos costos.
                            <br></br>
                            Bioenzymix™ es un innovador núcleo compuesto por una combinación sinérgica de enzimas, probióticos, prebióticos, levaduras, aminoácidos, aditivos específicos para la estimulación de la flora celulolítica, vitaminas (A, D, E) y minerales esenciales (Cu, Zn, Fe, Mn, I, Co, Se).</p>
                        <p className={styles.bioText}>
                            A diferencia de probióticos genéricos, Bioenzymix™ está formulado para sobrevivir el proceso de peletizado y llegar activo al rumen. Las cepas seleccionadas tienen alta resistencia a los ácidos gástricos y alta capacidad colonizadora, lo que garantiza que realmente actúen sobre la microbiota.
                        </p>
                        <div className={styles.bioPoints}>
                            <div className={styles.bioPoint}>
                                <span className={styles.bioPointNum}>+</span>
                                <span>Digestibilidad de la fibra</span>
                            </div>
                            <div className={styles.bioPoint}>
                                <span className={styles.bioPointNum}>+</span>
                                <span>Ganancia diaria de peso</span>
                            </div>
                            <div className={styles.bioPoint}>
                                <span className={styles.bioPointNum}>+</span>
                                <span>Eficiencia reproductiva</span>
                            </div>
                            <div className={styles.bioPoint}>
                                <span className={styles.bioPointNum}>−</span>
                                <span>Costo por kilo producido</span>
                            </div>
                            <div className={styles.bioPoint}>
                                <span className={styles.bioPointNum}>−</span>
                                <span>Episodios de acidosis</span>
                            </div>
                            <div className={styles.bioPoint}>
                                <span className={styles.bioPointNum}>−</span>
                                <span>Uso de antibióticos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LÍNEA DE PRODUCTOS ── */}
            <section className={styles.section} id="productos">
                <div className="container">
                    <h2 className={styles.secTitle}>La línea Suplefeed: un producto para cada sistema</h2>
                    <p className={styles.secText}>
                        Todos los productos Suplefeed incorporan la tecnología Bioenzymix™, pero cada formulación está diseñada para un sistema productivo específico. El asesor técnico de Victu determina cuál es el más adecuado para tu establecimiento.
                    </p>
                    <div className={styles.productsGrid}>
                        {PRODUCTOS_SUPLEFEED.map((p) => (
                            <div key={p.slug} className={styles.productCard}>
                                <span className={styles.productSystem}>{p.sistema}</span>
                                <h3 className={styles.productName}>{p.nombre}</h3>
                                <p className={styles.productDesc}>{p.descripcion}</p>
                                <p className={styles.productUso}>{p.uso}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.productsCta}>
                        <Link to="/#categorias">
                            <Button variant="secondary">Ver todos los productos</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── COMPARACIÓN ── */}
            <section className={styles.section} id="comparacion">
                <div className="container">
                    <h2 className={styles.secTitle}>Biosales vs suplementos minerales tradicionales</h2>
                    <p className={styles.secText}>
                        El salero de campo cumplió una función durante décadas. Las biosales no lo reemplazan por moda — lo reemplazan porque hacen más con el mismo presupuesto.
                    </p>
                    <div className={styles.tableWrapper}>
                        <table className={styles.compTable}>
                            <thead>
                                <tr>
                                    <th>Aspecto</th>
                                    <th className={styles.thBio}>Biosales (Suplefeed)</th>
                                    <th>Suplemento mineral tradicional</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARACION.map((row, i) => (
                                    <tr key={i}>
                                        <td className={styles.tdAspecto}>{row.aspecto}</td>
                                        <td className={styles.tdBio}>{row.biosales}</td>
                                        <td className={styles.tdTrad}>{row.tradicional}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── BENEFICIOS POR CATEGORÍA ── */}
            <section className={`${styles.section} ${styles.sectionAlt}`} id="por-categoria">
                <div className="container">
                    <h2 className={styles.secTitle}>Beneficios por categoría productiva</h2>
                    <p className={styles.secText}>
                        Las biosales no son un producto genérico. Cada etapa del ciclo bovino tiene requerimientos distintos, y las formulaciones Suplefeed están diseñadas para cada una.
                    </p>
                    <div className={styles.catGrid}>
                        {BENEFICIOS_CATEGORIA.map((cat) => (
                            <div key={cat.slug} className={styles.catCard}>
                                <h3 className={styles.catTitle}>{cat.categoria}</h3>
                                <ul className={styles.catList}>
                                    {cat.beneficios.map((b, i) => (
                                        <li key={i} className={styles.catItem}>
                                            <span className={styles.catBullet}>→</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={`/${cat.slug}`} className={styles.catLink}>
                                    Ver productos para {cat.categoria.toLowerCase()} →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CUÁNDO Y CÓMO USAR ── */}
            <section className={styles.section} id="implementacion">
                <div className="container">
                    <div className={styles.contentBlock}>
                        <h2 className={styles.secTitle}>¿Cuándo y cómo implementar las biosales?</h2>
                        <p className={styles.secText}>
                            Las biosales pueden incorporarse en cualquier etapa del año, pero hay momentos donde el impacto es mayor:
                        </p>
                        <ul className={styles.defList}>
                            <li className={styles.defItem}>
                                <span className={styles.defIcon}>◆</span>
                                <div>
                                    <strong>Servicio y gestación temprana</strong> — El estado nutricional de la vaca en este período determina la preñez y el desarrollo fetal. Las biosales mejoran la condición corporal y la eficiencia reproductiva.
                                </div>
                            </li>
                            <li className={styles.defItem}>
                                <span className={styles.defIcon}>◆</span>
                                <div>
                                    <strong>Destete y recría</strong> — El estrés del destete compromete la microbiota del ternero. La suplementación con probióticos estabiliza el rumen rápidamente y maximiza la ganancia en esta etapa clave.
                                </div>
                            </li>
                            <li className={styles.defItem}>
                                <span className={styles.defIcon}>◆</span>
                                <div>
                                    <strong>Inicio de feedlot</strong> — El cambio de dieta de pasto a grano es el mayor factor de riesgo de acidosis. Las biosales previenen este problema y facilitan la transición.
                                </div>
                            </li>
                            <li className={styles.defItem}>
                                <span className={styles.defIcon}>◆</span>
                                <div>
                                    <strong>Invierno y seca</strong> — Cuando el forraje baja en calidad y cantidad, las biosales maximizan el aprovechamiento de lo disponible y mantienen el estado corporal del rodeo.
                                </div>
                            </li>
                        </ul>
                        <p className={styles.secText}>
                            La implementación se hace mediante <strong>autoconsumo libre</strong> (el animal regula su ingesta) o suministro dosificado según el plan nutricional. Nuestro equipo técnico determina el método y las cantidades para cada establecimiento.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── POR QUÉ VICTU ── */}
            <section className={styles.victuSection} id="por-que-victu">
                <div className="container">
                    <div className={styles.victuInner}>
                        <h2 className={styles.victuTitle}>¿Por qué trabajar con Victu?</h2>
                        <p className={styles.victuText}>
                            Victu es el <strong>representante oficial de Suplefeed en NOA y NEA</strong>. Eso significa acceso directo a la tecnología Bioenzymix™ con el respaldo técnico de quien la conoce mejor.
                        </p>
                        <div className={styles.victuCards}>
                            <div className={styles.victuCard}>
                                <span className={styles.victuCardNum}>01</span>
                                <h3 className={styles.victuCardTitle}>Asesoramiento técnico en campo</h3>
                                <p className={styles.victuCardText}>Javier Kviatkovski visita tu establecimiento, evalúa el sistema productivo y diseña el plan nutricional específico.</p>
                            </div>
                            <div className={styles.victuCard}>
                                <span className={styles.victuCardNum}>02</span>
                                <h3 className={styles.victuCardTitle}>Seguimiento de resultados</h3>
                                <p className={styles.victuCardText}>Monitoreamos el impacto de la suplementación y ajustamos el plan según los resultados reales del rodeo.</p>
                            </div>
                            <div className={styles.victuCard}>
                                <span className={styles.victuCardNum}>03</span>
                                <h3 className={styles.victuCardTitle}>Cobertura regional completa</h3>
                                <p className={styles.victuCardText}>Operamos en Tucumán, Salta, Jujuy, Santiago del Estero, Catamarca, La Rioja, Chaco y Formosa.</p>
                            </div>
                        </div>
                        <div className={styles.victuCta}>
                            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" size="large">Consultar con nuestro técnico</Button>
                            </a>
                            <Link to="/sobre-victu">
                                <Button variant="secondary" size="large">Conocer el equipo</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className={styles.faqSection} id="preguntas-frecuentes">
                <div className="container">
                    <h2 className={styles.secTitle}>Preguntas frecuentes</h2>
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
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>¿Listo para implementar biosales en tu campo?</h2>
                    <p className={styles.ctaSub}>Consultá gratis con nuestro asesor técnico y recibí un plan personalizado para tu sistema productivo.</p>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="large">Hablar con Victu por WhatsApp</Button>
                    </a>
                </div>
            </section>

        </div>
    );
}
