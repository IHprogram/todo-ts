import React from 'react';
import TaskItem from './TaskItem'
import { Task } from '../Types'

//Appから受け取ったpropsに型を定義
interface Props {
  // 「Task」の型の配列を表す
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList = ({ tasks, setTasks }: Props) => {
  // チェックボックスの処理。trueなら完了、falseなら未完了

  const handleDone = (task: Task): void => {
    const newTodoList = tasks.map(element =>
      element.id === task.id ? { ...task, done: !task.done } : element
    )
    console.log(newTodoList)
    setTasks(newTodoList)
    console.log(task)
  }

  // タスクの削除
  const deleteTodo = (task: Task): void => {
    const newTodoList = tasks.filter(element =>
      // 削除対象以外を変数に入れることで削除扱いにする。
      element.id !== task.id
    )
    console.log(newTodoList)
    console.log(task)
    setTasks(newTodoList)
  }

  return (
    <div>
      {tasks.length <= 0 ? (
        "登録されたTodoはありません。"
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              handleDone={handleDone}
              handleDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
