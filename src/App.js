import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Header from './components/Header'
import Todo from './components/Todo'

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos(todosSeeder)
  }, [])

  const updateTask = (e) => {
    setTask(e.target.value)
  }

  const addBtnHandler = () => {
    setTodos([...todos, { id: uuid(), text: task, completed: false }])
    setTask('')
  }

  const checkBoxHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const deleteBtnHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const clearBtnHandler = () => {
    setTodos([])
  }

  const completedTodos = todos.filter((todo) => !todo.completed)

  return (
    <div className='bg-color-1 w-screen h-screen flex justify-center items-center'>
      <main className='bg-color-4 w-[600px] h-[800px] flex flex-col items-center rounded-md shadow-2xl'>
        <div className='w-full flex flex-col items-center'>
          <Header />
          <div className='w-4/5 h-16 m-10 items-center flex justify-between'>
            <input
              className='w-full h-full text-lg bg-color-2 border border-color-3 placeholder-color-3 focus:outline-none rounded-sm p-5'
              placeholder='Enter the task..'
              type='text'
              value={task}
              onChange={updateTask}
            />
            <button
              className='w-1/4 h-full ml-4 text-2xl font-semibold text-color-4 hover:text-color-5 bg-color-5 hover:bg-color-3 border border-color-3 rounded-sm p-2 transition-all duration-200'
              onClick={addBtnHandler}>
              Add
            </button>
          </div>
          <p className='w-4/5 text-lg text-color-3 font-medium'>
            You have {completedTodos.length} pending items.
          </p>
        </div>
        <ul className='h-2/5 w-4/5 mt-4 overflow-auto scrollbar'>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteBtnHandler={deleteBtnHandler}
              checkBoxHandler={checkBoxHandler}
            />
          ))}
        </ul>
        <button
          className='w-36 h-14 mt-8 text-2xl font-semibold text-color-5 underline hover:text-color-3 rounded-sm  transition-all duration-200'
          onClick={clearBtnHandler}>
          Clear
        </button>
      </main>
    </div>
  )
}

export default App

let todosSeeder = [
  {
    id: 1,
    text: 'this is my first task',
    completed: false,
  },
  {
    id: 2,
    text: 'this is my second task',
    completed: true,
  },
  {
    id: 3,
    text: 'this is my third task',
    completed: false,
  },
]
