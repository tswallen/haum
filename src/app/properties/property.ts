export class Property {
    id: number;
    name: string;

    price: number;

    location: any;
    tags: string[];

    images: Image[];
}

export class Image {
    url: string;
    tags: string[];
}
