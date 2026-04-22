import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { GALLERY, YOUTUBE_VIDEOS } from '../data/galleryMedia';
import styles from './Galeria.module.css';

const GALLERY_STRUCTURED_IMAGES = GALLERY.map((item) => `https://victunoa.com${item.img}`);

export default function Galeria() {
    const [lightbox, setLightbox] = useState(null); // { img, title, desc }

    const openLightbox = useCallback((item) => setLightbox(item), []);
    const closeLightbox = useCallback(() => setLightbox(null), []);

    useEffect(() => {
        if (!lightbox) return;
        const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [lightbox, closeLightbox]);

    useSEO({
        title: 'Galería de fotos y videos',
        description: 'Galería de Victu con fotos de campo y videos de YouTube sobre manejo, suplementación y resultados productivos en NOA y NEA.',
        url: '/galeria',
        image: '/images/logo_og.png',
        structuredData: [
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://victunoa.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Galería', item: 'https://victunoa.com/galeria' },
                ],
            },
            {
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                name: 'Galería Victu',
                url: 'https://victunoa.com/galeria',
                description: 'Fotos y videos de campo de Victu sobre bionutrición y manejo productivo.',
                image: GALLERY_STRUCTURED_IMAGES,
            },
        ],
    });

    return (
        <div className={styles.page}>
            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroInner}`}>
                    <span className={styles.heroBadge}>Galería Victu</span>
                    <h1 className={styles.heroTitle}>Fotos y videos de campo</h1>
                    <p className={styles.heroSub}>
                        Contenido visual real: recorridas, manejo, resultados productivos
                        y material técnico de nuestro canal de YouTube.
                    </p>
                    <div className={styles.heroStats}>
                        <div className={styles.heroStat}>
                            <span className={styles.heroStatNum}>{GALLERY.length}</span>
                            <span className={styles.heroStatLabel}>Fotos</span>
                        </div>
                        <div className={styles.heroStatDivider} />
                        <div className={styles.heroStat}>
                            <span className={styles.heroStatNum}>{YOUTUBE_VIDEOS.length}</span>
                            <span className={styles.heroStatLabel}>Videos</span>
                        </div>
                        <div className={styles.heroStatDivider} />
                        <div className={styles.heroStat}>
                            <span className={styles.heroStatNum}>100%</span>
                            <span className={styles.heroStatLabel}>Contenido real de campo</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOTOS ── */}
            <section className={styles.gallerySection}>
                <div className="container">
                    <div className={styles.secHeader}>
                        <div className={styles.secMeta}>
                            <span className={styles.secNum}>01</span>
                            <span className={styles.secLabel}>Fotos</span>
                        </div>
                        <h2 className={styles.secTitle}>Conocé nuestros productos en acción</h2>
                        <p className={styles.secSub}>Imágenes reales de trabajo en campo y seguimiento técnico.</p>
                    </div>

                    <div className={styles.galleryGrid}>
                        {GALLERY.map((item, index) => (
                            <article
                                key={`${item.img}-${index}`}
                                className={styles.galleryCard}
                                onClick={() => openLightbox(item)}
                                role="button"
                                tabIndex={0}
                                aria-label={`Ver foto: ${item.title}`}
                                onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
                            >
                                <div className={styles.galleryMedia}>
                                    <img
                                        src={item.img}
                                        srcSet={`${item.img.replace('.webp', '_sm.webp')} 600w, ${item.img} 1400w`}
                                        sizes="(max-width: 768px) 50vw, 400px"
                                        alt={item.title}
                                        loading={index < 3 ? 'eager' : 'lazy'}
                                        decoding={index < 3 ? 'sync' : 'async'}
                                        fetchpriority={index === 0 ? 'high' : undefined}
                                        width="800"
                                        height="500"
                                    />
                                    <span className={styles.galleryBadge}>{item.badge}</span>

                                    {/* Expand icon */}
                                    <div className={styles.galleryExpandIcon} aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                        </svg>
                                    </div>

                                    {/* Hover overlay with info */}
                                    <div className={styles.galleryOverlay}>
                                        <span className={styles.galleryOverlayTag}>{item.badge}</span>
                                        <p className={styles.galleryOverlayTitle}>{item.title}</p>
                                        <p className={styles.galleryOverlayDesc}>{item.desc}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── YOUTUBE ── */}
            <section className={styles.ytSection}>
                <div className="container">
                    <div className={styles.secHeader}>
                        <div className={styles.secMeta}>
                            <span className={styles.secNum} style={{ color: '#C9A96E' }}>02</span>
                            <span className={`${styles.secLabel} ${styles.secLabelDark}`}>Videos en YouTube</span>
                        </div>
                        <h2 className={`${styles.secTitle} ${styles.secTitleDark}`}>Canal de YouTube Victu</h2>
                        <p className={`${styles.secSub} ${styles.secSubDark}`}>
                            Todo el contenido audiovisual técnico en un solo lugar.
                        </p>
                    </div>

                    <div className={styles.ytGrid}>
                        {YOUTUBE_VIDEOS.map((video) => (
                            <a
                                key={video.id}
                                href={video.isShort
                                    ? `https://youtube.com/shorts/${video.id}`
                                    : `https://www.youtube.com/watch?v=${video.id}`
                                }
                                target="_blank"
                                rel="noreferrer"
                                className={styles.ytCard}
                            >
                                <div className={styles.ytThumb}>
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                        alt={video.title}
                                        loading="lazy"
                                        className={styles.ytThumbImg}
                                    />
                                    <div className={styles.ytThumbOverlay} />
                                    <div className={styles.ytThumbPlay}>
                                        <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    {video.isShort && (
                                        <span className={styles.ytShortBadge}>Short</span>
                                    )}
                                </div>
                                <div className={styles.ytInfo}>
                                    <p className={styles.ytTitle}>{video.title}</p>
                                    <span className={styles.ytLink}>
                                        <svg viewBox="0 0 24 24" fill="#FF0000" width="12" height="12">
                                            <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.3 5 12 5 12 5s-4.3 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9C6.8 19 12 19 12 19s4.3 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.2 3L10 15z" />
                                        </svg>
                                        Ver en YouTube
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <nav className={styles.breadcrumb} aria-label="Navegación de ruta">
                <Link to="/">Inicio</Link>
                <span aria-hidden="true"> › </span>
                <span aria-current="page">Galería</span>
            </nav>

            {/* ── LIGHTBOX ── */}
            {lightbox && (
                <div
                    className={styles.lightboxBackdrop}
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label={lightbox.title}
                >
                    <button
                        className={styles.lightboxClose}
                        onClick={closeLightbox}
                        aria-label="Cerrar"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="20" height="20">
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <div
                        className={styles.lightboxContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={lightbox.img}
                            alt={lightbox.title}
                            className={styles.lightboxImg}
                            decoding="async"
                        />
                        <div className={styles.lightboxInfo}>
                            <span className={styles.lightboxTag}>{lightbox.badge}</span>
                            <p className={styles.lightboxTitle}>{lightbox.title}</p>
                            <p className={styles.lightboxDesc}>{lightbox.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
