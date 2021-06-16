import React, { useState } from "react";
import { Task } from "../Types"

// propsに型を付ける。
interface Props {
  // 「Task」の型の配列を表す
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const AddTask = ({ tasks, setTasks }: Props) => {
  const [todo, setTodo] = useState("");

  //Id用にランダムな文字列を生成
  const randomId = (): string => {
    return Math.random().toString(32).substring(2);
  };

  const submit = () => {
    const newTask: Task = {
      id: randomId(),
      title: todo,
      done: false
    }
    setTasks([...tasks, newTask]);
    setTodo("")
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button onClick={submit}>タスク追加</button>
    </div>
  )
}

export default AddTask;