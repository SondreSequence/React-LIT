import { Navigate } from "react-router-dom";
function withAuth(Component) {
  return function (props) {
    //condition to navigate to page
    if (localStorage.getItem("translation-user") !== null) {
      console.log("HHHH");
      return <Component {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
}
export default withAuth;
