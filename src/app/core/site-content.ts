import { Locale } from './i18n.service';

export interface SiteCopy {
  brand: string;
  nav: {
    presentation: string;
    properties: string;
    residential: string;
    forestal: string;
    archive: string;
    gallery: string;
    memoria: string;
    imaxes: string;
    planos: string;
    fichas: string;
    navigation: string;
    menu: string;
    closeMenu: string;
  };
  home: {
    title: string;
    intro: string;
    coverImages: { valleyAlt: string; villageAlt: string };
    primaryCta: string;
    secondaryCta: string;
    highlights: Array<{ title: string; text: string }>;
  };
  sections: {
    planoDirector: {
      title: string;
      intro: string;
      titleFull: string;
      year: number;
      association: string;
      associationFull: string;
      description: string;
    };
    imaxes: { title: string; intro: string };
    planosUrbanisticos: {
      title: string;
      intro: string;
      analysisLabel: string;
      interventionsLabel: string;
      overallLabel: string;
      view: string;
      download: string;
    };
    contornaForestal: { title: string; intro: string; imageAlt: string };
    casasParcel: {
      title: string;
      intro: string;
      samplePrice: string;
      emptyState: string;
      cadastralRefLabel: string;
    };
    fichas: {
      title: string;
      intro: string;
      languageNote: string;
      filterLabel: string;
      filterPlaceholder: string;
      noResults: string;
      view: string;
      download: string;
      viewFicha: string;
      planLink: string;
    };
  };
  gallery: {
    title: string;
    intro: string;
    assetHint: string;
  };
  video: {
    title: string;
    intro: string;
    fileHint: string;
  };
  about: {
    title: string;
    intro: string;
    pillars: Array<{ title: string; text: string }>;
  };
  visit: {
    title: string;
    intro: string;
    facts: Array<{ label: string; value: string }>;
  };
  availability: {
    title: string;
    intro: string;
    notice: string;
    form: {
      name: string;
      email: string;
      checkIn: string;
      checkOut: string;
      guests: string;
      notes: string;
      preferredLanguage: string;
      submit: string;
    };
    errors: {
      required: string;
      email: string;
      minGuests: string;
      maxGuests: string;
      invalidDates: string;
    };
    success: string;
  };
  footer: {
    line1: string;
    line2: string;
  };
}

export interface GalleryItem {
  src: string;
  alt: Record<Locale, string>;
  caption: Record<Locale, string>;
}

export interface PropertyForSale {
  id: string;
  label: string;
  cadastralRef: string;
  notes?: string;
  buildingCode?: string;
}

export interface BuildingRecord {
  code: string;
  file: string;
}

export interface CadastralPlanAsset {
  src: string;
  alt: Record<Locale, string>;
  caption: Record<Locale, string>;
  fallback: Record<Locale, string>;
  attribution: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: 'images/village-main-street.jpg',
    alt: {
      en: 'Stone street in the village center',
      es: 'Calle de piedra en el centro de la aldea',
      gl: 'Rua de pedra no centro da aldea',
      ca: 'Carrer de pedra al centre de la vila',
      fr: 'Rue de pierre au centre du village'
    },
    caption: {
      en: 'Main lane between granite houses',
      es: 'Calle principal entre casas de granito',
      gl: 'Ruela principal entre casas de granito',
      ca: 'Carrer principal entre cases de granit',
      fr: 'Rue principale entre maisons en granit'
    }
  },
  {
    src: 'images/village-terraces.jpg',
    alt: {
      en: 'Terraces with green hills behind',
      es: 'Terrazas con colinas verdes al fondo',
      gl: 'Terrazas con outeiros verdes ao fondo',
      ca: 'Terrasses amb turons verds al fons',
      fr: 'Terrasses avec collines vertes en arrière-plan'
    },
    caption: {
      en: 'Morning view from the eco-garden terraces',
      es: 'Vista desde las terrazas del eco-huerto',
      gl: 'Vista desde as terrazas da eco-horta',
      ca: 'Vista matinal des de les terrasses de l\'hort ecologic',
      fr: 'Vue du matin depuis les terrasses du jardin ecologique'
    }
  },
  {
    src: 'images/village-river-path.jpg',
    alt: {
      en: 'Path near a small river and trees',
      es: 'Sendero junto a un pequeno rio y arboles',
      gl: 'Sendeiro xunto a un pequeno rio e arbores',
      ca: 'Camí prop d\'un petit riu i arbres',
      fr: 'Sentier pres d\'une petite riviere et d\'arbres'
    },
    caption: {
      en: 'Walking path to the river reserve',
      es: 'Camino de paseo hacia la reserva del rio',
      gl: 'Caminata cara a reserva do rio',
      ca: 'Senda de passeig cap a la reserva del riu',
      fr: 'Sentier de promenade vers la reserve fluviale'
    }
  },
  {
    src: 'images/village-night-fire.jpg',
    alt: {
      en: 'Evening gathering around a fire pit',
      es: 'Encuentro al atardecer alrededor de un fuego',
      gl: 'Xuntanza ao solpor arredor do lume',
      ca: 'Reunio al vespre al voltant d\'una foguera',
      fr: 'Rassemblement en soiree autour d\'un feu'
    },
    caption: {
      en: 'Community evening by the fire circle',
      es: 'Noche comunitaria en el circulo de fuego',
      gl: 'Noite comunitaria no circulo de lume',
      ca: 'Vetllada comunitaria al voltant del cercle de foc',
      fr: 'Soiree communautaire pres du cercle de feu'
    }
  }
];

