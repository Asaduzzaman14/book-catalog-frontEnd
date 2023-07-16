import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import book from '../assets/books/shop-11.jpg'
import Book from '../components/ui/Book';

interface IBook {
    _id: number
    title: string
    author: string
    genre: string
    publicationDate: string
    img: string

}

const AllBooks = () => {



    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(data => data.json())
            .then(data => setBooks(data))
    }, [])



    return (
        <div>
            <h2 className='text-2xl text-black text-center mt-5 font-bold'>All Books</h2>

            <div className='grid justify-center mt-2'>
                <div className="join  text-center">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search..." />
                        </div>
                        <div className='text-center mt-5'>
                            <Link to="/add-new-book">
                                <button className=" btn btn-success">Add NEW BOOK</button>

                                {/* <button className="btn px-7 py-2 btn-outline btn-success"></button> */}
                            </Link>
                        </div>
                    </div>

                    <div className="indicator">
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
            </div>
            <div className=' p-10 grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-10'>

                {
                    books?.map((book: IBook) => (
                        <Book book={book} />
                    ))
                }
            </div>

            <div className='text-center mt-5'>
                <Link to="/add-new-book">
                    <button className="btn px-7 py-2 btn-outline btn-success">Add NEW BOOK</button>
                </Link>
            </div>
        </div>
    );
};

export default AllBooks;