import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { gql } from 'graphql-request'
import { HYDRATE } from 'next-redux-wrapper'

export type Book = {
    id: string
    name: string
    pageCount: number
    author: Author
}

export type Author = {
    id: number
    firstName: string
    lastName: string
}

export interface BooksResponse {
    books: Book[]
}

interface BookResponse {
    book: Book
}

const url = 'http://localhost:8080/graphql'

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: graphqlRequestBaseQuery({
        url
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
          return action.payload[reducerPath]
        }
      },
    endpoints: (builder) => ({
        getBooks: builder.query<
            Book[],
            {}
        >({
            query: () => ({
                document: gql`
                        query GetBooks {
                         books {
                            id
                            name
                            pageCount
                            author {
                                id
                                firstName
                                lastName
                            }
                        }
                    }
                `,
                variables: {},
            }),
            transformResponse: (response: BooksResponse) => response.books,
        }),
        getBook: builder.query<Book, string>({
            query: (id) => ({
                document: gql`
                        query GetBook($id: ID) {
                            book : bookById(id: $id) {
                                id
                                name
                                pageCount
                                author {
                                    id
                                    firstName
                                    lastName
                                }
                            }
                        }
                `,
                variables: { id },
            }),
            transformResponse: (response: BookResponse) => response.book,
        }),
    }),
})

export const { useGetBooksQuery, useGetBookQuery } = bookApi
