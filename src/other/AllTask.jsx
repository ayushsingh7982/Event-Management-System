import React from "react";

const AllTask = () => {
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 h-64 overflow-auto rounded-lg">
      <div className="bg-blue-600 mb-2 py-2 px-4 flex justify-between items-center rounded hover:bg-blue-500 transition">
        <h2 className="text-white font-medium">Sarthak</h2>
        <h3 className="text-white">Make a UI Design</h3>
        <h5 className="bg-white text-black px-2 py-1 rounded-full text-sm font-semibold">
          Pending
        </h5>
      </div>

      <div className="bg-green-600 mb-2 py-2 px-4 flex justify-between items-center rounded hover:bg-green-500 transition">
        <h2 className="text-white font-medium">Rahul</h2>
        <h3 className="text-white">Develop Backend APIs</h3>
        <h5 className="bg-white text-black px-2 py-1 rounded-full text-sm font-semibold">
          Completed
        </h5>
      </div>

      <div className="bg-yellow-500 mb-2 py-2 px-4 flex justify-between items-center rounded hover:bg-yellow-400 transition">
        <h2 className="text-black font-medium">Priya</h2>
        <h3 className="text-black">Testing the Application</h3>
        <h5 className="bg-black text-white px-2 py-1 rounded-full text-sm font-semibold">
          In Progress
        </h5>
      </div>

      <div className="bg-purple-600 mb-2 py-2 px-4 flex justify-between items-center rounded hover:bg-purple-500 transition">
        <h2 className="text-white font-medium">Anita</h2>
        <h3 className="text-white">Fix UI Bugs</h3>
        <h5 className="bg-white text-black px-2 py-1 rounded-full text-sm font-semibold">
          Pending
        </h5>
      </div>

      <div className="bg-pink-600 mb-2 py-2 px-4 flex justify-between items-center rounded hover:bg-pink-500 transition">
        <h2 className="text-white font-medium">Vikram</h2>
        <h3 className="text-white">Deploy Project</h3>
        <h5 className="bg-white text-black px-2 py-1 rounded-full text-sm font-semibold">
          Completed
        </h5>
      </div>
    </div>
  );
};

export default AllTask;
