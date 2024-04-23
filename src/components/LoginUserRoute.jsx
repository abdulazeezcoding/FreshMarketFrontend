import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OnlyLoginUsersRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  }, []);

  return <>{children}</>;
}
