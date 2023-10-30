'use client'

import Book from '@/app/components/Book'
import DisplayError from '@/app/components/DisplayError'
import { useGetBookQuery } from '@/lib/redux/services/book/api'

export default function BookPage({
    params: { id },
}: {
    params: { id: string }
}) {

    const result = useGetBookQuery(id, {});
    const { isLoading, error, data: book } = result;
    
    if (isLoading) {
        return <div>Loading</div>
    }

    if (!book) {
        return <div>No book :(</div>
    }

    if (error) {
        return <DisplayError error={error} />
    }
    return <Book book={book} />
}
