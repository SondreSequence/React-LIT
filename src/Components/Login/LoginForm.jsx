import { useState } from "react";
import { useForm } from "react-hook-form";
import "animate.css";
import { loginUser } from "../api/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storageSave } from "../storage";
import { useDispatch } from "react-redux";
import { setUsername, setID } from "../Reducers/userReducer";

const usernameConfig = {
  required: true,
  minLength: 2,
};
/* 
  generates the loginform where users input their username and get logged in if they exist in the api.
  if they do not exist already a user with their username is generated in the api. 
*/
const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/translate");
    }
  }, [user, navigate]);

  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, user] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }

    if (user !== null) {
      storageSave("username", user);
      storageSave("userID", user.id);
      dispatch(setUsername(user.username));
      dispatch(setID(user.id));
      setUser(user);
    }
    setLoading(false);
  };

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span className="error">Username is required</span>;
    }

    if (errors.username.type === "minLength") {
      return <span className="error">Username is too short</span>;
    }
  })();

  return (
    <div className="card-container w-50 mx-auto justify-content-center d-flex">
      <div className="d-flex flex-column justify-content-center">
        <h2 className="mx-auto ">Enter Username</h2>

        <form
          className="d-flex mx-auto mt-3 form-container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset>
            <input
              className="form-control form-control-lg ml-5"
              type="text"
              placeholder="olanormann"
              {...register("username", usernameConfig)}
            />
          </fieldset>

          <button
            className="all-buttons username-button"
            type="submit"
            disabled={loading}
          >
            <img className="icon" src={require("./arrow-icon.png")}></img>
          </button>
        </form>
        {apiError && <p>{apiError}</p>}
        {loading && <p className="loading">Logging in...</p>}
        {errorMessage}
      </div>
    </div>
  );
};

export default LoginForm;
