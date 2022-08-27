import React from 'react'
import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>TODO-LIST</h1>
      <input type='text' />
      <button>add</button>
      <p>3 pending works remaining...</p>
      <ul>
        {todosSeeder.map((todo) => (
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
