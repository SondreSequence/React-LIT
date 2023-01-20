import { useState } from "react";
import { Button } from "react-bootstrap";
import 'animate.css';

function LoginForm(){
    const [buttonClass, setButtonClass] = useState("initial-class");
    
    return(<div>
        <h1 >Username or Email</h1>
        <input type="text" ></input>
        <Button class={buttonClass}
    onMouseEnter={() => setButtonClass("btn btn-primary animate__animated animate__hinge")}>Test</Button>
    </div>)
}

export default LoginForm;