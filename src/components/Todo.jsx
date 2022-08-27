import React from 'react'

function Todo({ todo, checkBoxHandler, deleteBtnHandler }) {
  const { id, text, completed } = todo
  return (
    <>
      <li>
        <input
          type='checkbox'
          defaultChecked={completed}
          onClick={() => checkBoxHandler(id)}
        />
        <span>{text}</span>
        <button onClick={() => deleteBtnHandler(id)}>delete</button>
      </li>
    </>
  )
}

export default Todo
