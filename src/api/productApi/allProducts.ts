
import axios from "axios";

export const getAllProducts = async () => {
    return await axios.get("http://localhost:5000/allProducts")
};
