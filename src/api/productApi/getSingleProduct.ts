import axios from "axios";

export const getSingleProduct = async ({ productId }: { productId: number }) => {
    const response = await axios.get(`http://localhost:5000/product/${productId}`)

    return response;
};
