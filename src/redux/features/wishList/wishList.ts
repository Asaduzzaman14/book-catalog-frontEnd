import { api } from "../../api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishList: builder.query({
      query: () => "/wishlist",
    }),
  }),
});

export const { useGetWishListQuery } = wishlistApi;
