import React from 'react';
import { useForm } from 'react-hook-form';
import { IBook } from '../types/globalTypes';

const AddNewBook = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IBook>();
    console.log(errors);


    const handelFormSubmit = (data: IBook) => {
        console.log(data)

    }



    return (
        <div>
            <h2 className='text-2xl text-black text-center mt-5 font-bold'>ADD NEW BOOK</h2>

            <form className='bg-base-300 border-black rounded-lg p-10'
                onSubmit={handleSubmit(handelFormSubmit)}>
                <div className='grid'>
                    <label className='text-2xl inline-block' htmlFor="title">Title</label>
                    <input
                        className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
                        type="text"
                        placeholder='book title'
                        autoCapitalize="none"
                        autoComplete="title"
                        autoCorrect="off"
                        {...register('title', { required: 'title is required' })}
                    />
                    <input
                        type="text"
                        className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
                        placeholder="author"
                        {...register('author', { required: 'title is required' })}
                    />
                    <input
                        type="text"
                        className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
                        placeholder="genre"
                        {...register('genre', { required: 'genre is required' })}
                    />
                    <input
                        type="text"
                        className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
                        placeholder="publicationDate"
                        {...register('publicationDate', { required: 'publication Date is required' })}
                    />
                    <p>{ }</p>
                </div>

                <div className='mt-8 mx-auto text-center'>
                    <button className=" btn btn-success">ADD NEW BOOK</button>
                </div>

            </form>

        </div>
    );
};

export default AddNewBook;