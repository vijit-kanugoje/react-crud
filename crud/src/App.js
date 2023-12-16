import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import FetchData from "./components/FetchData";

function App() {
  return (
    <div className="App">
      <h1>Crud application</h1>
      <Todo />

      <div style={{ marginTop: "50px" }}>
        <FetchData />
      </div>
    </div>
  );
}

export default App;