export const PROPERTIES_FOR_SALE: PropertyForSale[] = [
  {
    id: 'prop-01',
    label: 'Vivenda nº 16 do núcleo urbano',
    cadastralRef: '000500600PG68G0001AE',
    notes: 'Superficie construída 132 m², en dúas plantas de 66 m²'
  },
  {
    id: 'prop-02',
    label: 'Casa-vivenda do núcleo urbano (polígono 33, parcela 1138)',
    cadastralRef: '32084A033011380000RO',
    notes: 'Superficie construída 24 m², piso con baixo de 12 m² cada un'
  },
  {
    id: 'prop-03',
    label: 'Casa-vivenda do núcleo urbano',
    cadastralRef: '000500800PG6800001YE',
    notes: 'Superficie construída 157 m²: planta baixa-almacén 77 m², planta alta-vivenda 80 m², sobre parcela de 83 m²'
  },
  {
    id: 'prop-04',
    label: 'Casa-vivenda nº 17 do núcleo urbano',
    cadastralRef: '000500700PG68G0001BE',
    notes: 'Superficie construída 66 m²: planta baixa-almacén 33 m², planta primeira-vivenda 33 m², sobre parcela de 69 m²'
  },
  {
    id: 'prop-05',
    label: 'Casa-vivenda nº 19 do núcleo urbano',
    cadastralRef: '000500900PG68G0001GE',
    notes: 'Superficie construída 198 m² sobre parcela de 62 m²: planta baixa-almacén 55 m², planta primeira 71 m², planta segunda 72 m²'
  },
  {
    id: 'prop-06',
    label: 'Casa-vivenda nº 5 do núcleo urbano',
    cadastralRef: '000400500PG68G0001BE',
    notes: 'Sobre parcela de 166 m² construídos, tres corpos: almacén 91 m², edificación agraria 33 m², almacén 56 m²'
  },
  {
    id: 'prop-07',
    label: 'Casa-vivenda nº 13 do núcleo urbano',
    cadastralRef: '000500300PG68G0001UE',
    notes: 'Superficie construída 112 m² sobre parcela de 56 m²: planta baixa-almacén 53 m², planta primeira-vivenda 59 m²'
  },
  {
    id: 'prop-08',
    label: 'Casa-vivenda do núcleo urbano',
    cadastralRef: '32084A033011400000RM',
    notes: 'Superficie construída total 84 m² sobre parcela de 37 m²: planta baixa 37 m², planta primeira 37 m², almacén anexo 9 m²'
  },
  {
    id: 'prop-09',
    label: 'Casa-vivenda en planta baixa',
    cadastralRef: '32084A032011300000RF',
    notes: 'Superficie construída 72 m² sobre terreo de 72 m²'
  },
  {
    id: 'prop-10',
    label: 'Almacén-palleira do núcleo urbano',
    cadastralRef: 'Sen referencia catastral',
    notes: 'Superficie construída 50 m², en dúas plantas de 25 m² cada unha'
  },
  {
    id: 'prop-11',
    label: 'Adega-almacén do núcleo urbano',
    cadastralRef: 'Sen referencia catastral',
    notes: 'Superficie construída 40 m², en dúas plantas de 20 m² cada unha'
  },
  {
    id: 'prop-12',
    label: 'Casa-vivenda do núcleo urbano',
    cadastralRef: 'Sen rexistrar nin catastrar',
    notes: 'Superficie construída 100 m²: planta baixa e alta de 45 m² cada unha, máis leñeira de 10 m²'
  },
  {
    id: 'prop-13',
    label: 'Vivenda-palleira de planta baixa do núcleo urbano',
    cadastralRef: 'Sen rexistrar nin catastrar',
    notes: 'Superficie construída 40 m²'
  }
];

// Building record sheets (fichas) from the 2009 master plan; codes have gaps by design.
export const BUILDING_RECORDS: BuildingRecord[] = [
  1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 18, 22, 23, 24, 26, 27, 28, 30, 31, 34, 35, 36, 37, 39, 41, 42, 43, 44,
  47, 49, 50, 52, 53, 55, 56, 57, 58, 59, 60, 61, 62, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84
].map((n) => {
  const code = `C${String(n).padStart(2, '0')}`;
  return { code, file: `fichas/${code}.pdf` };
});

export const CADASTRAL_PLAN_ASSET: CadastralPlanAsset = {
  src: 'images/plano-catastral-riomao.jpg',
  alt: {
    en: 'Cadastral plan map of Riomao village',
    es: 'Plano catastral de la aldea de Riomao',
    gl: 'Plano catastral da aldea de Riomao',
    ca: 'Plànol cadastral del poble de Riomao',
    fr: 'Plan cadastral du village de Riomao'
  },
  caption: {
    en: 'Cadastral plan of Riomao (source: Catastro de España)',
    es: 'Plano catastral de Riomao (fuente: Catastro de España)',
    gl: 'Plano catastral de Riomao (fonte: Catastro de España)',
    ca: 'Plànol cadastral de Riomao (font: Catastro de España)',
    fr: 'Plan cadastral de Riomao (source: Catastro de España)'
  },
  fallback: {
    en: 'The cadastral plan image is temporarily unavailable.',
    es: 'La imagen del plano catastral no está disponible temporalmente.',
    gl: 'A imaxe do plano catastral non está dispoñible temporalmente.',
    ca: "La imatge del plànol cadastral no està disponible temporalment.",
    fr: "L'image du plan cadastral est temporairement indisponible."
  },
  attribution: 'Fonte: Catastro de España'
};

