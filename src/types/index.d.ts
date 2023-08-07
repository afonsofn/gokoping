export interface ProductInterface {
    name: string;
    longDescription: string;
    storeID: string;
    sizeCodes: any[];
    otherVariants: any[];
    attachments: any[];
    price: number;
}

export interface ProductColors {
    uniqueID: string;
    partNumber: string;
    color: string;
    fullImage: string;
    thumbnail: string;
    hexCode: string;
    available: boolean;
}

export interface ProductSizes {
    sequence: string;
    hexCode: string;
    value: string;
    uniqueID: string;
    unitID: string;
    unitOfMeasure: string;
    identifier: string;
    partNumberSize: string;
    skuUniqueId: string;
    buyable: string;
    onSale: boolean;
}

export interface ProductPayload {
    id: string;
    color: string;
    size: string;
    quantity: number;
    price: number;
}
