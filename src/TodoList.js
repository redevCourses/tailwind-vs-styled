import React, { useState } from 'react'

function TodoList () {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  const removeTask = index => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className='max-w-md mx-auto mt-8 p-4 border rounded-lg shadow'>
      <h2 className='text-xl font-semibold mb-4'>Todo List Tailwind CSS</h2>
      <div className='flex items-center mb-4'>
        <input
          type='text'
          className='flex-grow border rounded-l p-2 focus:outline-none'
          placeholder='Enter a new task...'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button
          className='bg-blue-500 text-white rounded-r p-2 hover:bg-blue-600 focus:outline-none'
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className='flex justify-between items-center border-b py-2'
          >
            {task}
            <button
              className='text-red-500 hover:text-red-700 focus:outline-none'
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