export const SITE_COPY: Record<Locale, SiteCopy> = {
  en: {
    brand: 'RIAMOR. O NOVO RIOMAO',
    nav: {
      presentation: 'Presentation: Riamor and surroundings',
      properties: 'Properties for sale',
      residential: 'Village residential area',
      forestal: 'Forest surroundings: the 50 ha Great Chestnut Grove of Riomao, natural monument',
      archive: 'Archive: graphic documentation and press news',
      gallery: 'Gallery',
      memoria: 'Memoria of the integral rehabilitation master plan',
      imaxes: 'Images',
      planos: 'Plans',
      fichas: 'Building records',
      navigation: 'Navigation',
      menu: 'Menu',
      closeMenu: 'Close menu'
    },
    home: {
      title: 'RIAMOR. The New Riomao.',
      intro:
        'Housing and ecosocial promotion project for an old heritage village at high altitude in the Trevinca valley (Ourense).',
      coverImages: {
        valleyAlt: 'Forested valley surrounding Riomao',
        villageAlt: 'Traditional village houses among trees in Riomao'
      },
      primaryCta: 'View memory',
      secondaryCta: 'Explore properties',
      highlights: [
        {
          title: 'Village life',
          text: 'Traditional houses, local produce, and a close-knit community.'
        },
        {
          title: 'Nature first',
          text: 'River paths, native trees, and low-impact tourism experiences.'
        },
        {
          title: 'Future stays',
          text: 'Room booking will come later. For now, send a simple availability request.'
        }
      ]
    },
    gallery: {
      title: 'Photo Gallery',
      intro: 'A first look at village corners, landscapes, and community moments.',
      assetHint:
        'Add your real photos to public/images using these names: village-main-street.jpg, village-terraces.jpg, village-river-path.jpg, village-night-fire.jpg.'
    },
    video: {
      title: 'Village Video',
      intro: 'Watch a short clip to feel the atmosphere of Riomao.',
      fileHint: 'Place your video file at public/videos/riomao-village.mp4.'
    },
    about: {
      title: 'About the eco-village',
      intro:
        'Riomao combines local traditions with ecological care. Visitors are welcomed to slow down and connect with people and place.',
      pillars: [
        {
          title: 'Regenerative practices',
          text: 'Composting, water care, and seasonal planting are part of everyday life.'
        },
        {
          title: 'Shared community',
          text: 'Neighbors collaborate in common spaces, meals, and village maintenance.'
        },
        {
          title: 'Respectful tourism',
          text: 'Small groups and mindful stays keep the village calm and authentic.'
        }
      ]
    },
    visit: {
      title: 'Visit Information',
      intro: 'Plan your journey and get practical details before coming.',
      facts: [
        { label: 'Region', value: 'Rural Galicia' },
        { label: 'Closest city', value: 'Santiago de Compostela (example)' },
        { label: 'Suggested season', value: 'Spring to early autumn' },
        { label: 'Contact email', value: 'hello@riomao-eco.local' }
      ]
    },
    availability: {
      title: 'Availability request',
      intro: 'Send your preferred dates and we will reply with options.',
      notice:
        'This is not a confirmed booking. It is only a request for availability. Payments are not enabled yet.',
      form: {
        name: 'Full name',
        email: 'Email',
        checkIn: 'Check-in',
        checkOut: 'Check-out',
        guests: 'Guests',
        notes: 'Notes',
        preferredLanguage: 'Preferred language',
        submit: 'Send request'
      },
      errors: {
        required: 'This field is required.',
        email: 'Please enter a valid email.',
        minGuests: 'At least 1 guest is required.',
        maxGuests: 'Maximum 8 guests in this request.',
        invalidDates: 'Check-out must be later than check-in.'
      },
      success: 'Your request was sent. We will contact you shortly.'
    },
    footer: {
      line1: 'RIAMOR. O NOVO RIOMAO · Ourense',
      line2: 'Heritage village rehabilitation project.'
    },
    sections: {
      planoDirector: {
        title: 'Master Plan for Riomao and Surroundings',
        intro: 'Integrated rehabilitation strategy for the village and landscape.',
        titleFull: 'Integral Rehabilitation Master Plan for Riomao and Surroundings (2009)',
        year: 2009,
        association: 'AVESSATOR',
        associationFull: "Socio-cultural Residents' Association of Santo Tomé de Riomao",
        description:
          'Strategic document produced by AVESSATOR in 2009 defining the integral rehabilitation of the village of Riomao and its surroundings. It covers the general analysis of the built heritage, the condition of existing buildings, and the specific interventions proposed for residential and landscape recovery.'
      },
      imaxes: {
        title: 'Landscape and Forest Images',
        intro: 'A visual journey through the natural beauty of the region.'
      },
      planosUrbanisticos: {
        title: 'Cadastral and Urban Plans',
        intro: 'Detailed maps and planning documents for Novo Riomao.',
        analysisLabel: 'General analysis',
        interventionsLabel: 'Specific interventions',
        overallLabel: 'Overall plan',
        view: 'View',
        download: 'Download'
      },
      contornaForestal: {
        title: 'Forest surroundings',
        intro: 'The Gran Souto de Riomao covers 50 ha and is a natural monument.',
        imageAlt: 'Forested valley and chestnut woodland surrounding Riomao'
      },
      casasParcel: {
        title: 'Homes and Plots for Sale',
        intro: 'Discover available properties in Novo Riomao.',
        samplePrice: 'Starting from €150,000',
        emptyState: 'No properties are currently listed for sale.',
        cadastralRefLabel: 'Cadastral reference'
      },
      fichas: {
        title: 'Building Records',
        intro: 'Individual record sheets for each building analysed in the 2009 Master Plan: current condition, photographs, intervention level and estimated cost.',
        languageNote: 'Documents are available in their original language (Spanish).',
        filterLabel: 'Filter by code',
        filterPlaceholder: 'e.g. C01',
        noResults: 'No building records match that code.',
        view: 'View',
        download: 'Download',
        viewFicha: 'View building record',
        planLink: 'See the building records'
      }
    }
  },
  es: {
    brand: 'RIAMOR. O NOVO RIOMAO',
    nav: {
      presentation: 'Presentación: Riamor y su entorno',
      properties: 'Propiedades en venta',
      residential: 'Núcleo residencial de la aldea',
      forestal: 'Entorno forestal: el Gran Souto de Riomao, 50 ha, monumento natural',
      archive: 'Archivo: documentación gráfica y noticias de prensa',
      gallery: 'Galería',
      memoria: 'Memoria del plan director de rehabilitación integral',
      imaxes: 'Imágenes',
      planos: 'Planos',
      fichas: 'Fichas',
      navigation: 'Navegación',
      menu: 'Menú',
      closeMenu: 'Cerrar menú'
    },
    home: {
      title: 'RIAMOR. El Nuevo Riomao.',
      intro:
        'Proyecto de promoción habitacional y ecosocial de una vieja aldea patrimonial de alta montaña en la Veiga de Trevinca (Ourense).',
      coverImages: {
        valleyAlt: 'Valle boscoso que rodea Riomao',
        villageAlt: 'Casas tradicionales entre los árboles de Riomao'
      },
      primaryCta: 'Ver memoria',
      secondaryCta: 'Ver propiedades',
      highlights: [
        {
          title: 'Vida de aldea',
          text: 'Casas tradicionales, producto local y una comunidad cercana.'
        },
        {
          title: 'Naturaleza primero',
          text: 'Caminos de rio, arboles nativos y turismo de bajo impacto.'
        },
        {
          title: 'Estancias futuras',
          text: 'La reserva de habitaciones llegara mas adelante. Por ahora, envia una solicitud simple.'
        }
      ]
    },
    gallery: {
      title: 'Galeria de fotos',
      intro: 'Una primera mirada a rincones, paisajes y momentos comunitarios.',
      assetHint:
        'Anade tus fotos reales en public/images con estos nombres: village-main-street.jpg, village-terraces.jpg, village-river-path.jpg, village-night-fire.jpg.'
    },
    video: {
      title: 'Video de la aldea',
      intro: 'Mira un clip corto para sentir la atmosfera de Riomao.',
      fileHint: 'Coloca tu video en public/videos/riomao-village.mp4.'
    },
    about: {
      title: 'Sobre la ecoaldea',
      intro:
        'Riomao une tradiciones locales con cuidado ecologico. Invitamos a visitar con calma y conectar con las personas y el lugar.',
      pillars: [
        {
          title: 'Practicas regenerativas',
          text: 'Compostaje, cuidado del agua y cultivos de temporada forman parte del dia a dia.'
        },
        {
          title: 'Comunidad compartida',
          text: 'Vecinos colaboran en espacios comunes, comidas y mantenimiento de la aldea.'
        },
        {
          title: 'Turismo respetuoso',
          text: 'Grupos pequenos y estancias conscientes mantienen el lugar autentico.'
        }
      ]
    },
    visit: {
      title: 'Informacion de visita',
      intro: 'Planifica tu viaje y revisa datos practicos antes de venir.',
      facts: [
        { label: 'Region', value: 'Galicia rural' },
        { label: 'Ciudad mas cercana', value: 'Santiago de Compostela (ejemplo)' },
        { label: 'Temporada recomendada', value: 'Primavera a inicio de otono' },
        { label: 'Correo de contacto', value: 'hello@riomao-eco.local' }
      ]
    },
    availability: {
      title: 'Solicitud de disponibilidad',
      intro: 'Envia tus fechas preferidas y te responderemos con opciones.',
      notice:
        'Esto no es una reserva confirmada. Solo es una solicitud de disponibilidad. Los pagos aun no estan habilitados.',
      form: {
        name: 'Nombre completo',
        email: 'Correo electronico',
        checkIn: 'Llegada',
        checkOut: 'Salida',
        guests: 'Huespedes',
        notes: 'Notas',
        preferredLanguage: 'Idioma preferido',
        submit: 'Enviar solicitud'
      },
      errors: {
        required: 'Este campo es obligatorio.',
        email: 'Introduce un correo valido.',
        minGuests: 'Se requiere al menos 1 huesped.',
        maxGuests: 'Maximo 8 huespedes en esta solicitud.',
        invalidDates: 'La fecha de salida debe ser posterior a la llegada.'
      },
      success: 'Tu solicitud fue enviada. Te contactaremos pronto.'
    },
    footer: {
      line1: 'RIAMOR. El Nuevo Riomao · Ourense',
      line2: 'Proyecto de rehabilitación y promoción habitacional.'
    },
    sections: {
      planoDirector: {
        title: 'Plan Director de Riomao y alrededores',
        intro: 'Estrategia de rehabilitación integrada para la aldea y el paisaje.',
        titleFull: 'Plan Director de Rehabilitación Integral de Riomao y Entorno (2009)',
        year: 2009,
        association: 'AVESSATOR',
        associationFull: 'Asociación de Vecinos Sociocultural Santo Tomé de Riomao',
        description:
          'Documento estratégico elaborado por la AVESSATOR en 2009 que define la rehabilitación integral de la aldea de Riomao y su entorno. Recoge el análisis general del patrimonio construido, el estado de las edificaciones y las intervenciones concretas propuestas para la recuperación habitacional y paisajística del lugar.'
      },
      imaxes: {
        title: 'Imágenes del entorno paisajístico y forestal',
        intro: 'Un viaje visual a través de la belleza natural de la región.'
      },
      planosUrbanisticos: {
        title: 'Planos catastrales y urbanísticos',
        intro: 'Mapas detallados y documentos de planificación para Novo Riomao.',
        analysisLabel: 'Análisis general',
        interventionsLabel: 'Intervenciones concretas',
        overallLabel: 'Plano general',
        view: 'Ver',
        download: 'Descargar'
      },
      contornaForestal: {
        title: 'Entorno forestal',
        intro: 'El Gran Souto de Riomao abarca 50 ha y es monumento natural.',
        imageAlt: 'Valle boscoso y souto de castaños que rodean Riomao'
      },
      casasParcel: {
        title: 'Casas y parcelas en venta',
        intro: 'Descubre propiedades disponibles en Novo Riomao.',
        samplePrice: 'Desde €150.000',
        emptyState: 'No hay propiedades disponibles actualmente.',
        cadastralRefLabel: 'Referencia catastral'
      },
      fichas: {
        title: 'Fichas de edificaciones',
        intro: 'Fichas individuales de cada edificación analizada en el Plan Director de 2009: estado actual, fotografías, nivel de intervención y presupuesto estimado.',
        languageNote: 'Los documentos están disponibles en su idioma original (castellano).',
        filterLabel: 'Filtrar por código',
        filterPlaceholder: 'p. ej. C01',
        noResults: 'Ninguna ficha coincide con ese código.',
        view: 'Ver',
        download: 'Descargar',
        viewFicha: 'Ver ficha',
        planLink: 'Consultar las fichas de edificaciones'
      }
    }
  },
  gl: {
    brand: 'RIAMOR. O NOVO RIOMAO',
    nav: {
      presentation: 'Presentación: Riamor e contorna',
      properties: 'Propiedades en venda',
      residential: 'Núcleo residencial da aldea',
      forestal: 'Contorna forestal: o Gran Souto de Riomao de 50 ha, monumento natural',
      archive: 'Arquivo: documentación gráfica e novas de prensa',
      gallery: 'Galería',
      memoria: 'Memoria do plan director de rehabilitación integral',
      imaxes: 'Imaxes',
      planos: 'Planos',
      fichas: 'Fichas',
      navigation: 'Navegación',
      menu: 'Menú',
      closeMenu: 'Pechar menú'
    },
    home: {
      title: 'RIAMOR. O NOVO RIOMAO.',
      intro:
        'Proxecto de promoción habitacional e ecosocial dunha vella aldea patrimonial de alta montaña na Veiga de Trevinca (Ourense).',
      coverImages: {
        valleyAlt: 'Val arborado que rodea Riomao',
        villageAlt: 'Casas tradicionais entre as árbores de Riomao'
      },
      primaryCta: 'Ver memoria',
      secondaryCta: 'Ver propiedades',
      highlights: [
        {
          title: 'Vida de aldea',
          text: 'Casas tradicionais, produto local e unha comunidade proxima.'
        },
        {
          title: 'Natureza primeiro',
          text: 'Sendeiros de rio, arbores nativas e turismo de baixo impacto.'
        },
        {
          title: 'Estadias futuras',
          text: 'A reserva de cuartos chegara despois. Polo de agora, envia unha solicitude simple.'
        }
      ]
    },
    gallery: {
      title: 'Galeria de fotos',
      intro: 'Unha primeira ollada a recunchos, paisaxes e momentos comunitarios.',
      assetHint:
        'Engade as fotos reais en public/images con estes nomes: village-main-street.jpg, village-terraces.jpg, village-river-path.jpg, village-night-fire.jpg.'
    },
    video: {
      title: 'Video da aldea',
      intro: 'Mira un clip curto para sentir a atmosfera de Riomao.',
      fileHint: 'Garda o video en public/videos/riomao-village.mp4.'
    },
    about: {
      title: 'Sobre a ecoaldea',
      intro:
        'Riomao combina tradicions locais co coidado ecoloxico. O convite e visitar con calma e conectar coa xente e o territorio.',
      pillars: [
        {
          title: 'Practicas rexenerativas',
          text: 'Compostaxe, coidado da auga e cultivos de tempada forman parte do dia a dia.'
        },
        {
          title: 'Comunidade compartida',
          text: 'A veciñanza colabora en espazos comúns, comidas e mantemento da aldea.'
        },
        {
          title: 'Turismo respectuoso',
          text: 'Grupos pequenos e estadias conscientes manteñen o lugar autentico.'
        }
      ]
    },
    visit: {
      title: 'Info da visita',
      intro: 'Planifica a viaxe e revisa datos practicos antes de vir.',
      facts: [
        { label: 'Rexion', value: 'Galiza' },
        { label: 'Cidade mais achegada', value: 'Santiago de Compostela (exemplo)' },
        { label: 'Tempada recomendada', value: 'Primavera ata comezos do outono' },
        { label: 'Correo de contacto', value: 'hello@riomao-eco.local' }
      ]
    },
    availability: {
      title: 'Solicitude de dispoñibilidade',
      intro: 'Envia as datas preferidas e responderemos con opcions.',
      notice:
        'Isto non é unha reserva confirmada. É so unha solicitude de dispoñibilidade.',
      form: {
        name: 'Nome completo',
        email: 'Correo electronico',
        checkIn: 'Entrada',
        checkOut: 'Saida',
        guests: 'Hospedes',
        notes: 'Notas',
        preferredLanguage: 'Lingua preferida',
        submit: 'Enviar solicitude'
      },
      errors: {
        required: 'Este campo e obrigatorio.',
        email: 'Introduce un correo valido.',
        minGuests: 'Requirese polo menos 1 hospede.',
        maxGuests: 'Maximo 8 hospedes nesta solicitude.',
        invalidDates: 'A data de saida debe ser posterior a entrada.'
      },
      success: 'A solicitude foi enviada. Contactaremos contigo axiña.'
    },
    footer: {
      line1: 'RIAMOR. O NOVO RIOMAO · Ourense',
      line2: 'Proxecto de rehabilitación e promoción habitacional.'
    },
    sections: {
      planoDirector: {
        title: 'Plano-Director de Riomao e contorna',
        intro: 'Estratexia de rehabilitación integrada para a aldea e a paisaxe.',
        titleFull: 'Plan Director de Rehabilitación Integral de Riomao e Contorna (2009)',
        year: 2009,
        association: 'AVESSATOR',
        associationFull: 'Asociación de Veciños Sociocultural Santo Tomé de Riomao',
        description:
          'Documento estratéxico elaborado pola AVESSATOR en 2009 que define a rehabilitación integral da aldea de Riomao e a súa contorna. Recolle a análise xeral do patrimonio construído, o estado das edificacións e as intervencións concretas propostas para a recuperación habitacional e paisaxística do lugar.'
      },
      imaxes: {
        title: 'Imaxes da contorna paisaxística e ecoforestal',
        intro: 'Unha viaxe visual a través da beleza natural da rexión.'
      },
      planosUrbanisticos: {
        title: 'Planos catastrais e urbanísticos',
        intro: 'Mapas detallados e documentos de planificación para o Novo Riomao.',
        analysisLabel: 'Análise xeral',
        interventionsLabel: 'Intervencións concretas',
        overallLabel: 'Plano xeral',
        view: 'Ver',
        download: 'Descargar'
      },
      contornaForestal: {
        title: 'Contorna forestal',
        intro: 'O Gran Souto de Riomao abrangue 50 ha e é monumento natural.',
        imageAlt: 'Val arborado e souto de castiñeiros que rodean Riomao'
      },
      casasParcel: {
        title: 'Casas e parcelas en venda',
        intro: 'Descobre propiedades dispoñibles no Novo Riomao.',
        samplePrice: 'Desde €150.000',
        emptyState: 'Non hai propiedades dispoñibles actualmente.',
        cadastralRefLabel: 'Referencia catastral'
      },
      fichas: {
        title: 'Fichas das edificacións',
        intro: 'Fichas individuais de cada edificación analizada no Plano Director de 2009: estado actual, fotografías, nivel de intervención e orzamento estimado.',
        languageNote: 'Os documentos están dispoñibles na súa lingua orixinal (castelán).',
        filterLabel: 'Filtrar por código',
        filterPlaceholder: 'p. ex. C01',
        noResults: 'Ningunha ficha coincide con ese código.',
        view: 'Ver',
        download: 'Descargar',
        viewFicha: 'Ver ficha',
        planLink: 'Consultar as fichas das edificacións'
      }
    }
  },
  ca: {
    brand: 'RIAMOR. El Nou Riomao',
    nav: {
      presentation: 'Presentació: Riamor i entorn',
      properties: 'Propietats en venda',
      residential: 'Nucli residencial del poble',
      forestal: 'Entorn forestal: el Gran Souto de Riomao, 50 ha, monument natural',
      archive: 'Arxiu: documentació gràfica i notícies de premsa',
      gallery: 'Galeria',
      memoria: 'Memòria del pla director de rehabilitació integral',
      imaxes: 'Imatges',
      planos: 'Plànols',
      fichas: 'Fitxes',
      navigation: 'Navegació',
      menu: 'Menú',
      closeMenu: 'Tanca el menú'
    },
    home: {
      title: 'RIAMOR. El Nou Riomao.',
      intro:
        'Projecte de promoció habitacional i ecosocial d\'una vella aldea patrimonial d\'alta muntanya a la Veiga de Trevinca (Ourense).',
      coverImages: {
        valleyAlt: 'Vall boscosa que envolta Riomao',
        villageAlt: 'Cases tradicionals entre els arbres de Riomao'
      },
      primaryCta: 'Veure memòria',
      secondaryCta: 'Veure propietats',
      highlights: [
        {
          title: 'Vida de vila',
          text: 'Cases tradicionals, producte local i una comunitat proxima.'
        },
        {
          title: 'Natura primer',
          text: 'Camins de riu, arbres natius i turisme de baix impacte.'
        },
        {
          title: 'Estades futures',
          text: 'La reserva de habitacions arribarapmes tard. Per ara, envia una solicitud simple.'
        }
      ]
    },
    gallery: {
      title: 'Galeria de fotos',
      intro: 'Una primera mirada a racons, paisatges i moments comunitaris.',
      assetHint:
        'Afegeix les fotos reals a public/images amb aquests noms: village-main-street.jpg, village-terraces.jpg, village-river-path.jpg, village-night-fire.jpg.'
    },
    video: {
      title: 'Video de la vila',
      intro: 'Mira un clip curt per sentir l\'atmosfera de Riomao.',
      fileHint: 'Guarda el video a public/videos/riomao-village.mp4.'
    },
    about: {
      title: 'Sobre la ecoaldea',
      intro:
        'Riomao combina tradicions locals amb cura ecologica. L\'invitacio es visitar amb calma i connectar amb la gent i el territori.',
      pillars: [
        {
          title: 'Practicas regeneratives',
          text: 'Compostatge, cura de l\'aigua i cultius de temporada formen part del dia a dia.'
        },
        {
          title: 'Comunitat compartida',
          text: 'Els veins col·laboren en espais comuns, menjars i manteniment de la vila.'
        },
        {
          title: 'Turisme respectuous',
          text: 'Grups petits i estades conscients mantenen el lloc autentic.'
        }
      ]
    },
    visit: {
      title: 'Info de visita',
      intro: 'Planifica el viatge i revisa detalls practics abans de venir.',
      facts: [
        { label: 'Regio', value: 'Galicia rural, Espanya' },
        { label: 'Ciutat mes propera', value: 'Santiago de Compostel·la (exemple)' },
        { label: 'Temporada recomanada', value: 'Primavera fins a comencament de tardor' },
        { label: 'Correu de contacte', value: 'hello@riomao-eco.local' }
      ]
    },
    availability: {
      title: 'Solicitud de disponibilitat',
      intro: 'Envia les dates preferides i respondrem amb opcions.',
      notice:
        'Aixo no es una reserva confirmada. Nomes es una solicitud de disponibilitat. Els pagaments encara no estan activats.',
      form: {
        name: 'Nom complet',
        email: 'Correu electronic',
        checkIn: 'Entrada',
        checkOut: 'Sortida',
        guests: 'Hostes',
        notes: 'Notes',
        preferredLanguage: 'Llengua preferida',
        submit: 'Enviar solicitud'
      },
      errors: {
        required: 'Aquest camp es obligatori.',
        email: 'Introdueix un correu valid.',
        minGuests: 'Es requereix almenys 1 hoste.',
        maxGuests: 'Maxim 8 hostes en aquesta solicitud.',
        invalidDates: 'La data de sortida ha de ser posterior a l\'entrada.'
      },
      success: 'La teva solicitud ha estat enviada. Ens posarem en contacte aviat.'
    },
    footer: {
      line1: 'RIAMOR. El Nou Riomao · Ourense',
      line2: 'Projecte de rehabilitació i promoció habitacional.'
    },
    sections: {
      planoDirector: {
        title: 'Plà Director de Riomao i entorn',
        intro: 'Estratègia de rehabilitació integrada pel poble i el paisatge.',
        titleFull: 'Pla Director de Rehabilitació Integral de Riomao i Entorn (2009)',
        year: 2009,
        association: 'AVESSATOR',
        associationFull: "Associació de Veïns Sociocultural Sant Tomàs de Riomao",
        description:
          "Document estratègic elaborat per l'AVESSATOR el 2009 que defineix la rehabilitació integral del poble de Riomao i el seu entorn. Recull l'anàlisi general del patrimoni construït, l'estat de les edificacions i les intervencions concretes proposades per a la recuperació habitacional i paisatgística del lloc."
      },
      imaxes: {
        title: 'Imatges del paisatge i l\'ecosistema forestal',
        intro: 'Un viatge visual a través de la bellesa natural de la regió.'
      },
      planosUrbanisticos: {
        title: 'Plans cadastrals i urbanístics',
        intro: 'Mapes detallats i documents de planificació per al Nou Riomao.',
        analysisLabel: 'Anàlisi general',
        interventionsLabel: 'Intervencions concretes',
        overallLabel: 'Plànol general',
        view: 'Veure',
        download: 'Descarregar'
      },
      contornaForestal: {
        title: 'Entorn forestal',
        intro: 'El Gran Souto de Riomao abasta 50 ha i és monument natural.',
        imageAlt: 'Vall boscosa i castanyer que envolten Riomao'
      },
      casasParcel: {
        title: 'Cases i parcel·les en venda',
        intro: 'Descobreix propietats disponibles al Nou Riomao.',
        samplePrice: 'A partir de €150.000',
        emptyState: 'Ara mateix no hi ha propietats disponibles.',
        cadastralRefLabel: 'Referència cadastral'
      },
      fichas: {
        title: 'Fitxes de les edificacions',
        intro: 'Fitxes individuals de cada edificació analitzada al Pla Director de 2009: estat actual, fotografies, nivell d\'intervenció i pressupost estimat.',
        languageNote: 'Els documents estan disponibles en la seva llengua original (castellà).',
        filterLabel: 'Filtra per codi',
        filterPlaceholder: 'p. ex. C01',
        noResults: 'Cap fitxa coincideix amb aquest codi.',
        view: 'Veure',
        download: 'Descarregar',
        viewFicha: 'Veure fitxa',
        planLink: 'Consulta les fitxes de les edificacions'
      }
    }
  },
  fr: {
    brand: 'RIAMOR. Le Nouveau Riomao',
    nav: {
      presentation: 'Présentation : Riamor et ses environs',
      properties: 'Propriétés à vendre',
      residential: 'Noyau résidentiel du village',
      forestal: 'Environnement forestier : le Gran Souto de Riomao, 50 ha, monument naturel',
      archive: 'Archives : documentation graphique et actualités de presse',
      gallery: 'Galerie',
      memoria: 'Mémoire du plan directeur de réhabilitation intégrale',
      imaxes: 'Images',
      planos: 'Plans',
      fichas: 'Fiches',
      navigation: 'Navigation',
      menu: 'Menu',
      closeMenu: 'Fermer le menu'
    },
    home: {
      title: 'RIAMOR. Le Nouveau Riomao.',
      intro:
        'Projet de promotion résidentielle et écosociale pour un vieux village patrimonial en haute montagne dans la vallée de Trevinca (Ourense).',
      coverImages: {
        valleyAlt: 'Vallée boisée autour de Riomao',
        villageAlt: 'Maisons traditionnelles parmi les arbres de Riomao'
      },
      primaryCta: 'Voir la mémoire',
      secondaryCta: 'Voir les propriétés',
      highlights: [
        {
          title: 'Vie villageoise',
          text: 'Maisons traditionnelles, produits locaux et une communaute soudee.'
        },
        {
          title: 'Nature d\'abord',
          text: 'Sentiers fluviaux, arbres natifs et experiences de tourisme a faible impact.'
        },
        {
          title: 'Sejours futurs',
          text: 'Les reservations de chambres viendront plus tard. Pour l\'instant, envoyez une simple demande de disponibilite.'
        }
      ]
    },
    gallery: {
      title: 'Galerie de photos',
      intro: 'Un premier apercu des coins du village, des paysages et des moments communautaires.',
      assetHint:
        'Ajoutez vos vraies photos a public/images en utilisant ces noms: village-main-street.jpg, village-terraces.jpg, village-river-path.jpg, village-night-fire.jpg.'
    },
    video: {
      title: 'Video du village',
      intro: 'Regardez un court clip pour sentir l\'atmosphere de Riomao.',
      fileHint: 'Placez votre fichier video a public/videos/riomao-village.mp4.'
    },
    about: {
      title: 'A propos de l\'ecovillage',
      intro:
        'Riomao combine les traditions locales avec le souci ecologique. Les visiteurs sont invites a ralentir et a se connecter avec les gens et le lieu.',
      pillars: [
        {
          title: 'Pratiques regeneratives',
          text: 'Le compostage, la conservation de l\'eau et la plantation saisonniere font partie de la vie quotidienne.'
        },
        {
          title: 'Communaute partagee',
          text: 'Les voisins collaborent dans les espaces communs, les repas et l\'entretien du village.'
        },
        {
          title: 'Tourisme respectueux',
          text: 'Les petits groupes et les sejours conscients maintiennent le village calme et authentique.'
        }
      ]
    },
    visit: {
      title: 'Infos de visite',
      intro: 'Planifiez votre voyage et obtenez les details pratiques avant votre arrivee.',
      facts: [
        { label: 'Region', value: 'Galice rurale, Espagne' },
        { label: 'Ville la plus proche', value: 'Santiago de Compostela (exemple)' },
        { label: 'Saison recommandee', value: 'Printemps au debut de l\'automne' },
        { label: 'Email de contact', value: 'hello@riomao-eco.local' }
      ]
    },
    availability: {
      title: 'Demande de disponibilite',
      intro: 'Envoyez vos dates preferees et nous vous repondrons avec les options.',
      notice:
        'Ce n\'est pas une reservation confirmee. C\'est seulement une demande de disponibilite. Les paiements ne sont pas encore actives.',
      form: {
        name: 'Nom complet',
        email: 'Email',
        checkIn: 'Arrivee',
        checkOut: 'Depart',
        guests: 'Nombre de personnes',
        notes: 'Notes',
        preferredLanguage: 'Langue preferee',
        submit: 'Envoyer la demande'
      },
      errors: {
        required: 'Ce champ est requis.',
        email: 'Veuillez entrer une adresse email valide.',
        minGuests: 'Au moins 1 personne est requise.',
        maxGuests: 'Maximum 8 personnes par demande.',
        invalidDates: 'La date de depart doit etre posterieure a la date d\'arrivee.'
      },
      success: 'Votre demande a ete envoyee. Nous vous contacterons bientot.'
    },
    footer: {
      line1: 'RIAMOR. Le Nouveau Riomao · Ourense',
      line2: 'Projet de réhabilitation et promotion résidentielle.'
    },
    sections: {
      planoDirector: {
        title: 'Plan Directeur de Riomao et environs',
        intro: 'Stratégie de réhabilitation intégrée pour le village et le paysage.',
        titleFull: 'Plan Directeur de Réhabilitation Intégrale de Riomao et Environs (2009)',
        year: 2009,
        association: 'AVESSATOR',
        associationFull: 'Association des Riverains Socioculturels de Saint-Thomas de Riomao',
        description:
          "Document stratégique élaboré par l'AVESSATOR en 2009 définissant la réhabilitation intégrale du village de Riomao et de ses environs. Il comprend l'analyse générale du patrimoine bâti, l'état des bâtiments et les interventions concrètes proposées pour la réhabilitation résidentielle et paysagère du lieu."
      },
      imaxes: {
        title: 'Images du paysage et de l\'écosystème forestier',
        intro: 'Un voyage visuel à travers la beauté naturelle de la région.'
      },
      planosUrbanisticos: {
        title: 'Plans cadastraux et urbanistiques',
        intro: 'Cartes détaillées et documents de planification pour le Nouveau Riomao.',
        analysisLabel: 'Analyse générale',
        interventionsLabel: 'Interventions concrètes',
        overallLabel: 'Plan général',
        view: 'Voir',
        download: 'Télécharger'
      },
      contornaForestal: {
        title: 'Environnement forestier',
        intro: 'Le Gran Souto de Riomao couvre 50 ha et est un monument naturel.',
        imageAlt: 'Vallée boisée et châtaigneraie autour de Riomao'
      },
      casasParcel: {
        title: 'Maisons et parcelles à vendre',
        intro: 'Découvrez les propriétés disponibles au Nouveau Riomao.',
        samplePrice: 'À partir de 150 000 €',
        emptyState: "Aucune propriété n'est actuellement disponible.",
        cadastralRefLabel: 'Référence cadastrale'
      },
      fichas: {
        title: 'Fiches des bâtiments',
        intro: 'Fiches individuelles de chaque bâtiment analysé dans le Plan Directeur de 2009 : état actuel, photographies, niveau d\'intervention et coût estimé.',
        languageNote: 'Les documents sont disponibles dans leur langue d\'origine (espagnol).',
        filterLabel: 'Filtrer par code',
        filterPlaceholder: 'ex. C01',
        noResults: 'Aucune fiche ne correspond à ce code.',
        view: 'Voir',
        download: 'Télécharger',
        viewFicha: 'Voir la fiche',
        planLink: 'Consulter les fiches des bâtiments'
      }
    }
  }
};
