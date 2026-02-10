import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ category }) {
    return (
        <Link to={`/${category.slug}`} className={styles.categoryCard}>
            <div className={styles.categoryIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <g dangerouslySetInnerHTML={{ __html: category.icon }} />
                </svg>
            </div>
            <h3 className={styles.categoryTitle}>{category.name}</h3>
            <p className={styles.categoryDescription}>{category.description}</p>
            <span className={styles.categoryLink}>Ver productos →</span>
        </Link>
    );
}
