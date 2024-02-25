import axios from "axios";

export const getSingleProduct = async ({ productId }: { productId: number }) => {
    const response = await axios.get(`https://bezello-server.vercel.app/product/${productId}`)

    return response;
};
