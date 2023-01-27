import LoginForm from "../Login/LoginForm";
import loggedIn from "../Login/loggedIn";
function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default loggedIn(LoginPage);
