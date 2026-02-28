import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { categories } from '../data/categories';
import { products } from '../data/products';
import logoImg from '../assets/icons/IMG_2636.PNG';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSmoothScroll = (e, sectionId) => {
        e.preventDefault();

        // If we're not on home page, navigate to home with hash
        if (location.pathname !== '/') {
            navigate(`/#${sectionId}`);
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 75;
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link
                    to="/"
                    className={styles.logo}
                    onClick={(e) => {
                        if (location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    <div className={styles.logoImage}>
                        <img src={logoImg} alt="VICTU Bio Nutrición" />
                    </div>
                </Link>

                <button
                    className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
                    <li>
                        <a
                            href="#quienes-somos"
                            className={styles.navLink}
                            onClick={(e) => handleSmoothScroll(e, 'quienes-somos')}
                        >
                            Quiénes somos
                        </a>
                    </li>
                    <li className={styles.navItemDropdown}>
                        <a
                            href="#productos"
                            className={styles.navLink}
                            onClick={(e) => handleSmoothScroll(e, 'productos')}
                        >
                            Productos
                        </a>
                        <ul className={styles.dropdownMenu}>
                            {categories.map(category => (
                                <li key={category.id} className={styles.dropdownItem}>
                                    <Link
                                        to={`/${category.slug}`}
                                        className={styles.dropdownLink}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {category.name}
                                    </Link>
                                    <ul className={styles.nestedDropdownMenu}>
                                        {products.filter(p => p.category === category.slug).map(product => (
                                            <li key={product.id}>
                                                <Link
                                                    to={`/productos/${product.slug}`}
                                                    className={styles.nestedDropdownLink}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {product.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <a
                            href="#servicios"
                            className={styles.navLink}
                            onClick={(e) => handleSmoothScroll(e, 'servicios')}
                        >
                            Servicio técnico
                        </a>
                    </li>
                    <li>
                        <a
                            href="#beneficios"
                            className={styles.navLink}
                            onClick={(e) => handleSmoothScroll(e, 'beneficios')}
                        >
                            Beneficios
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contacto"
                            className={styles.navLink}
                            onClick={(e) => handleSmoothScroll(e, 'contacto')}
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
