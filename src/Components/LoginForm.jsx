import { useState } from "react";
import { Button } from "react-bootstrap";
import 'animate.css';

function LoginForm(){
    const [buttonclassName, setButtonclassName] = useState("initial-className");
    
    return(<div>
        <h1 >Username or Email</h1>
        <input type="text" ></input>
        <Button className={buttonclassName}
    onMouseEnter={() => setButtonclassName("btn btn-primary animate__animated animate__hinge")}>Test</Button>
    </div>)
}

export default LoginForm;