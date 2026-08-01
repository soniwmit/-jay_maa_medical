import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  breadcrumbs?: { name: string; url: string }[];
  faqs?: { question: string; answer: string }[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  breadcrumbs,
  faqs
}) => {
  useEffect(() => {
    // Page Title
    document.title = `${title} | ${BUSINESS_INFO.name}`;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Meta Keywords
    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (metaKw) {
        metaKw.setAttribute('content', keywords);
      }
    }

    // Insert or update JSON-LD Schema
    const schemaId = 'jmm-jsonld-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      'name': BUSINESS_INFO.name,
      'alternateName': BUSINESS_INFO.englishName,
      'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
      'telephone': BUSINESS_INFO.phoneNumber,
      'email': BUSINESS_INFO.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Chandhos Road, Paliganj',
        'addressLocality': 'Paliganj',
        'addressRegion': 'Bihar',
        'postalCode': '801110',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '25.3958',
        'longitude': '84.7937'
      },
      'url': window.location.origin,
      'priceRange': '₹',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '07:00',
          'closes': '22:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '07:30',
          'closes': '21:30'
        }
      ],
      'paymentAccepted': 'Cash, UPI, Google Pay, PhonePe, Paytm, Debit Card',
      'currenciesAccepted': 'INR'
    };

    const schemas: any[] = [localBusinessSchema];

    // Breadcrumb Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': crumb.name,
          'item': `${window.location.origin}${crumb.url}`
        }))
      });
    }

    // FAQ Schema
    if (faqs && faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      });
    }

    scriptTag.textContent = JSON.stringify(schemas);

  }, [title, description, keywords, canonicalUrl, breadcrumbs, faqs]);

  return null;
};
