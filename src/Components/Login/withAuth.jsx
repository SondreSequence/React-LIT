import { useHistory } from "react-router-dom";

function withAuth(Component) {
  return function (props) {
    const history = useHistory();
    if (localStorage.getItem("translation-user") !== null) {
      return <Component {...props} />;
    } else {
      history.push("/");
      return null;
    }
  };
}
export default withAuth;
