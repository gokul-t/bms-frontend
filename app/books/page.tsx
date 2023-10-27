'use client'

import { useGetBooksQuery } from '@/lib/redux/services/bookApi';
import Book from '../components/Book';


export default function BooksPage() {
    
    const result = useGetBooksQuery({}, {});
    const { isLoading, error, data } = result;

    if (isLoading) {
        return <div>Loading</div>
    }

    if (!data) {
        return <div>No books :(</div>
    }

    if (error) {
        return <DisplayError error={error} />
    }

    return <div> {
        data?.map(book => <Book key={book.id} book={book} />)
    } </div>;
}

