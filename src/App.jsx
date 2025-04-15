import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada" }]);
  const [inputTask, setInputTask] = useState("");

  function changeInput(event) {
    setInputTask(event.target.value);
  }

  function clickButton() {
    setList([{ id: uuid(), task: inputTask }]);
  }

  return (
    <div>
      <input onChange={changeInput} placeholder="O que tenho para fazer..." />
      <button onClick={clickButton}>Adicionar</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
