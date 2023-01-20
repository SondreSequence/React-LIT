import { useState } from "react";

function Joke(){
    const [joke, setJoke] = useState({});
    
    function getJoke(){
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then(Response=>Response.json())
    .then(result=>{setJoke(result)});
}
    
    return(
        <div>
            <p>{joke.joke}</p>
         <button onClick={getJoke}>Get Joke</button>
</div>
)
}

export default Joke;