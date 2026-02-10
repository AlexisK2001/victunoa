import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import Button from './Button';

export default function ProductCard({ product }) {
    return (
        <div className={styles.productCard}>
            <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.productContent}>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <Link to={`/productos/${product.slug}`}>
                    <Button variant="outline">Ver detalles del producto</Button>
                </Link>
            </div>
        </div>
    );
}
