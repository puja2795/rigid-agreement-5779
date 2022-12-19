import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Login />;
  }
  return children;
}
export default PrivateRoute;