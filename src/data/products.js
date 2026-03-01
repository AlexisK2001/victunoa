export const products = [
    {
        id: 'biosal-autoconsumo',
        name: 'Biosal Autoconsumo',
        slug: 'biosal-autoconsumo',
        category: 'cria',
        subtitle: 'Autoconsumo',
        image: '/images/biosala.png',
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
                title: 'Fácil Implementación',
                description: 'Sistema de bateas de acceso fácil para el ganado a campo.',
                icon: '/icons/palatalabilidad.PNG'
            },
            {
                title: 'Aporte Mineral Completo',
                description: 'Macrominerales esenciales para salud y producción óptima.',
                icon: '/icons/aporteMineralCompleto.PNG'
            },
            {
                title: 'Palatabilidad',
                description: 'Palatabilizantes naturales aseguran buen consumo voluntario.',
                icon: '/icons/facilImplementacion_1.PNG'
            }
        ]
    },
    {
        id: 'biosal-max',
        name: 'Biosal Max',
        slug: 'biosal-max',
        category: 'recria',
        subtitle: 'Autoconsumo',
        image: '/images/biosalmax.png',
        description: 'Biosal Max es el suplemento premium para sistemas de engorde intensivo, diseñado para maximizar la eficiencia de conversión y acelerar la terminación en feedlot.',
        specs: {
            composition: [
                'Bioenzymix ultra concentrado',
                'Proteína de alta digestibilidad',
                'Lípidos protegidos',
                'Minerales quelatados'
            ],
            application: [
                'Feedlot intensivo',
                'Terminación rápida',
                'Alta carga',
                'Dietas energéticas'
            ],
            usage: [
                'Mezclado en TMR',
                'Dosificación precisa',
                'Monitoreo continuo'
            ]
        },
        benefits: [
            {
                title: 'Conversión Óptima',
                description: 'Mejor conversión alimenticia del mercado.',
                icon: '/icons/conversion optima.PNG'
            },
            {
                title: 'Terminación Rápida',
                description: 'Reduce el tiempo a faena significativamente.',
                icon: '/icons/terminacionRapida.PNG'
            },
            {
                title: 'Marmoleo Mejorado',
                description: 'Mejora la calidad de la carne producida.',
                icon: '/icons/marmoleoMejorado.PNG'
            }
        ]
    },
    {
        id: 'biosal-mix',
        name: 'Biosal Mix',
        slug: 'biosal-mix',
        category: 'engorde',
        subtitle: 'Mezclas',
        image: '/images/biosalmix.png',
        description: 'Biosal Mix es un suplemento balanceado diseñado para optimizar la recría, mejorando la conversión alimenticia y el desarrollo corporal en esta etapa crítica.',
        specs: {
            composition: [
                'Bioenzymix avanzado',
                'Mezcla de macrominerales',
                'Vitaminas A, D, E',
                'Oligoelementos'
            ],
            application: [
                'Recría intensiva',
                'Desarrollo corporal',
                'Mejora de conversión',
                'Pastoreo y suplementación'
            ],
            usage: [
                'Mezcla con alimento',
                'Dosificación controlada',
                'Monitoreo de consumo'
            ]
        },
        benefits: [
            {
                title: 'Conversión Mejorada',
                description: 'Optimiza la conversión alimenticia en etapa de recría.',
                icon: '/icons/conversionMejorada.PNG'
            },
            {
                title: 'Desarrollo Corporal',
                description: 'Favorece el desarrollo muscular y esquelético.',
                icon: '/icons/desarrolloCorporal.PNG'
            },
            {
                title: 'Salud Metabólica',
                description: 'Mejora la salud ruminal y metabólica general.',
                icon: '/icons/saludMetabolica.PNG'
            }
        ]
    },
    {
        id: 'rbr',
        name: 'Regulador Biológico Ruminal',
        slug: 'rbr',
        category: 'tambo',
        subtitle: 'Regulador Biológico Ruminal',
        image: '/images/rbr.png',
        description: 'RBR es el suplemento de referencia para engorde bovino, combinando bionutrición y balance mineral para resultados consistentes en feedlot.',
        specs: {
            composition: [
                'Bioenzymix balanceado',
                'Sales minerales',
                'Vitaminas liposolubles',
                'Aditivos zootécnicos'
            ],
            application: [
                'Feedlot tradicional',
                'Engorde a corral',
                'Sistemas mixtos',
                'Complemento pastoril'
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
                icon: '/icons/resultadoConsistente.PNG'
            },
            {
                title: 'Adaptación Ruminal',
                description: 'Favorece adaptación a dietas de alta energía.',
                icon: '/icons/adaptacionRuminal.PNG'
            },
            {
                title: 'Relación Costo-Beneficio',
                description: 'Excelente balance entre inversión y retorno.',
                icon: '/icons/relacionCosto-Beneficio.PNG'
            }
        ]
    },
    {
        id: 'afi',
        name: 'AFI',
        slug: 'afi',
        category: 'tambo',
        subtitle: 'Activador Flora Intestinal',
        image: '/images/afi.png',
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
                icon: '/icons/mayorProduccion.PNG'
            },
            {
                title: 'Calidad de Leche',
                description: 'Mejora sólidos totales y componentes.',
                icon: '/icons/calidadDeLeche.PNG'
            },
            {
                title: 'Salud Reproductiva',
                description: 'Favorece la fertilidad y estado corporal.',
                icon: '/icons/saludReproductiva.PNG'
            }
        ]
    }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
