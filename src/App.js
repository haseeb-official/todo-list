import React, { useEffect, useState } from 'react'
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

  return (
    <div>
      <h1>TODO-LIST</h1>
      <input type='text' value={task} onChange={updateTask} />
      <button>add</button>
      <p>{todos.length} pending works remaining...</p>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <button>clear</button>
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
