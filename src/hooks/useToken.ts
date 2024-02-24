import { useEffect, useState } from "react";
import axios from 'axios';

export type TEmail = {
  email: string;
};

const useToken = (email: TEmail) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if (email && email.email) { // Check if email and email.email exist
          const response = await axios.get(`http://localhost:5000/jwt?email=${email.email}`);
          const data = response.data;
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken(); // Call the function immediately

  }, [email]);

  return [token];
};

export default useToken;
