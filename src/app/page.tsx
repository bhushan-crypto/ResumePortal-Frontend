'use client'

import ResumeUploadForm from "@/components/ResumeUploadForm/ResumeUploadForm";
import UserInfoCard from "@/components/user-profile/UserInfoCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GuestPage() {
     const routes =useRouter()

    const [choosefile ,setchoosefile] =useState<File | null>(null);

     const handleonChnage =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0] || null;
    setchoosefile(file);
       
     }
 const handleUpload=()=>{
    if(choosefile){
 alert('Resume uploaded succesfully !')
 } else{
        alert('Plz choose the file first !')
 }
}
 const handleLogin =()=>{
     routes.push('/login');
 }

  return (
    <div className="min-h-screen w-full flex flex-col  relative bg-[#d9e8f8]  ">
          <div className="flex justify-end p-4 sm:p-6">
    <button onClick={handleLogin } className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-blue-600 text-white font-black">
      LogIn
    </button>
  </div>

      {/* Card Container */}
      <div className=" bg-white rounded-3xl shadow-lg shadow-black/20 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[60%] m-auto p-6 sm:p-10 flex flex-col items-center text-center">
       <ResumeUploadForm/>
      </div>
    </div>
  );
}
