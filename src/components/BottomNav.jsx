import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './BottomNav.module.css';

const SCROLL_OFFSET = 72;
const HOME_SECTION_IDS = ['categorias', 'beneficios'];
const NAV_SECTION_IDS = ['inicio', 'categorias', 'beneficios', 'galeria'];

const getSectionFromScroll = () => {
    if (typeof window === 'undefined') return 'inicio';
    const scrollPosition = window.scrollY + SCROLL_OFFSET;
    let currentSection = 'inicio';

    HOME_SECTION_IDS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;
        if (scrollPosition >= element.offsetTop) {
            currentSection = sectionId;
        }
    });

    return currentSection;
};

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <polyline points="9 21 9 12 15 12 15 21" />
    </svg>
);

const ProductosIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
);

const BeneficiosIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 0 20c-2 0-4.5-2-6-5" />
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" />
        <path d="M4 16c-.7-1.2-1-2.6-1-4" />
    </svg>
);

const GaleriaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <circle cx="8.5" cy="9" r="1.5" />
        <polyline points="21 16 16 11 5 20" />
    </svg>
);

const ContactoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

export default function BottomNav() {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';
    const isGalleryRoute = location.pathname === '/galeria';
    const isAboutRoute = location.pathname === '/sobre-victu';
    const [activeSection, setActiveSection] = useState(() => {
        if (location.pathname === '/galeria') return 'galeria';
        return isHome ? getSectionFromScroll() : 'categorias';
    });
    const [isDragging, setIsDragging] = useState(false);
    const resolvedActiveSection =
        isGalleryRoute
            ? 'galeria'
            : (isAboutRoute
                ? 'contacto'
                : ((isHome || isDragging) ? activeSection : 'categorias'));
    const swipeStartRef = useRef(null);
    const swipeSectionRef = useRef(activeSection);
    const pendingSectionRef = useRef(null);
    const isSwipingRef = useRef(false);
    const ignoreClickRef = useRef(false);
    const autoScrollLockRef = useRef({ locked: false, target: null, targetY: null, timeoutId: null });

    const unlockAutoScroll = useCallback(() => {
        const lock = autoScrollLockRef.current;
        lock.locked = false;
        lock.target = null;
        lock.targetY = null;
        if (lock.timeoutId) {
            clearTimeout(lock.timeoutId);
            lock.timeoutId = null;
        }
    }, []);

    const lockAutoScroll = useCallback((targetSection, targetY) => {
        const lock = autoScrollLockRef.current;
        if (lock.timeoutId) clearTimeout(lock.timeoutId);
        lock.locked = true;
        lock.target = targetSection;
        lock.targetY = targetY;
        lock.timeoutId = setTimeout(() => {
            lock.locked = false;
            lock.target = null;
            lock.targetY = null;
            lock.timeoutId = null;
        }, 5000);
    }, []);

    useEffect(() => {
        swipeSectionRef.current = activeSection;
    }, [activeSection]);

    const setActiveSectionImmediate = useCallback((sectionId) => {
        swipeSectionRef.current = sectionId;
        setActiveSection(sectionId);
    }, []);

    const selectSection = useCallback((sectionId) => {
        setActiveSectionImmediate(sectionId);
        if (sectionId === 'galeria') {
            if (location.pathname !== '/galeria') {
                navigate('/galeria');
            }
            return;
        }
        if (sectionId === 'inicio') {
            if (location.pathname !== '/') {
                navigate('/');
                return;
            }
            lockAutoScroll('inicio', 0);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (location.pathname !== '/') {
            navigate(`/#${sectionId}`);
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            const targetY = Math.max(0, element.offsetTop - SCROLL_OFFSET);
            lockAutoScroll(sectionId, targetY);
            window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
    }, [location.pathname, navigate, setActiveSectionImmediate, lockAutoScroll]);

    const updateActiveSection = useCallback(() => {
        if (isDragging) return;
        const nextSection = getSectionFromScroll();
        const lock = autoScrollLockRef.current;

        if (lock.locked) {
            const doc = document.documentElement;
            const maxScrollY = Math.max(0, doc.scrollHeight - window.innerHeight);
            const targetReached =
                typeof lock.targetY === 'number' &&
                (
                    Math.abs(window.scrollY - lock.targetY) <= 14 ||
                    (lock.targetY >= maxScrollY - 2 && window.scrollY >= maxScrollY - 2)
                );
            const reachedBySection = Boolean(lock.target && nextSection === lock.target);

            if ((targetReached || reachedBySection) && lock.target) {
                swipeSectionRef.current = lock.target;
                setActiveSection((prev) => (prev === lock.target ? prev : lock.target));
                unlockAutoScroll();
            }
            return;
        }

        setActiveSection((prev) => (prev === nextSection ? prev : nextSection));
        swipeSectionRef.current = nextSection;
    }, [isDragging, unlockAutoScroll]);

    const updateViewportOffset = useCallback(() => {
        if (typeof window === 'undefined') return;
        const viewport = window.visualViewport;
        if (!viewport) {
            document.documentElement.style.setProperty('--vv-bottom-offset', '0px');
            return;
        }
        const offset = Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop);
        document.documentElement.style.setProperty('--vv-bottom-offset', `${offset}px`);
    }, []);

    useEffect(() => {
        if (!isHome) return undefined;
        let rafId = null;

        const handleScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                updateActiveSection();
                rafId = null;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isHome, updateActiveSection]);

    useEffect(() => {
        if (!isHome) return undefined;

        const handleUserScrollIntent = () => {
            if (autoScrollLockRef.current.locked) {
                unlockAutoScroll();
            }
        };

        window.addEventListener('touchstart', handleUserScrollIntent, { passive: true });
        window.addEventListener('wheel', handleUserScrollIntent, { passive: true });

        return () => {
            window.removeEventListener('touchstart', handleUserScrollIntent);
            window.removeEventListener('wheel', handleUserScrollIntent);
        };
    }, [isHome, unlockAutoScroll]);

    useEffect(() => {
        updateViewportOffset();
        const viewport = window.visualViewport;
        viewport?.addEventListener('resize', updateViewportOffset);
        viewport?.addEventListener('scroll', updateViewportOffset);
        window.addEventListener('resize', updateViewportOffset);
        window.addEventListener('orientationchange', updateViewportOffset);
        return () => {
            viewport?.removeEventListener('resize', updateViewportOffset);
            viewport?.removeEventListener('scroll', updateViewportOffset);
            window.removeEventListener('resize', updateViewportOffset);
            window.removeEventListener('orientationchange', updateViewportOffset);
        };
    }, [updateViewportOffset]);

    useEffect(() => () => {
        unlockAutoScroll();
    }, [unlockAutoScroll]);

    const getSectionFromPoint = useCallback((x, y) => {
        const element = document.elementFromPoint(x, y);
        if (!element) return null;
        const target = element.closest('[data-section]');
        return target?.getAttribute('data-section') || null;
    }, []);

    const handleTouchStart = useCallback((event) => {
        if (event.touches.length !== 1) return;
        const touch = event.touches[0];
        swipeStartRef.current = { x: touch.clientX, y: touch.clientY };
        isSwipingRef.current = false;
        setIsDragging(false);
        pendingSectionRef.current = getSectionFromPoint(touch.clientX, touch.clientY) || swipeSectionRef.current;
    }, [getSectionFromPoint]);

    const handleTouchMove = useCallback((event) => {
        if (event.touches.length !== 1 || !swipeStartRef.current) return;
        const touch = event.touches[0];
        const start = swipeStartRef.current;
        const dx = touch.clientX - start.x;
        const dy = touch.clientY - start.y;

        if (!isSwipingRef.current) {
            if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
                isSwipingRef.current = true;
                setIsDragging(true);
            } else {
                return;
            }
        }

        if (event.cancelable) event.preventDefault();
        const sectionId = getSectionFromPoint(touch.clientX, touch.clientY);
        if (sectionId && NAV_SECTION_IDS.includes(sectionId)) {
            pendingSectionRef.current = sectionId;
            if (sectionId !== swipeSectionRef.current) {
                setActiveSectionImmediate(sectionId);
            }
        }
    }, [getSectionFromPoint, setActiveSectionImmediate]);

    const handleTouchEnd = useCallback(() => {
        if (!isSwipingRef.current) return;
        isSwipingRef.current = false;
        swipeStartRef.current = null;
        setIsDragging(false);
        const finalSection = pendingSectionRef.current;
        pendingSectionRef.current = null;
        if (finalSection) {
            selectSection(finalSection);
        }
        ignoreClickRef.current = true;
        setTimeout(() => {
            ignoreClickRef.current = false;
        }, 0);
    }, [selectSection]);

    const handleTouchCancel = useCallback(() => {
        isSwipingRef.current = false;
        swipeStartRef.current = null;
        pendingSectionRef.current = null;
        setIsDragging(false);
    }, []);

    const handleNavClick = (event, sectionId) => {
        if (ignoreClickRef.current) {
            event.preventDefault();
            return;
        }
        event.preventDefault();
        selectSection(sectionId);
    };

    return (
        <nav
            className={styles.bottomNav}
            role="navigation"
            aria-label="Navegación principal"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
        >
            <Link
                to="/"
                data-section="inicio"
                className={`${styles.navItem} ${resolvedActiveSection === 'inicio' ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, 'inicio')}
            >
                <HomeIcon />
                <span>INICIO</span>
            </Link>

            <a
                href="#categorias"
                data-section="categorias"
                className={`${styles.navItem} ${resolvedActiveSection === 'categorias' ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, 'categorias')}
            >
                <ProductosIcon />
                <span>CATEGORÍAS</span>
            </a>

            <a
                href="#beneficios"
                data-section="beneficios"
                className={`${styles.navItem} ${resolvedActiveSection === 'beneficios' ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, 'beneficios')}
            >
                <BeneficiosIcon />
                <span>BENEFICIOS</span>
            </a>

            <Link
                to="/galeria"
                data-section="galeria"
                className={`${styles.navItem} ${resolvedActiveSection === 'galeria' ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, 'galeria')}
            >
                <GaleriaIcon />
                <span>GALERÍA</span>
            </Link>

            <Link
                to="/sobre-victu"
                data-section="contacto"
                className={`${styles.navItem} ${location.pathname === '/sobre-victu' ? styles.active : ''}`}
                onClick={() => setIsDragging(false)}
            >
                <ContactoIcon />
                <span>NOSOTROS</span>
            </Link>
        </nav>
    );
}
