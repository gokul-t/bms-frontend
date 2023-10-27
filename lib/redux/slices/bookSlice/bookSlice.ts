/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: BookSliceState = {
    books: [],
    status: 'idle'
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

    }
})

export type Book = {
    id: number
    name: string
    pageCount: number
    author: Author
}

export type Author = {
    id: number
    firstName: string
    lastName: string
}

export interface BookSliceState {
    books: Book[]
    status: 'idle' | 'loading' | 'failed'
}