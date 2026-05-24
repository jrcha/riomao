import { Locale } from './i18n.service';

export interface SiteCopy {
  brand: string;
  nav: {
    home: string;
    gallery: string;
    planoDirector: string;
    imaxes: string;
    planosUrban: string;
    casasParcel: string;
  };
  home: {
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: Array<{ title: string; text: string }>;
  };
  sections: {
    planoDirector: { title: string; intro: string };
    imaxes: { title: string; intro: string };
    planosUrbanisticos: { title: string; intro: string };
    casasParcel: { title: string; intro: string; samplePrice: string };
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

export const SITE_COPY: Record<Locale, SiteCopy> = {
  en: {
    brand: 'RIAMOR. O NOVO RIOMAO',
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      planoDirector: 'Master Plan',
      imaxes: 'Images',
      planosUrban: 'Urban Plans',
      casasParcel: 'Properties'
    },
    home: {
      title: 'RIAMOR. The New Riomao.',
      intro:
        'Housing and ecosocial promotion project for an old heritage village at high altitude in the Trevinca valley (Ourense).',
      primaryCta: 'Explore Gallery',
      secondaryCta: 'Request Availability',
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
        intro: 'Integrated rehabilitation strategy for the village and landscape.'
      },
      imaxes: {
        title: 'Landscape and Forest Images',
        intro: 'A visual journey through the natural beauty of the region.'
      },
      planosUrbanisticos: {
        title: 'Cadastral and Urban Plans',
        intro: 'Detailed maps and planning documents for Novo Riomao.'
      },
      casasParcel: {
        title: 'Homes and Plots for Sale',
        intro: 'Discover available properties in Novo Riomao.',
        samplePrice: 'Starting from €150,000'
      }
    }
  },
  es: {
    brand: 'RIAMOR. O NOVO RIOMAO',
    nav: {
      home: 'Inicio',
      gallery: 'Galeria',
      planoDirector: 'Plan Director',
      imaxes: 'Imágenes',
      planosUrban: 'Planos Urbanos',
      casasParcel: 'Propiedades'
    },
    home: {
      title: 'RIAMOR. El Nuevo Riomao.',
      intro:
        'Proyecto de promoción habitacional y ecosocial de una vieja aldea patrimonial de alta montaña en la Veiga de Trevinca (Ourense).',
      primaryCta: 'Ver galeria',
      secondaryCta: 'Solicitar disponibilidad',
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
        intro: 'Estrategia de rehabilitación integrada para la aldea y el paisaje.'
      },
      imaxes: {
        title: 'Imágenes del entorno paisajístico y forestal',
        intro: 'Un viaje visual a través de la belleza natural de la región.'
      },
      planosUrbanisticos: {
        title: 'Planos catastrales y urbanísticos',
        intro: 'Mapas detallados y documentos de planificación para Novo Riomao.'
      },
      casasParcel: {
        title: 'Casas y parcelas en venta',
        intro: 'Descubre propiedades disponibles en Novo Riomao.',
        samplePrice: 'Desde €150.000'
      }
    }
  },
  gl: {
    brand: 'RIAMOR. O NOVO RIOMAO',
    nav: {
      home: 'Inicio',
      gallery: 'Galeria',
      planoDirector: 'Plano-Director',
      imaxes: 'Imaxes',
      planosUrban: 'Planos Urbanísticos',
      casasParcel: 'Propiedades'
    },
    home: {
      title: 'RIAMOR. O NOVO RIOMAO.',
      intro:
        'Proxecto de promoción habitacional e ecosocial dunha vella aldea patrimonial de alta montaña na Veiga de Trevinca (Ourense).',
      primaryCta: 'Ver galeria',
      secondaryCta: 'Solicitar dispoñibilidade',
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
        intro: 'Estratexia de rehabilitación integrada para a aldea e a paisaxe.'
      },
      imaxes: {
        title: 'Imaxes da contorna paisaxística e ecoforestal',
        intro: 'Unha viaxe visual a través da beleza natural da rexión.'
      },
      planosUrbanisticos: {
        title: 'Planos catastrais e urbanísticos',
        intro: 'Mapas detallados e documentos de planificación para o Novo Riomao.'
      },
      casasParcel: {
        title: 'Casas e parcelas en venda',
        intro: 'Descobre propiedades dispoñibles no Novo Riomao.',
        samplePrice: 'Desde €150.000'
      }
    }
  },
  ca: {
    brand: 'RIAMOR. El Nou Riomao',
    nav: {
      home: 'Inici',
      gallery: 'Galeria',
      planoDirector: 'Plà Director',
      imaxes: 'Imatges',
      planosUrban: 'Plans Urbans',
      casasParcel: 'Propietats'
    },
    home: {
      title: 'RIAMOR. El Nou Riomao.',
      intro:
        'Projecte de promoció habitacional i ecosocial d\'una vella aldea patrimonial d\'alta muntanya a la Veiga de Trevinca (Ourense).',
      primaryCta: 'Veure galeria',
      secondaryCta: 'Solicitar disponibilitat',
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
        intro: 'Estratègia de rehabilitació integrada pel poble i el paisatge.'
      },
      imaxes: {
        title: 'Imatges del paisatge i l\'ecosistema forestal',
        intro: 'Un viatge visual a través de la bellesa natural de la regió.'
      },
      planosUrbanisticos: {
        title: 'Plans cadastrals i urbanístics',
        intro: 'Mapes detallats i documents de planificació per al Nou Riomao.'
      },
      casasParcel: {
        title: 'Cases i parcel·les en venda',
        intro: 'Descobreix propietats disponibles al Nou Riomao.',
        samplePrice: 'A partir de €150.000'
      }
    }
  },
  fr: {
    brand: 'RIAMOR. Le Nouveau Riomao',
    nav: {
      home: 'Accueil',
      gallery: 'Galerie',
      planoDirector: 'Plan Directeur',
      imaxes: 'Images',
      planosUrban: 'Plans Urbains',
      casasParcel: 'Propriétés'
    },
    home: {
      title: 'RIAMOR. Le Nouveau Riomao.',
      intro:
        'Projet de promotion résidentielle et écosociale pour un vieux village patrimonial en haute montagne dans la vallée de Trevinca (Ourense).',
      primaryCta: 'Voir la galerie',
      secondaryCta: 'Demander la disponibilite',
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
        intro: 'Stratégie de réhabilitation intégrée pour le village et le paysage.'
      },
      imaxes: {
        title: 'Images du paysage et de l\'écosystème forestier',
        intro: 'Un voyage visuel à travers la beauté naturelle de la région.'
      },
      planosUrbanisticos: {
        title: 'Plans cadastraux et urbanistiques',
        intro: 'Cartes détaillées et documents de planification pour le Nouveau Riomao.'
      },
      casasParcel: {
        title: 'Maisons et parcelles à vendre',
        intro: 'Découvrez les propriétés disponibles au Nouveau Riomao.',
        samplePrice: 'À partir de 150 000 €'
      }
    }
  }
};
