import React from 'react'

function Header() {
  let dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const date = new Date()

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  const currentDate = `${day}-${month}-${year}`
  const currentDay = dayNames[date.getDay()]

  return (
    <h1 className='text-3xl text-color-3 w-4/5 mt-24 font-medium'>
      {currentDay}
      <br />
      {currentDate}
    </h1>
  )
}

export default Header
