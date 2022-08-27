import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
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

  return (
    <div>
      <h1>TODO-LIST</h1>
      <input type='text' value={task} onChange={updateTask} />
      <button onClick={addBtnHandler}>add</button>
      <p>{todos.length} pending works remaining...</p>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteBtnHandler={deleteBtnHandler}
            checkBoxHandler={checkBoxHandler}
          />
        ))}
      </ul>
      <button onClick={clearBtnHandler}>clear</button>
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
