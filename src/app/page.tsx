'use client'

import Joblisting from "@/components/joblisting/Joblisting";
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
    <div className="min-h-screen w-full flex flex-col  relative  ">
          <div className="flex justify-between items-center p-4 sm:p-6 lg:px-10 ">
            <div className="h-[13vh]  ">
                 <img src="/images/brand/brand-logo-png.png" alt="brandLogo" className=" h-[100%]" />
            </div> 
            <div className="searchbar h-[8vh] w-[34%] px-6 border  flex items-center justify-between rounded-4xl">
                      <input type="text" name="search" placeholder="search by job title" className="w-[80%]  py-2" />

                      <button className="w-[20%] border py-2 rounded-4xl text-sm  bg-blue-600   hover:bg-blue-700 text-white font-regular "  > Search</button>
            </div>
    <button onClick={handleLogin } className="px-4 lg:px-8 py-2 h-[6vh] sm:py-3 rounded-xl bg-blue-600 text-white font-semibold">
      LogIn
    </button>
  </div>

       <Joblisting/>

      {/* Card Container */}
      <div className=" bg-white rounded-3xl shadow-lg shadow-black/20 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[60%] m-auto p-6 sm:p-10 flex flex-col items-center text-center">
 
       <ResumeUploadForm/>
      </div>
    </div>
  );
}
