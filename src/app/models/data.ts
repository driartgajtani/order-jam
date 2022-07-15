import { Product } from "./product";

export interface Data {
    id: string;
    metadata: Metadata;
    record: Product[]
}


export interface Metadata {
    createdAt: string;
    name: string;
    readCountRemainingTime: string;
    timeToExpire: string;
}