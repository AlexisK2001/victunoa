import { useEffect } from 'react';

export function useSEO({ title, description, keywords, image, url, type = 'website', structuredData }) {
    useEffect(() => {
        // Update Title
        if (title) {
            document.title = `${title} | Victu`;
        } else {
            document.title = 'Victu - Biosales y Nutrición Animal';
        }

        // Helper to update meta tags
        const setMetaTag = (name, content) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        const setOgTag = (property, content) => {
            let element = document.querySelector(`meta[property="${property}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('property', property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Update Meta Tags
        if (description) {
            setMetaTag('description', description);
            setOgTag('og:description', description);
        }

        if (keywords) {
            setMetaTag('keywords', keywords);
        }

        if (title) {
            setOgTag('og:title', title);
        }

        // Handle Image
        const imageUrl = image ? (image.startsWith('http') ? image : window.location.origin + image) : '/images/logo3.jpg';
        setOgTag('og:image', imageUrl);

        // Handle URL
        const currentUrl = url ? (url.startsWith('http') ? url : window.location.origin + url) : window.location.href;
        setOgTag('og:url', currentUrl);

        // Canonical URL
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', currentUrl);

        setOgTag('og:type', type);

        // Structured Data (JSON-LD)
        if (structuredData) {
            let script = document.querySelector('#dynamic-json-ld');
            if (!script) {
                script = document.createElement('script');
                script.setAttribute('type', 'application/ld+json');
                script.setAttribute('id', 'dynamic-json-ld');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(structuredData);
        } else {
            let script = document.querySelector('#dynamic-json-ld');
            if (script) script.remove();
        }

    }, [title, description, keywords, image, url, type, structuredData]);
}
