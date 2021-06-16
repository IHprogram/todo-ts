import React, { useState } from 'react';
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import { Task } from './Types'

let initialState: Task[] = [];

const App = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div>
      <h1>超簡単なタスク管理アプリ</h1>
      {/* useStateを使用して格納した全てのタスク(tasks)と、それを変更するためのsetTasksをpropsで渡す */}
      <TaskList tasks={tasks} setTasks={setTasks} />
      <AddTask tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App;
