export const products = [
    {
        id: 'biosal-autoconsumo',
        name: 'Biosal Autoconsumo',
        slug: 'biosal-autoconsumo',
        category: 'cria',
        subtitle: 'Autoconsumo',
        image: '/images/biosala.webp',
        shortDescription: 'Suplemento nutricional formulado con Bioenzymix (núcleo enzimático) y enriquecido con macrominerales cruciales. Diseñado para bateas de acceso fácil como suplementación a campo.',
        features: [
            'Bioenzymix — núcleo enzimático de alta biodisponibilidad',
            'Macrominerales: Ca, P, Mg, Na, S + palatabilizantes naturales',
            'Urea (NNP) como fuente de nitrógeno no proteico',
            'Administración en batea — sin mano de obra adicional',
        ],
        description: 'Biosal Autoconsumo es un suplemento nutricional formulado con Bioenzymix (núcleo enzimático) y enriquecido con macrominerales cruciales (Ca, P, Mg, Na, S), palatabilizantes naturales, y Urea (NNP). Este producto está diseñado para ser utilizado en bateas de acceso fácil como suplementación a campo.',
        specs: {
            composition: [
                'Bioenzymix (núcleo enzimático)',
                'Macrominerales: Ca, P, Mg, Na, S',
                'Palatabilizantes naturales',
                'Urea (Nitrógeno No Proteico)'
            ],
            application: [
                'Suplementación a campo',
                'Bateas de acceso fácil',
                'Cría extensiva',
                'Pastoreo directo'
            ],
            usage: [
                'Colocación en bateas',
                'Consumo libre del ganado',
                'Aporte continuo de minerales'
            ]
        },
        benefits: [
            {
                title: 'Sin mano de obra',
                description: 'Suministro libre en batea, sin intervención diaria',
                icon: '/icons/facilImplementacion_1.webp'
            },
            {
                title: 'Bioenzymix activo',
                description: 'Núcleo enzimático para mayor digestión y absorción de nutrientes',
                icon: '/icons/aporteMineralCompleto.webp'
            },
            {
                title: 'Minerales esenciales',
                description: 'Ca, P, Mg, Na, S para hueso sano, crecimiento y desarrollo óptimo',
                icon: '/icons/aporteMineralCompleto.webp'
            },
            {
                title: 'Palatabilidad natural',
                description: 'Consumo voluntario consistente gracias a palatabilizantes naturales',
                icon: '/icons/palatalabilidad.webp'
            }
        ]
    },
    {
        id: 'biosal-max',
        name: 'Biosal Max',
        slug: 'biosal-max',
        category: 'recria',
        subtitle: 'Autoconsumo',
        image: '/images/biosalmax.webp',
        shortDescription: 'Suplemento premium para sistemas de recría, diseñado para maximizar la eficiencia de conversión y acelerar el desarrollo corporal.',
        features: [
            'Bioenzymix ultra concentrado para máxima digestibilidad',
            'Proteína de alta calidad para desarrollo muscular',
            'Minerales quelatados de alta biodisponibilidad',
            'Vitaminas A, D, E para salud integral del rodeo',
        ],
        description: 'Biosal Max es el suplemento premium para sistemas de recría bovina, diseñado para maximizar la eficiencia de conversión y acelerar el desarrollo corporal en esta etapa crítica.',
        specs: {
            composition: [
                'Bioenzymix ultra concentrado',
                'Proteína de alta digestibilidad',
                'Lípidos protegidos',
                'Minerales quelatados'
            ],
            application: [
                'Recría intensiva',
                'Desarrollo corporal',
                'Mejora de conversión',
                'Pastoreo y suplementación'
            ],
            usage: [
                'Mezclado en TMR',
                'Dosificación precisa',
                'Monitoreo continuo'
            ]
        },
        benefits: [
            {
                title: 'Conversión Mejorada',
                description: 'Optimiza la conversión alimenticia en etapa de recría.',
                icon: '/icons/conversionMejorada.webp'
            },
            {
                title: 'Desarrollo Corporal',
                description: 'Favorece el desarrollo muscular y esquelético.',
                icon: '/icons/desarrolloCorporal.webp'
            },
            {
                title: 'Salud Metabólica',
                description: 'Mejora la salud ruminal y metabólica general.',
                icon: '/icons/saludMetabolica.webp'
            }
        ]
    },
    {
        id: 'biosal-mix',
        name: 'Biosal Mix',
        slug: 'biosal-mix',
        category: 'engorde',
        subtitle: 'Premezclas',
        image: '/images/biosalmix.webp',
        shortDescription: 'Suplemento balanceado para optimizar el engorde, mejorando la conversión alimenticia y el desarrollo muscular en sistemas intensivos.',
        features: [
            'Bioenzymix avanzado para máxima eficiencia ruminal',
            'Mezcla balanceada de macrominerales',
            'Vitaminas A, D, E + oligoelementos',
            'Formulado para feedlot y engorde a corral',
        ],
        description: 'Biosal Mix es un suplemento balanceado diseñado para optimizar el engorde bovino, mejorando la conversión alimenticia y el rendimiento productivo en sistemas de feedlot y engorde a corral.',
        specs: {
            composition: [
                'Bioenzymix avanzado',
                'Mezcla de macrominerales',
                'Vitaminas A, D, E',
                'Oligoelementos'
            ],
            application: [
                'Feedlot intensivo',
                'Engorde a corral',
                'Terminación rápida',
                'Dietas energéticas'
            ],
            usage: [
                'Mezcla con alimento',
                'Dosificación controlada',
                'Monitoreo de consumo'
            ]
        },
        benefits: [
            {
                title: 'Conversión Óptima',
                description: 'Mejor conversión alimenticia para feedlot intensivo.',
                icon: '/icons/conversion optima.webp'
            },
            {
                title: 'Terminación Rápida',
                description: 'Reduce el tiempo a faena significativamente.',
                icon: '/icons/terminacionRapida.webp'
            },
            {
                title: 'Marmoleo Mejorado',
                description: 'Mejora la calidad de la carne producida.',
                icon: '/icons/marmoleoMejorado.webp'
            }
        ]
    },
    {
        id: 'rbr',
        name: 'Regulador Biológico Ruminal',
        slug: 'rbr',
        category: 'tambo',
        subtitle: 'Regulador Biológico Ruminal',
        image: '/images/rbr.webp',
        shortDescription: 'Suplemento de referencia para tambo bovino, combinando bionutrición y balance mineral para resultados consistentes en producción láctea.',
        features: [
            'Bioenzymix balanceado para microflora ruminal óptima',
            'Sales minerales para soporte metabólico en lactancia',
            'Vitaminas liposolubles para salud reproductiva',
            'Aditivos zootécnicos para performance productiva',
        ],
        description: 'RBR es el suplemento de referencia para tambo bovino, combinando bionutrición y balance mineral para resultados consistentes en producción láctea y salud reproductiva.',
        specs: {
            composition: [
                'Bioenzymix balanceado',
                'Sales minerales',
                'Vitaminas liposolubles',
                'Aditivos zootécnicos'
            ],
            application: [
                'Tambo comercial',
                'Vacas en lactancia',
                'Sistemas pastoriles',
                'Complemento forrajero'
            ],
            usage: [
                'Suplementación diaria',
                'Mezcla homogénea',
                'Control de consumo'
            ]
        },
        benefits: [
            {
                title: 'Resultados Consistentes',
                description: 'Performance predecible y replicable.',
                icon: '/icons/resultadoConsistente.webp'
            },
            {
                title: 'Adaptación Ruminal',
                description: 'Favorece adaptación a dietas de alta energía.',
                icon: '/icons/adaptacionRuminal.webp'
            },
            {
                title: 'Relación Costo-Beneficio',
                description: 'Excelente balance entre inversión y retorno.',
                icon: '/icons/relacionCosto-Beneficio.webp'
            }
        ]
    },
    {
        id: 'afi',
        name: 'AFI',
        slug: 'afi',
        category: 'tambo',
        subtitle: 'Activador Flora Intestinal',
        image: '/images/afi.webp',
        shortDescription: 'Alimento funcional integral para vacas lecheras, optimizando la producción de leche, la calidad de sólidos y la salud del rodeo.',
        features: [
            'Bioenzymix para tambo con perfil enzimático específico',
            'Proteína bypass de alta calidad para producción láctea',
            'Precursores de grasa láctea para mayor tenor graso',
            'Minerales y vitaminas específicos para vacas en lactancia',
        ],
        description: 'AFI es un alimento funcional integral diseñado específicamente para vacas lecheras, optimizando la producción de leche y la salud del rodeo.',
        specs: {
            composition: [
                'Bioenzymix para tambo',
                'Proteína bypass de calidad',
                'Precursores de grasa láctea',
                'Minerales para producción'
            ],
            application: [
                'Tambo comercial',
                'Alta producción',
                'Vacas en lactancia',
                'Complemento forrajero'
            ],
            usage: [
                'Suministro en comedero',
                'Dosificación por producción',
                'Ajuste según calidad de leche'
            ]
        },
        benefits: [
            {
                title: 'Mayor Producción',
                description: 'Incrementa litros de leche por vaca por día.',
                icon: '/icons/mayorProduccion.webp'
            },
            {
                title: 'Calidad de Leche',
                description: 'Mejora sólidos totales y componentes.',
                icon: '/icons/calidadDeLeche.webp'
            },
            {
                title: 'Salud Reproductiva',
                description: 'Favorece la fertilidad y estado corporal.',
                icon: '/icons/saludReproductiva.webp'
            }
        ]
    }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
