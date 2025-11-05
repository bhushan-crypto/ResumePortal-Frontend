'use client';

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";

import EditResume from "../UsersModels/resumeEditModel/EditResume";

interface Job {
  id: number;
  title: string; 
  company: string;
  description: string;
  // ...
}
// Define the job listings data
const jobs = [
    {
        id: 1,
        company: "TechNova Solutions",
        title: "Frontend Developer",
        description:
            "We are looking for a skilled Frontend Developer to build responsive web applications using React and modern JavaScript frameworks.",
        skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        salary: "₹6,00,000 - ₹9,00,000 per year",
        internalSalary: "₹5,50,000 per year",
        location: {
            type: "Remote",
            cities: ["Bangalore", "Pune", "Hyderabad", "Delhi"],
        },
        type: "Full-time",
    },
    {
        id: 2,
        company: "CloudSphere Technologies",
        title: "Backend Developer",
        description:
            "Join our backend team to design and develop scalable APIs using Node.js and Express. Experience with MongoDB is preferred.",
        skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
        salary: "₹7,00,000 - ₹10,00,000 per year",
        internalSalary: "₹6,00,000 per year",
        location: {
            type: "Remote",
            cities: ["Chennai", "Bangalore", "Noida", "Kolkata"],
        },
        type: "Contract",
    },
    {
        id: 3,
        company: "PixelCraft Studio",
        title: "UI/UX Designer",
        description:
            "Looking for a creative UI/UX Designer to design intuitive interfaces and improve user experiences across our platforms.",
        skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
        salary: "₹4,00,000 - ₹7,00,000 per year",
        location: {
            type: "Remote",
            cities: ["Mumbai", "Delhi", "Ahmedabad", "Pune"],
        },
        type: "Freelancing",
    },
    {
        id: 4,
        company: "PeopleFirst HR",
        title: "HR Intern",
        description:
            "Assist the HR team in recruitment, employee engagement, and administrative tasks. Great opportunity to learn HR fundamentals.",
        skills: ["Communication", "Recruitment", "MS Office", "Coordination"],
        salary: "₹10,000 - ₹15,000 per month",
        location: {
            type: "Remote",
            cities: ["Pune", "Bangalore", "Chennai"],
        },
        type: "Internship",
    },
    {
        id: 5,
        company: "InnovateX Labs",
        title: "Full Stack Developer",
        description:
            "We are seeking a Full Stack Developer proficient in React and Node.js to work on end-to-end application development.",
        skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
        salary: "₹8,00,000 - ₹12,00,000 per year",
        internalSalary: "₹9,00,000 per year",
        location: {
            type: "Remote",
            cities: ["Hyderabad", "Pune", "Bangalore", "Delhi"],
        },
        type: "Full-time",
    },
    {
        id: 6,
        company: "WriteRight Media",
        title: "Content Writer",
        description:
            "Create engaging content for blogs, social media, and marketing campaigns. Must have excellent writing and research skills.",
        skills: ["Content Writing", "SEO", "Research", "Editing"],
        salary: "₹3,00,000 - ₹5,00,000 per year",
        location: {
            type: "Remote",
            cities: ["Jaipur", "Indore", "Mumbai", "Kolkata"],
        },
        type: "Part-time",
    },
];


export default function Joblisting() {
    const [searchitem, setSearchitem] = useState<string>('');
     const [filteredjobs ,setFilterdJobs] =useState(jobs);
      
     const handleSearch =()=>{
        if(searchitem?.trim() ===""){
            setFilterdJobs(jobs)
        }
        else{
         const result = filteredjobs.filter((job)=>(
            job.title.toLowerCase().includes(searchitem.toLowerCase()) ||
          job.company.toLowerCase().includes(searchitem.toLowerCase()) ||
          job.skills.some((skill) =>
            skill.toLowerCase().includes(searchitem.toLowerCase())
          )
         ))
          setFilterdJobs(result);
        }
       

     }
    
  
        //  const filteredjobs = jobs.filter((job)=>
        //     job.title.toLowerCase().includes(searchitem?.toLowerCase()|| " ")
        //  )



    return (
        <div className=" relative px-6 bg-gray-50 h-[100vh] overflow-y-hidden border-2 mt-1px">

            <div className="flex flex-col gap-4  mt-3 md:flex-row items-center  w-full sticky top-0  bg-gray-50   justify-between sm:pb-5 sm:pt-2  lg:px-8 lg:py-8 ">
                <h1 className="  sm:text-xl lg:text-3xl font-bold  text-gray-800">Available Jobs</h1>
                <div className="searchbar h-[8vh] w-[80%] lg:w-[34vw] px-6 border  flex items-center justify-between rounded-4xl">

                    <input onChange={(e) => setSearchitem(e.target.value)} value={searchitem} type="text" name="search" placeholder="search by job title" className="w-[80%] outline-none py-2" />

                    <button onClick={handleSearch} className="w-[14vw] border py-2 rounded-4xl text-xs lg:text-sm bg-blue-600   hover:bg-blue-700 text-white font-regular "  > Search</button>
                </div>
            </div>

            <div className="grid pb-10 overflow-y-scroll no-scrollbar  px-5 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
              {filteredjobs.length > 0 ? (
  filteredjobs.map((job) => (
    <div
      key={job.id}
      className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition duration-300"
    >
      {/* Title + Type */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
        <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
          {job.type}
        </span>
      </div>

      {/* Company Name */}
      <p className="text-sm text-gray-500 mb-3">{job.company}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-3">{job.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-3">
        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Salary Info */}
      <div className="text-sm mb-2">
        <strong>Salary:</strong> {job.salary}
      </div>
      {job.internalSalary && (
        <div className="text-sm text-gray-500">
          <strong>Internal Salary:</strong> {job.internalSalary}
        </div>
      )}

      {/* Location */}
      <div className="mt-3 text-sm">
        <strong>Location:</strong> {job.location.type} ({job.location.cities.join(", ")})
      </div>

      {/* Apply Button */}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">
        Apply Now
      </button>
    </div>
  ))
) : (
  <p className="text-gray-500 text-center">No jobs found</p>
)}

            </div>

        </div>
    );
}
