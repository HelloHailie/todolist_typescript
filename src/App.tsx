import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// let personName: unknown;

// // let printName: Function;
// let printName: (name: string) => void; //아무것도 반환하지 않는 함수에 사용하는 타입

// // function printName(name: string) {
// //   console.log(name);
// // }

// // printName("seonmin");

// // type Person = {
// //   name: string;
// //   age?: number;
// // };
// // let person: Person = {
// //   name: "seonmin",
// // };
// // let lotsOfPerson: Person[] = {};

// interface Person {
//   name: string;
//   age?: number;
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList />
    </div>
  );
};

export default App;
