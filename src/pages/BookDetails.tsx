import { useParams } from 'react-router-dom';
import bookImg from '../assets/books/printpress-product-7.jpg'
import { useGetSingleBookQuery, useUpdateBookMutation } from '../redux/features/book/bookApi';
import { useForm } from 'react-hook-form';
import { IBook } from '../types/globalTypes';
import { toast } from 'react-toastify';
const BookDetails = () => {
    const params = useParams();

    const id = params.id
    const { data, isLoading, error } = useGetSingleBookQuery(id)
    const [updateBook, { isError, isSuccess }] = useUpdateBookMutation()

    console.log(data);
    console.log(isError);
    console.log(isSuccess);



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IBook>();

    console.log(errors);

    const handelFormSubmit = (data: IBook) => {
        console.log(data)
        const options = {
            data: data
        }

        updateBook(options)
        toast("Updated success");
    }


    return (
        <>
            <div>
                {/* The button to open modal */}
                {/* <label htmlFor="my_modal_7" className="btn">open modal</label> */}

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">UPDATE BOOK</h3>


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
                                <input
                                    type="text"
                                    className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
                                    placeholder="img"
                                    {...register('img', { required: 'image link is required' })}
                                />
                                <p>{ }</p>
                            </div>

                            <div className='mt-8 mx-auto text-center'>
                                <button>
                                    <label typeof='onSubmit' className="modal-backdrop btn btn-success text-black" htmlFor="my_modal_7">UPDATE BOOK</label>
                                </button>
                            </div>
                            {/* <div className='mt-8 mx-auto text-center'>
                                <button className=" btn btn-success">ADD NEW BOOK</button>
                            </div> */}

                        </form>
                    </div>


                </div>
            </div>

            <div className='px-10 my-5'>
                <h2 className="text-2xl py-2 text font-bold text-center">BOOK DETAILS</h2>

                <div className='mx-auto grid justify-center'>


                    <div className="lg:flex  border-2 rounded-lg">

                        <div className="h-96 p-5 mx-auto ">
                            <img className='h-full rounded-md w-full' src={data?.data?.img} alt="" />
                        </div>

                        <div className=" border-gray-400 lg:border-l-0  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between ">
                            <div className="mb-3">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{data?.data?.title}</h2>
                                <h3 className="text-gray-700 font-semibold text-xl mb-2">{data?.data?.author}</h3>
                                <h4 className="text-gray-700 font-semibold text-xl mb-2">{data?.data?.publicationDate}</h4>
                            </div>
                            <div className='flex gap-5'>
                                <button className=" btn btn-error">Delete </button>
                                <label htmlFor="my_modal_7" className="btn btn-success">Edit Book</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetails;