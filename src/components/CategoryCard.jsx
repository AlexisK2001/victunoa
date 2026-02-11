import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ category }) {
    return (
        <Link to={`/${category.slug}`} className={styles.categoryCard}>
            <div
                className={styles.categoryIcon}
                dangerouslySetInnerHTML={{ __html: category.icon }}
            />
            <h3 className={styles.categoryTitle}>{category.name}</h3>
            <p className={styles.categoryDescription}>{category.description}</p>
            <span className={styles.categoryLink}>Ver productos →</span>
        </Link>
    );
}
