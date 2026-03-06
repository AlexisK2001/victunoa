import { useEffect } from 'react';

const SITE_URL = 'https://victunoa.com';
const DEFAULT_IMAGE = SITE_URL + '/images/logo3.jpg';

export function useSEO({ title, description, keywords, image, url, type = 'website', structuredData }) {
    useEffect(() => {
        if (title) {
            document.title = `${title} | Victu`;
        } else {
            document.title = 'Victu - Biosales y Nutrición Animal';
        }

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

        const fullTitle = title ? `${title} | Victu` : 'Victu - Biosales y Nutrición Animal';

        if (description) {
            setMetaTag('description', description);
            setOgTag('og:description', description);
            setMetaTag('twitter:description', description);
        }

        if (keywords) {
            setMetaTag('keywords', keywords);
        }

        setOgTag('og:title', fullTitle);
        setMetaTag('twitter:title', fullTitle);
        setMetaTag('twitter:card', 'summary_large_image');

        const imageUrl = image
            ? (image.startsWith('http') ? image : SITE_URL + image)
            : DEFAULT_IMAGE;
        setOgTag('og:image', imageUrl);
        setMetaTag('twitter:image', imageUrl);

        const currentUrl = url
            ? (url.startsWith('http') ? url : SITE_URL + url)
            : window.location.href;
        setOgTag('og:url', currentUrl);

        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', currentUrl);

        setOgTag('og:type', type);

        const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
        existingScripts.forEach(s => s.remove());

        const schemas = Array.isArray(structuredData) ? structuredData : (structuredData ? [structuredData] : []);
        schemas.forEach((schema, i) => {
            const script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            script.setAttribute('data-seo-jsonld', `schema-${i}`);
            script.textContent = JSON.stringify(schema);
            document.head.appendChild(script);
        });

    }, [title, description, keywords, image, url, type, structuredData]);
}
