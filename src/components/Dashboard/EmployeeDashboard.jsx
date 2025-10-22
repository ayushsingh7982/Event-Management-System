import React from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#icicic] h-screen '>
            <Header/>
            <TaskListNumbers/>
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard