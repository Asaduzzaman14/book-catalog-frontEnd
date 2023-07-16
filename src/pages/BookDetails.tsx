import React from 'react';
import bookImg from '../assets/books/printpress-product-7.jpg'
const BookDetails = () => {


    return (
        <div className='px-10 mt-5'>
            <h2 className="text-2xl py-2 text font-bold text-center">BOOK DETAILS</h2>

            <div>
                <div className="w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                        <img src={bookImg} alt="" />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">

                            <div className="text-gray-900 font-bold text-xl mb-2">15 Rivers In Norway</div>
                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;