import { Navigate } from "react-router-dom";
function withAuth(Component) {
  return function (props) {
    if (
      Component.name == "LoginPage" &&
      localStorage.getItem("translation-user") !== null
    ) {
      return <Navigate to="/translate" />;
    }

    if (localStorage.getItem("translation-user") !== null) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/" />;
    }
  };
}
export default withAuth;
