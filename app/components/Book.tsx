import { Book } from '@/lib/redux/services'
import Link from 'next/link'

export default function Book({ book }: { book: Book }) {
    return <div>
        <div>{book.id}</div>
        <div>{JSON.stringify(book, null, 4)}</div>
        <Link href={`/books/${book.id}`}>go to</Link>
    </div>
}