
import axios from "axios";

export const getAllProducts = async () => {
    return await axios.get("https://bezello-server.vercel.app/allProducts")
};
