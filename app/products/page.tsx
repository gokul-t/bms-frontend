'use client'

import { IconButton } from '@/app/components/Button';
import DisplayError from '@/app/components/DisplayError';
import { useListProductsQuery } from '@/lib/redux/services/product/api';
import { useState } from 'react';
import Product from './Product';
import { ProductListParams } from '@/lib/redux/services/product/types/product-interface';

export default function Products() {
    const [page, setPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(6);

    const result = useListProductsQuery({
        pageNumber: page,
        pageSize
    } as ProductListParams);
    const { isLoading, error, data } = result;

    if (isLoading) {
        return <div>Loading</div>
    }

    if (!data?.content) {
        return <div>No products :(</div>
    }

    if (error) {
        return <DisplayError error={error} />
    }

    return (<article className='container mx-auto'>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data?.content.map(product => (
                <div key={product.id.toString()} className="h-auto max-w-full rounded-lg">
                    <Product product={product} />
                </div>))}
        </div>
        <div className='float-right'>
            <label htmlFor="pageSize" className="pull-right block mb-2 text-sm font-medium text-gray-900 dark:text-white">Page size</label>
            <input type="number" id="pageSize" value={pageSize} min={0} max={12} onChange={ev => setPageSize(parseInt(ev.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div className="p-2">
            <IconButton onClick={() => setPage(page - 1)} disabled={isLoading || (page == 0)} icon={'left-arrow'} iconDescription={'Previous'}>
                Previous
            </IconButton>
            <IconButton onClick={() => setPage(page + 1)} disabled={isLoading || (page >= (data?.totalPages - 1))} icon={'right-arrow'} iconDescription={'Next'}>
                Next
            </IconButton>
        </div>
    </article>);
}