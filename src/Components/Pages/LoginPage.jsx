import LoginForm from "../Login/LoginForm";
import loggedIn from "../Login/loggedIn";
function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
}

export default loggedIn(LoginPage);
