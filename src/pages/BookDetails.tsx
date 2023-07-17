import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDeleteBookMutation, useGetSingleBookQuery, usePostBookMutation, usePostReviewMutation, useUpdateBookMutation } from '../redux/features/book/bookApi';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector } from '../redux/hooks';

const BookDetails = () => {
    const params = useParams();
    const id = params.id
    const navigate = useNavigate()
    const { data, isLoading } = useGetSingleBookQuery(id)
    const user = useAppSelector(state => state.user.user)

    // console.log(data);


    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [publicationDate, setPublicationDate] = useState('')
    const [img, setImg] = useState('')

    const [updateBook, { isSuccess }] = useUpdateBookMutation()

    const [deleteBook, { isSuccess: deleteSucces }] = useDeleteBookMutation()
    const [postReview, { isSuccess: postSucces }] = usePostReviewMutation()


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            id: id,
            data: {
                title: title,
                author: author,
                genre: genre,
                publicationDate: publicationDate,
                img: img,
            }
        }
        updateBook(data)

    };

    if (isSuccess) {
        toast("Successfully book Added");
        navigate('/')
    }

    const handelDelete = (id: any) => {
        console.log(id, user.email);

        deleteBook(id)
        toast('boook delete success')
        // deleteBook({ id, user: user.email })

    }
    if (deleteSucces) {
        toast('boook delete success')
    }


    useEffect(() => {
        setTitle(data?.data?.title)
        setAuthor(data?.data?.author)
        setGenre(data?.data?.genre)
        setPublicationDate(data?.data?.publicationDate)
        setImg(data?.data?.img)
    }, [data])

    const [review, setReview] = useState('')

    const handleSubmitReview = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const options = {
            id: id,
            data: { review: review }
        }
        console.log(options);

        postReview(options)
        setReview('');

    }



    return (
        <>
            <div>

                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">UPDATE BOOK</h3>

                        <form
                            onSubmit={handleSubmit}
                            className='bg-base-300 border-black rounded-lg p-10'>
                            <div className='grid'>
                                <label className='text-2xl inline-block' htmlFor="title">Title</label>
                                <input
                                    className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
                                    type="text"
                                    placeholder='book title'
                                    required={true}
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                                <input
                                    type="text"
                                    className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
                                    placeholder="author"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    required={true}
                                />
                                <input
                                    type="text"
                                    className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
                                    placeholder="genre"
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}

                                    required={true}
                                />
                                <input
                                    type="text"
                                    className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
                                    placeholder="publicationDate"
                                    value={publicationDate}
                                    onChange={(e) => setPublicationDate(e.target.value)}
                                    required={true}
                                />
                                <input
                                    type="text"
                                    className="py-2 mt-3 px-4 block w-80 max-w-lg border-gray-200 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500  dark:border-gray-700 dark:text-gray-700"
                                    placeholder="img"
                                    required={true}
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                />
                            </div>

                            <div className='mt-8  mx-auto text-center'>
                                <button
                                    type='submit'
                                    className="modal-backdrop btn btn-success text-black" >UPDATE BOOK
                                </button>
                                <button>
                                    <label htmlFor="my_modal_7" className="ms-5 modal-backdrop btn btn-warning text-black" >Close</label>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='px-10 my-5'>
                <h2 className="text-2xl py-2 text font-bold text-center">BOOK DETAILS</h2>


                {/* // add reviews */}

                <div className='grid justify-center my-9'>
                    <div className="join  text-center">
                        <form className="flex  items-center" onSubmit={handleSubmitReview}>
                            <div>
                                {/* // search bar */}
                                <input name='review'
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    className="input border-black border-2 w-96 input-bordered join-item" placeholder="Your review..." />
                            </div>

                            <div className="indicator">
                                <button type="submit" className="btn join-item bg-success">Add Review</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='mx-auto grid justify-center'>
                    <div className="lg:flex  border-2 rounded-lg">

                        <div className="h-96 p-5 mx-auto ">
                            <img className='h-full rounded-md w-full' src={data?.data?.img} alt="" />
                        </div>

                        <div className=" border-gray-400 lg:border-l-0  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between ">
                            <div className="mb-3">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">Title: {data?.data?.title}</h2>
                                <h3 className="text-gray-700 font-semibold text-xl mb-2">Author: {data?.data?.author}</h3>
                                <h4 className="text-gray-700 font-semibold text-xl mb-2">Publication date: {data?.data?.publicationDate}</h4>
                                <p>Reviews:{data?.data?.reviews.map((revie: any, index: number) => (
                                    <p key={index}>{revie?.review}</p>

                                ))}</p>
                            </div>
                            <div className='flex gap-5'>
                                <button onClick={() => handelDelete(data?.data?._id)} className=" btn btn-error">Delete </button>
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