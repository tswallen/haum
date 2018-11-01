export class Property {
    id: number;
    name: string;

    price: number;

    location: any;

    bathrooms: 0 | 1 | 2 | 3 | 4 | 5;
    bedrooms: 0 | 1 | 2 | 3 | 4 | 5;
    parking: 0 | 1 | 2 | 3 | 4 | 5;

    tags: string[];

    images: Image[];
}

export class Image {
    url: string;
    tags: string[];
}
