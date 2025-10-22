import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-red-400'>
        <h2 className='text-3xl font-semibold'>2</h2>
        <h3 className='text-xl font-medium'>New task 📩</h3>
      </div>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>3</h2>
        <h3 className='text-xl font-medium'>Completed Task ✅</h3>
      </div>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-green-400'>
        <h2 className='text-3xl font-semibold'>7</h2>
        <h3 className='text-xl font-medium'>Accepted task 🤝</h3>
      </div>
      <div className='w-[45%] rounded-xl py-9 px-6 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Failed task ☹️</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
