import criaIcon from '../assets/icons/cria.svg?raw';
import recriaIcon from '../assets/icons/recria.svg?raw';
import engordeIcon from '../assets/icons/engorde.svg?raw';
import tamboIcon from '../assets/icons/tambo.svg?raw';


export const categories = [
    {
        id: 'cria',
        name: 'Cría',
        slug: 'cria',
        description: 'Productos especializados para optimizar la etapa de cría y desarrollo de terneros.',
        icon: criaIcon
    },
    {
        id: 'recria',
        name: 'Recría',
        slug: 'recria',
        description: 'Soluciones nutricionales para maximizar el crecimiento en la etapa de recría.',
        icon: recriaIcon
    },
    {
        id: 'engorde',
        name: 'Engorde',
        slug: 'engorde',
        description: 'Productos de alta performance para feedlot y sistemas de engorde intensivo.',
        icon: engordeIcon
    },
    {
        id: 'tambo',
        name: 'Tambo',
        slug: 'tambo',
        description: 'Bionutrición especializada para incrementar la producción de leche.',
        icon: tamboIcon
    }
];
