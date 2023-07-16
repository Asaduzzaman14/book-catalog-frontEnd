import React, { useEffect, useState } from 'react';
import Book from './Book';
import { IBook } from '../../types/globalTypes';



const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(data => data.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books);

    return (
        <>
            <div>
                <h2 className='text-2xl text-center mt-5 font-bold'>Books</h2>
            </div>
            <div className=' p-10 grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-10'>
                {
                    books?.map((book: IBook) => (
                        <Book book={book} />
                    ))
                }
            </div>
        </>
    );
};



export default Books;