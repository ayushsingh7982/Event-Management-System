import React from 'react'

const CreateTask = () => {
  return (
    <div>
              <div className="max-w-3xl mx-auto mt-10 bg-gray-900 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-white">Create New Task</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-300 font-medium mb-2">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI Design"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Description</label>
            <textarea
              placeholder="Task details..."
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Date</label>
            <input
              type="date"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Assign To</label>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Category</label>
            <input
              type="text"
              placeholder="Design, Development, etc"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask