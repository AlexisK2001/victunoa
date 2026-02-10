import { useState, useEffect } from 'react';
import styles from './TestimonialSlider.module.css';

export default function TestimonialSlider({ testimonials }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % testimonials.length
            );
        }, 7000);

        return () => clearInterval(interval);
    }, [isPaused, testimonials.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsPaused(false);
    };

    return (
        <div className={styles.testimonialSlider}>
            {testimonials.map((testimonial, index) => (
                <div
                    key={testimonial.id}
                    className={`${styles.testimonialCard} ${index === currentIndex ? styles.active : ''
                        }`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className={styles.testimonialQuote}>"</div>
                    <p className={styles.testimonialText}>{testimonial.text}</p>
                    <div className={styles.testimonialAuthor}>
                        <p className={styles.authorName}>{testimonial.author}</p>
                        <p className={styles.authorInfo}>
                            {testimonial.role} • {testimonial.location}
                        </p>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className={styles.dotsContainer}>
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Ir al testimonio ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
