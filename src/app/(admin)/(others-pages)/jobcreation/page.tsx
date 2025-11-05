import React from 'react'




const clients =["CloudSphere Technologies","PixelCraft Studio" , "PeopleFirst HR",];

const majorCities=["mumbai ", "pune", 'banglore',"jaipur" ,"nagpur" ,"kolkata"];

const jobTypes =["remote" ,"fulltime","internship" ,"contract","freelancer"];





export default function jobscreation () {
   return  (
    <>
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Job Listing</h2>
      <form  className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-1 text-gray-700">Job Title</label>
          <input
            type="text"
            name="title"
          
            placeholder="Enter job title"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-gray-700">Description</label>
          <textarea
            name="description"
          
            placeholder="Enter job description"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Client Dropdown */}
        <div>
          <label className="block mb-1 text-gray-700">Client</label>
          <select
         
            className="w-full border rounded-lg p-2"
            required
          >
            <option value="">Select Client</option>
            {clients.map((client) => (
              <option key={client} value={client}>
                {client}
              </option>
            ))}
          </select>
        </div>

        {/* Skills */}
        <div>
          <label className="block mb-1 text-gray-700">Skills</label>
          <input
            type="text"
            name="skills"
        
            placeholder="e.g. React, Node.js, TypeScript"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Salary */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700">Internal Salary</label>
            <input
              type="number"
              name="internalSalary"
            
              placeholder="e.g. 80000"
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">External Salary</label>
            <input
              type="number"
              name="externalSalary"
           
              placeholder="e.g. 100000"
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        {/* Location Dropdown */}
        <div>
          <label className="block mb-1 text-gray-700">Location</label>
          <select
            name="location"
        
            className="w-full border rounded-lg p-2"
            required
          >
            <option value="">Select Location</option>
            {majorCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Type Dropdown */}
        <div>
          <label className="block mb-1 text-gray-700">Job Type</label>
          <select
            name="type"
            className="w-full border rounded-lg p-2"
            required
          >
            <option value="">Select Type</option>
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition-all"
        >
          Create Job Listing
        </button>
      </form>
    </div>
    </>
  )
}
