import axios from "axios";

export const getCategoryProducts = async ({ categoryId }: { categoryId: number }) => {
    const response = await axios.get(`https://bezello-server.vercel.app/categories/${categoryId}`)

    return response;
};
