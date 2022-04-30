import React from "react";
import { arrayNum } from "./const/consts";
import { renderOtherNumArrays } from "./functions/renderOtherNumArrays";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <ul>{renderOtherNumArrays(arrayNum)}</ul>
    </div>
  );
}

console.log(renderOtherNumArrays(arrayNum));
export default App;
