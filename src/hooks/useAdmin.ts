import { useEffect, useState } from "react";
import { TEmail } from "./useToken";

const useAdmin = (email: TEmail) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://bezello-server.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {

          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
