import React from 'react'

const addskills = () => {
  return (
  <div className="w-full min-h-[80vh] flex items-center justify-center bg-gray-50">
  <div className="w-[80vw] max-w-2xl min-h-[60vh] bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
      Add Your Skills
    </h2>

    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Enter a skill..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />

      <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-md">
        Add Skill
      </button>
    </div>

    {/* Optional: Skill list preview area */}
    <div className="mt-8 border-t pt-4 text-gray-600">
      <p className="text-center italic">Your added skills will appear here...</p>
    </div>
  </div>
</div>

  )
}

export default addskills