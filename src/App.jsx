import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import {
  Button,
  Container,
  Input,
  ToDoList,
  ListItem,
  Trash,
  Check,
} from "./styles.js";

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  function changeInput(event) {
    setInputTask(event.target.value);
  }

  function clickButton() {
    if(inputTask) {
    setList([...list, { id: uuid(), task: inputTask, finished: false }]);
    }
  }

  function taskCompleted(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  }

  function taskDelete(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={changeInput} placeholder="O que tenho para fazer..." />
        <Button onClick={clickButton}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem $isFinished={item.finished} key={item.id}>
                <Check onClick={() => taskCompleted(item.id)} />
                <li key={item.id}>{item.task}</li>
                <Trash onClick={() => taskDelete(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há tarefas!</h3>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
