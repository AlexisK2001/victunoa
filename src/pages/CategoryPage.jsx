import { useParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import styles from './CategoryPage.module.css';
import { useSEO } from '../hooks/useSEO';
import iconDesarrolloTemprano from '../assets/icons/desarrollo_temprano.webp';
import iconAlta from '../assets/icons/alta.webp';
import iconMinerales from '../assets/icons/minerales_escenciales.webp';
import iconFacilImpl from '../assets/icons/facil_implementacion.webp';
import iconConvercionMejorada from '../assets/icons/convercion_mejorada.webp';
import iconDesarrolloCorporal from '../assets/icons/desarrollo_corporal.webp';
import iconSaludMetabolica from '../assets/icons/salud_metabolica.webp';
import iconSoporteTecnico from '../assets/icons/soporte_tecnico.webp';
import iconConversionOptima from '../assets/icons/conversion_optima.webp';
import iconTerminacionRapida from '../assets/icons/terminacion_rapida.webp';
import iconMarmoleo from '../assets/icons/marmoleo.webp';
import iconCostoBeneficio from '../assets/icons/consto_beneficio.webp';
import iconMayorProductividad from '../assets/icons/mayor.webp';
import iconSaludAnimal from '../assets/icons/salud_metabolica.webp';
import iconAporteMineral from '../assets/icons/minerales_escenciales.webp';


const WHATSAPP_NUMBER = '5493816542124';

function whatsappLink(productName, categoryName) {
    const msg = encodeURIComponent(
        `Hola! Me interesa el producto ${productName} de la línea ${categoryName}. ¿Podría darme más información?`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

const WA_ICON = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const categoryBenefits = {
    cria: [
        { icon: iconDesarrolloTemprano, title: 'Desarrollo Temprano', desc: 'Fórmulas diseñadas para la etapa más crítica del ternero.' },
        { icon: iconAlta, title: 'Alta Palatabilidad', desc: 'Consumo voluntario consistente desde los primeros días.' },
        { icon: iconMinerales, title: 'Minerales Esenciales', desc: 'Ca, P, Mg, Na, S para hueso sano y crecimiento óptimo.' },
        { icon: iconFacilImpl, title: 'Fácil Implementación', desc: 'Suministro en batea sin mano de obra adicional.' },
    ],
    recria: [
        { icon: iconConvercionMejorada, title: 'Conversión Mejorada', desc: 'Optimiza la conversión alimenticia en etapa de recría.' },
        { icon: iconDesarrolloCorporal, title: 'Desarrollo Corporal', desc: 'Favorece el desarrollo muscular y esquelético.' },
        { icon: iconSaludMetabolica, title: 'Salud Metabólica', desc: 'Mejora la salud ruminal y metabólica general.' },
        { icon: iconSoporteTecnico, title: 'Soporte Técnico', desc: 'Equipo de especialistas disponibles en cada etapa.' },
    ],
    engorde: [
        { icon: iconConversionOptima, title: 'Conversión Óptima', desc: 'Mejor conversión alimenticia para feedlot intensivo.' },
        { icon: iconTerminacionRapida, title: 'Terminación Rápida', desc: 'Reduce el tiempo a faena significativamente.' },
        { icon: iconMarmoleo, title: 'Marmoleo Mejorado', desc: 'Mejora la calidad de la carne producida.' },
        { icon: iconCostoBeneficio, title: 'Costo-Beneficio', desc: 'Excelente balance entre inversión y retorno.' },
    ],
    tambo: [
        { icon: iconMayorProductividad, title: 'Mayor Producción de Leche', desc: 'Fórmulas diseñadas para maximizar el volumen y calidad de la leche producida.' },
        { icon: iconSaludAnimal, title: 'Salud Animal Superior', desc: 'Nutrición integral que fortalece el sistema inmune y la salud metabólica del rodeo.' },
        { icon: iconAporteMineral, title: 'Ingredientes Naturales', desc: 'Bionutrición con ingredientes naturales y probióticos seleccionados por su eficacia.' },
        { icon: iconSoporteTecnico, title: 'Soporte Técnico Dedicado', desc: 'Equipo de especialistas disponibles para acompañar cada etapa productiva.' },
    ],
};

export default function CategoryPage() {
    const { categorySlug } = useParams();
    const category = categories.find(c => c.slug === categorySlug);
    const products = getProductsByCategory(categorySlug);
    const benefits = categoryBenefits[categorySlug] || [];

    const categoryKeywords = {
        cria: 'biosales cria bovina, suplemento terneros tucuman, biosal autoconsumo cria, nutricion cria bovina NOA, sales minerales terneros, suplemento batea campo, victu cria',
        recria: 'biosales recria bovina, biosal max recria, suplemento recria bovino tucuman, nutricion recria NOA, vitaminas recria bovina, conversion alimenticia recria, victu recria',
        engorde: 'biosales engorde bovino, biosal mix feedlot, feedlot tucuman NOA, suplemento engorde intensivo, conversion alimenticia feedlot, terminacion rapida bovinos, victu engorde',
        tambo: 'biosales tambo bovino, rbr regulador biologico ruminal, afi activador flora intestinal, suplemento vacas lecheras tucuman, nutricion tambo NOA, proteina bypass vacas, victu tambo',
    };

    useSEO({
        title: category ? (category.seoTitle || `${category.name} - Biosales Victu Tucumán`) : 'Categoría no encontrada',
        description: category
            ? category.seoDescription || `Biosales y suplementos Victu para ${category.name.toLowerCase()} en Tucumán y NOA. ${category.description}`
            : 'Explora nuestros productos de bionutrición.',
        keywords: category ? categoryKeywords[categorySlug] : '',
        image: category ? category.image : undefined,
        url: category ? `/${categorySlug}` : '',
        structuredData: category
            ? [
                {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://victunoa.com/' },
                        { '@type': 'ListItem', position: 2, name: category.name, item: `https://victunoa.com/${categorySlug}` },
                    ],
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    name: `Productos para ${category.name} - Victu`,
                    description: category.seoDescription,
                    numberOfItems: products.length,
                    itemListElement: products.map((product, index) => ({
                        '@type': 'ListItem',
                        position: index + 1,
                        item: {
                            '@type': 'Product',
                            name: product.name,
                            description: product.shortDescription || product.description,
                            image: `https://victunoa.com${product.image}`,
                            url: `https://victunoa.com/${categorySlug}#${product.id}`,
                            brand: { '@type': 'Brand', name: 'Victu' },
                            category: category.name,
                        },
                    })),
                },
            ]
            : null,
    });

    if (!category) {
        return <div>Categoría no encontrada</div>;
    }

    return (
        <div className={styles.page}>

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>{category.name.toUpperCase()}</span>
                    <h1 className={styles.heroTitle}>{category.h1Title || category.name}</h1>
                    <p className={styles.heroDesc}>{category.description}</p>
                    <div className={styles.heroBtns}>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! Me interesa la línea ${category.name}. ¿Podría darme más información?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.heroBtnPrimary}
                        >
                            {WA_ICON}
                            Consultar por WhatsApp
                        </a>
                        <a href="#productos" className={styles.heroBtnSecondary}>
                            Ver todos
                        </a>
                    </div>
                </div>
                <div className={styles.heroImageWrap}>
                    <img
                        src={category.image}
                        alt={`Ganado bovino para ${category.name.toLowerCase()} - Victu Biosales`}
                        className={styles.heroImage}
                        loading="eager"
                    />
                </div>
            </section>

            <section id="productos" className={styles.productsSection}>
                <div className={styles.productsSectionHeader}>
                    <span className={styles.sectionLabel}>NUESTROS PRODUCTOS</span>
                    <h2 className={styles.sectionTitle}>Nuestros productos para {category.name}</h2>
                </div>

                <div className={styles.productsList}>
                    {products.map((product) => (
                        <article key={product.id} id={product.id} className={styles.productCard}>
                            <div className={styles.productImageCol}>
                                <img
                                    src={product.image}
                                    alt={`${product.name} - Suplemento para ${category.name} | Victu`}
                                    className={styles.productImg}
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.productInfoCol}>
                                <div className={styles.productBadgeRow}>
                                    <span className={styles.productBadge}>
                                        {category.name.toUpperCase()}
                                        {product.subtitle && ` / ${product.subtitle.toUpperCase()}`}
                                    </span>
                                </div>
                                <p className={styles.productSubtitleLabel}>{product.id.toUpperCase()}</p>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <p className={styles.productDesc}>{product.shortDescription || product.description}</p>
                                <ul className={styles.productFeatures}>
                                    {(product.features || product.specs?.composition || []).map((f, i) => (
                                        <li key={i} className={styles.productFeature}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={whatsappLink(product.name, category.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.productBtn}
                                >
                                    {WA_ICON}
                                    Consultar por WhatsApp
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {benefits.length > 0 && (
                <section className={styles.benefitsStrip}>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((b, i) => (
                            <div key={i} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <img src={b.icon} alt={b.title} loading="lazy" width="40" height="40" />
                                </div>
                                <span className={styles.benefitTitle}>{b.title}</span>
                                <p className={styles.benefitDesc}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.ctaSection}>
                <span className={styles.ctaLabel}>EQUIPO TÉCNICO VICTU</span>
                <h2 className={styles.ctaTitle}>Consultá con nuestro equipo técnico</h2>
                <p className={styles.ctaDesc}>
                    Nuestros especialistas en nutrición animal están disponibles para asesorarte y diseñar el programa ideal para tu {category.name.toLowerCase()}.
                </p>
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! Quiero consultar con el equipo técnico sobre la línea ${category.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaBtn}
                >
                    {WA_ICON}
                    Contactar por WhatsApp
                </a>
                <p className={styles.ctaMeta}>Sin compromiso · Respuesta en menos de 24 hs · Atención personalizada</p>
            </section>

        </div>
    );
}
