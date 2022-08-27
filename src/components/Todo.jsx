import React from 'react'

function Todo({ todo }) {
  const { text, completed } = todo
  return (
    <>
      <li>
        <input type='checkbox' defaultChecked={completed} />
        <span>{text}</span>
        <button>delete</button>
      </li>
    </>
  )
}

export default Todo
