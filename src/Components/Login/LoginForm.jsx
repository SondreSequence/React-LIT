import { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "animate.css";

const usernameConfig = {
  required: true,
  minLength: 2,
};

const LoginForm = () => {
  const [buttonClass, setButtonClass] = useState("initial-class");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

  console.log(errors);
  return (
    <>
      <h1>Enter Username</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="olanormann"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>
        <Button
          type="submit"
          class={buttonClass}
          onMouseEnter={() => setButtonClass("btn btn-primary")}
        >
          Continue
        </Button>
      </form>
    </>
  );
};

/* function LoginForm(){
    const [buttonClass, setButtonClass] = useState("initial-class");
    
    return(<div>
        <h1 >Username or Email</h1>
        <input type="text" ></input>
        <Button class={buttonClass}
    onMouseEnter={() => setButtonClass("btn btn-primary animate__animated animate__hinge")}>Test</Button>

    </div>)
} */

export default LoginForm;
