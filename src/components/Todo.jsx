import React from 'react'

function Todo({ todo, checkBoxHandler, deleteBtnHandler }) {
  const { id, text, completed } = todo
  return (
    <>
      <li
        key={todo.id}
        className='h-16 mb-4 truncate last:mb-0 bg-color-6 flex justify-between items-center rounded-sm'>
        <div className='flex items-center text-xl text-color-5'>
          <input
            className='mx-5 bg-color-7 checked:bg-color-5 w-8 h-8 rounded-full appearance-none'
            type='checkbox'
            defaultChecked={completed}
            onChange={() => checkBoxHandler(id)}
          />
          <span className={`${completed ? 'line-through' : ''}`}>{text}</span>
        </div>
        <button
          className='bg-color-5 h-full w-16 rounded-r-sm'
          onClick={() => deleteBtnHandler(id)}>
          <div className=' w-9 h-1 bg-color-6 translate-x-4 rotate-45'></div>
          <div className=' w-9 h-1 bg-color-6 translate-x-4 -rotate-45'></div>
        </button>
      </li>
    </>
  )
}

export default Todo
