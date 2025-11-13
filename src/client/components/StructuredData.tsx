import Script from 'next/script'

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HastyDev',
    url: 'https://hastydev.com.br',
    logo: 'https://hastydev.com.br/image/2024024_Logo_HASTYDEV_Horizontal_Negativo.png',
    description: 'Especialistas em transformar ideias em realidade no universo Web3. Oferecemos soluções completas que integram tecnologia blockchain, jurídico e marketing para criar produtos escaláveis no ecossistema descentralizado.',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Portuguese', 'English'],
    },
    sameAs: [
      'https://instagram.com/hastydev/',
      'https://www.linkedin.com/company/hastydev/',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Produtos HastyDev',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HastyP2P Core',
            description: 'Automatize sua operação P2P com contratos inteligentes, eliminando intermediários e reduzindo riscos. Solução white-label e modular, adaptável ao seu negócio.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HastyPay Engine',
            description: 'Motor de pagamentos em criptomoedas para integração em plataformas e sistemas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HastyLegal Guide',
            description: 'Estruturação jurídica para projetos Web3 e blockchain em jurisdições estratégicas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HastyBrand Studio',
            description: 'Design e branding especializado para projetos do ecossistema descentralizado.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
    },
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HastyDev',
    url: 'https://hastydev.com.br',
    description: 'Soluções Web3, Blockchain e Desenvolvimento Descentralizado',
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Organization',
      name: 'HastyDev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hastydev.com.br/image/2024024_Logo_HASTYDEV_Horizontal_Negativo.png',
      },
    },
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hastydev.com.br',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Produtos',
        item: 'https://hastydev.com.br/#produtos',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Sobre',
        item: 'https://hastydev.com.br/#sobre',
      },
    ],
  }

  return (
    <>
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <Script
        id="structured-data-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  )
}
