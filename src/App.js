import React from 'react'

function App() {
  return (
    <div>
      <h1>TODO-LIST</h1>
      <input type='text' />
      <button>add</button>
      <p>3 pending works remaining...</p>
      <ul>
        <li>
          <input type='checkbox' />
          <span>this is my first task</span>
          <button>delete</button>
        </li>
        <li>
          <input type='checkbox' />
          <span>this is my second task</span>
          <button>delete</button>
        </li>
        <li>
          <input type='checkbox' />
          <span>this is my third task</span>
          <button>delete</button>
        </li>
      </ul>
      <button>clear</button>
    </div>
  )
}

export default App
