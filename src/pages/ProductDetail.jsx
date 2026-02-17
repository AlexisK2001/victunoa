import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';
import { getProductById } from '../data/products';
import { categories } from '../data/categories';
import styles from './ProductDetail.module.css';

import { useSEO } from '../hooks/useSEO';

export default function ProductDetail() {
    const { productSlug } = useParams();
    const product = getProductById(productSlug);

    useSEO({
        title: product ? product.name : 'Producto no encontrado',
        description: product ? product.description : 'Detalles del producto.',
        image: product ? product.image : null,
        url: product ? `/productos/${productSlug}` : '',
        structuredData: product ? {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": [
                window.location.origin + product.image
            ],
            "description": product.description,
            "brand": {
                "@type": "Brand",
                "name": "Victu"
            }
        } : null
    });

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const category = categories.find(c => c.id === product.category);

    return (
        <div className={styles.productDetailPage}>
            {/* Product Detail Hero */}
            <section className={styles.productDetailHero}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link to="/">Inicio</Link> /
                        <Link to={`/${product.category}`}>{category?.name}</Link> /
                        <span>{product.name}</span>
                    </div>
                    <div className={styles.productDetailContainer}>
                        <div className={styles.productDetailImage}>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className={styles.productDetailInfo}>
                            <h1 className={styles.productDetailTitle}>{product.name}</h1>
                            <p className={styles.productDetailSubtitle}>{product.subtitle}</p>
                            <p className={styles.productDetailDescription}>
                                {product.description}
                            </p>
                            <a href="/#contacto">
                                <Button variant="primary" size="large">Consultar por este producto</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Specifications */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Especificaciones Técnicas</h2>
                    <div className="title-underline"></div>

                    <div className={styles.productSpecsGrid}>
                        <div className={styles.specCard}>
                            <h3 className={styles.specTitle}>Composición</h3>
                            <ul className={styles.specList}>
                                {product.specs.composition.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.specCard}>
                            <h3 className={styles.specTitle}>Aplicación</h3>
                            <ul className={styles.specList}>
                                {product.specs.application.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.specCard}>
                            <h3 className={styles.specTitle}>Modo de Uso</h3>
                            <ul className={styles.specList}>
                                {product.specs.usage.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Beneficios Clave</h2>
                    <div className="title-underline"></div>

                    <div className={styles.benefitsGrid}>
                        {product.benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <g dangerouslySetInnerHTML={{ __html: benefit.icon }} />
                                    </svg>
                                </div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitText}>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2 className={styles.ctaTitle}>¿Interesado en {product.name}?</h2>
                        <p className={styles.ctaText}>
                            Optimiza la producción de tu rodeo con un producto de alta tecnología y respaldo técnico.
                        </p>
                        <a href="/#contacto">
                            <Button variant="primary" size="large">Contactar ahora</Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
