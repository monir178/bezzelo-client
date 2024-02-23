import axios from "axios";

export const getCategories = async () => {
    return await axios.get("http://localhost:5000/categories")
};
