import { useGetWishListQuery } from '../redux/features/wishList/wishList';

const WishListpage = () => {

    const { data } = useGetWishListQuery(undefined)

    console.log(data?.data);


    return (
        <div>
            <div className="text-2xl mt-5 text-center font-bold">Wish List</div>
        </div>
    );
};

export default WishListpage;