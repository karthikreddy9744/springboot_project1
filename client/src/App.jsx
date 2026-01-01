import { useState } from "react";
import "./App.css"
import Card from "./components/Card"
import Loader from "./ui/Loader"
import B from "./ui/B"
function App()
{
  let [v, setV]=useState("😎")
  return <>
    <div>
      <h1>{v}</h1>
    <button onClick={() =>
      {
        if (v=="😎") {
          setV("🤣");

          
        } else {
          setV("😎")
        }
      
      }
      }>Change</button>
    </div>
  </>
}

export default App