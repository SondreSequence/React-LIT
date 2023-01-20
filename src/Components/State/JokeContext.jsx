import { createContext } from "react"

export const JokeContext = createContext();
function JokeProvider({children}){
return(<JokeContext.Provider>{children}</JokeContext.Provider>)}

export default JokeProvider;
