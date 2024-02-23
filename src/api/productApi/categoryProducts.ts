import axios from "axios";

export const getCategoryProducts = async ({ categoryId }: { categoryId: number }) => {
    const response = await axios.get(`http://localhost:5000/categories/${categoryId}`)

    return response;
};
