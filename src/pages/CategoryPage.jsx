import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import styles from './CategoryPage.module.css';

import { useSEO } from '../hooks/useSEO';

export default function CategoryPage() {
    const { categorySlug } = useParams();
    const category = categories.find(c => c.slug === categorySlug);
    const products = getProductsByCategory(categorySlug);

    useSEO({
        title: category ? category.name : 'Categoría no encontrada',
        description: category ? category.description : 'Explora nuestros productos de bionutrición.',
        url: category ? `/${categorySlug}` : ''
    });

    if (!category) {
        return <div>Categoría no encontrada</div>;
    }

    return (
        <div>
            <Hero
                title={`Productos para ${category.name}`}
                subtitle={category.description}
                size="small"
            />

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Línea de {category.name}</h2>
                        <div className="title-underline"></div>
                        <p className="section-intro">
                            Productos diseñados para optimizar la etapa de {category.name.toLowerCase()} de tu ganado.
                        </p>
                    </div>

                    <div className={styles.productGrid}>
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
