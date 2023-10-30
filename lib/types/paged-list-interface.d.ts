export type Sort = { empty: Boolean, sorted: Boolean, unsorted: Boolean }

export interface PageSortParams {
    pageSize?: number,
    pageNumber?: number,
    sortBy?: string,
    sortDirection?: 'ASC' | 'DESC'
}

export interface IPagedList<Type> {
    content: [Type];
    number: number;
    size: number;
    totalElements: number;
    pageable: {
        pageNumber: number;
        pageSize: number;
        sort: Sort;
        offset: number;
        unpaged: Boolean;
        paged: Boolean;
    };
    last: Boolean;
    totalPages: number;
    sort: Sort;
    first: Boolean;
    numberOfElements: number;
    empty: Boolean;
}
