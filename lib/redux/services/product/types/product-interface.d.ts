import { IPagedList, PageSortParams } from '@/lib/types/paged-list-interface';

export type Size = "Large" | "Medium" | "Small";

export type IProduct = {
    id: number;
    createdAt: date;
    updatedAt: date;
    name: string;
    quantity: number;
    size: Size;
};

export type ProductPagedList = IPagedList<IProduct>

export interface ProductListParams extends PageSortParams  {
    name?: string;
    quantity?: number;
    size?: Size;
}
