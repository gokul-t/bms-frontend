import { Book } from '@/lib/redux/services';
import Link from 'next/link';

export default function Book({ book }: { book: Book }) {
    return <div id={book.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.name}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{book.author.firstName} {book.author.lastName}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{book.pageCount}</p>
        <Link href={`/books/${book.id}`}>go to</Link>
    </div>;
}