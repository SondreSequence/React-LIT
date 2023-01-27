import { Navigate } from "react-router-dom";

// navigates the user to the translate page if they are already logged in
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
