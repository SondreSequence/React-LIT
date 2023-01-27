import { Navigate } from "react-router-dom";

function loggedIn(Component) {
  return function (props) {
    if (localStorage.getItem("username") !== null) {
      return <Navigate to="/translate" />;
    } else {
      return <Component {...props} />;
    }
  };
}
export default loggedIn;
