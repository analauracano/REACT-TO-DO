import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

import { Button, Container, Input, ToDoList, ListItem }from './styles.js'

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada", finished: true },
  ]);
  const [inputTask, setInputTask] = useState("");

  function changeInput(event) {
    setInputTask(event.target.value);
  }

  function clickButton() {
    setList([ ... list, { id: uuid(), task: inputTask, finished: false }]);
  }

  function taskCompleted(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
      <Input onChange={changeInput} placeholder="O que tenho para fazer..." />
      <Button onClick={clickButton}>Adicionar</Button>

      <ul>
        {list.map((item) => (
          <ListItem $isFinished={item.finished} key={item.id}>
          <FcCheckmark onClick={() => taskCompleted(item.id)}/>
          <li key={item.id}>{item.task}</li>
          <FcEmptyTrash />
          </ListItem>
        ))}
      </ul>
      </ToDoList>
    </Container>
  );
}

export default App;