import { useState } from "react";
import { useForm } from "react-hook-form";
import "animate.css";
import { loginUser } from "../api/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storageSave } from "../storage";
import {useDispatch } from "react-redux";
import {
  setUsername,
  setID,
} from "../Reducers/userReducer";


const usernameConfig = {
  required: true,
  minLength: 2,
};

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
      return <span>Username is required</span>;
    }

    if (errors.username.type === "minLength") {
      return <span>Username is too short</span>;
    }
  })();

  return (
    <>
      <div className="d-flex flex-column text-center mt-5">
        <h2>Enter Username</h2>
        <form
          className="d-flex flex-column text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="mt-4">
            <input
              type="text"
              placeholder="olanormann"
              {...register("username", usernameConfig)}
            />
          </fieldset>
          {errorMessage}
          <div class="d-grid gap-2 col-2 mx-auto m-4">
            <button
              className="btn btn-primary btn-lg"
              type="submit"
              disabled={loading}
            >
              Continue
            </button>
          </div>
          {loading && <p>Logging in...</p>}
          {apiError && <p>{apiError}</p>}
        </form>
      </div>
    </>
  );
};

export default LoginForm;
