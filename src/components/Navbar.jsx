import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { categories } from '../data/categories';
import { products } from '../data/products';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownTimeout = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleDropdownEnter = () => {
        clearTimeout(dropdownTimeout.current);
        setIsDropdownOpen(true);
    };

    const handleDropdownLeave = () => {
        dropdownTimeout.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 150);
    };

    useEffect(() => {
        let rafId = null;
        const handleScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 60);
                rafId = null;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSmoothScroll = (e, sectionId) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate(`/#${sectionId}`);
            setIsMenuOpen(false);
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 72;
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
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
                        setIsMenuOpen(false);
                    }}
                >
                    <img src="/images/logovictu.png" alt="Logo" className={styles.logoImg} />
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
                    <li
                        className={styles.navItemDropdown}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <a href="#productos" className={styles.navLink}
                            onClick={(e) => handleSmoothScroll(e, 'productos')}>
                            Productos
                            <span className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.dropdownArrowOpen : ''}`}>▾</span>
                        </a>
                        {isDropdownOpen && (
                            <div
                                className={styles.dropdown}
                                onMouseEnter={handleDropdownEnter}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <div className={styles.dropdownGrid}>
                                    {categories.map(cat => {
                                        const catProducts = products.filter(p => p.category === cat.id);
                                        return (
                                            <div key={cat.id} className={styles.dropdownColumn}>
                                                <Link
                                                    to={`/${cat.slug}`}
                                                    className={styles.dropdownCategoryTitle}
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    {cat.name}
                                                </Link>
                                                <ul className={styles.dropdownProductList}>
                                                    {catProducts.map(product => (
                                                        <li key={product.id}>
                                                            <Link
                                                                to={`/${cat.slug}#${product.id}`}
                                                                className={styles.dropdownProductLink}
                                                                onClick={() => setIsDropdownOpen(false)}
                                                            >
                                                                <span className={styles.dropdownProductName}>{product.name}</span>
                                                                <span className={styles.dropdownProductSubtitle}>{product.subtitle}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="#beneficios" className={styles.navLink}
                            onClick={(e) => handleSmoothScroll(e, 'beneficios')}>
                            Beneficios
                        </a>
                    </li>
                    <li>
                        <a href="#galeria" className={styles.navLink}
                            onClick={(e) => handleSmoothScroll(e, 'galeria')}>
                            Galería
                        </a>
                    </li>
                    <li>
                        <a href="#como-trabajamos" className={styles.navLink}
                            onClick={(e) => handleSmoothScroll(e, 'como-trabajamos')}>
                            Nosotros
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://wa.me/5493816542124"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.navCTA}
                        >
                            WhatsApp
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile dropdown menu */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <a href="#productos" className={styles.mobileLink}
                        onClick={(e) => handleSmoothScroll(e, 'productos')}>Productos</a>
                    <a href="#beneficios" className={styles.mobileLink}
                        onClick={(e) => handleSmoothScroll(e, 'beneficios')}>Beneficios</a>
                    <a href="#galeria" className={styles.mobileLink}
                        onClick={(e) => handleSmoothScroll(e, 'galeria')}>Galería</a>
                    <a href="#como-trabajamos" className={styles.mobileLink}
                        onClick={(e) => handleSmoothScroll(e, 'como-trabajamos')}>Nosotros</a>
                    <a href="https://wa.me/5493816542124" target="_blank" rel="noreferrer"
                        className={styles.mobileCTA}>WhatsApp</a>
                    <div className={styles.mobileCategories}>
                        {categories.map(cat => {
                            const catProducts = products.filter(p => p.category === cat.id);
                            return (
                                <div key={cat.id} className={styles.mobileCategoryGroup}>
                                    <Link
                                        to={`/${cat.slug}`}
                                        className={styles.mobileCatTitle}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {cat.name}
                                    </Link>
                                    {catProducts.map(product => (
                                        <Link
                                            key={product.id}
                                            to={`/${cat.slug}#${product.id}`}
                                            className={styles.mobileCatLink}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {product.name}
                                        </Link>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
