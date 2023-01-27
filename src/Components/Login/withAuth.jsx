import { Navigate } from "react-router-dom";

//navigates the user to the login page if they are not logged in
function withAuth(Component) {
  return function (props) {
    if (
      Component.name === "LoginPage" &&
      localStorage.getItem("username") !== null
    ) {
      return <Navigate to="/translate" />;
    }

    if (localStorage.getItem("username") !== null) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/" />;
    }
  };
}
export default withAuth;
