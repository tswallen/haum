import { Property } from './property';

export const PROPERTIES: Property[] = [
    {
        id: 1234,
        name: 'Very nice house',

        price: 100000,

        location: 'Fes',
        tags: ['Close to Schools', 'Has pool', 'Balcony'],

        images: [
            {
                url: 'http://placehold.it/200x100',
                tags: ['Bathroom', 'Clean', 'White']
            },
            {
                url: 'http://placehold.it/200x100',
                tags: ['Living room', 'Lounges', 'Gas Outlet']
            }
        ]
    }
];
