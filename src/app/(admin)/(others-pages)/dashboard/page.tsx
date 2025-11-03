"use client"
import React, { useEffect, useState } from 'react'

const page = () => {

  const [role, setRole] = useState(" ")

useEffect(()=>{
const localStorageRole = localStorage.getItem("role")
setRole(localStorageRole || "")
},[])


  return (
    <div>Welcome to {role} Dashboard </div>
  )
}

export default page