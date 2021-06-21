import React from 'react'
import { Task } from '../Types'
import HiddenMessage from './HiddenMessage'

// TaskListから受け取ったpropsに型を定義
type Props = {
  // 「Task」の型を適用
  task: Task
  handleDone: (task: Task) => void
  handleDelete: (task: Task) => void
}

const TaskItem = ({ task, handleDone, handleDelete }: Props) => {
  return (
    <li className={task.done ? 'done' : ''}>
      <label>
        <input
          type='checkbox'
          className='checkbox-input'
          onClick={() => handleDone(task)}
          defaultChecked={task.done}
        />
        <span>{task.title}</span>
      </label>
      <button
        onClick={() => handleDelete(task)}
      >
        削除
      </button>
      <HiddenMessage children={task.done} />
    </li>
  )
}

export default TaskItem