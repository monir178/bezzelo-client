import { getCategories } from "@/api/productApi/categories.api";
import { useQuery } from "@tanstack/react-query";


export const useGetCategories = () => {
    const categoriesData = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
        select: (data) => {
            const categories = data?.data?.data?.map((category) => ({
                id: category._id,
                category_id: category.category_id,
                name: category.title,
                img: category.img,
            }));
            return categories;
        },


    });

    return categoriesData;
};