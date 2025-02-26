"use client"

import Image from 'next/image'
import Logo from '../assets/logo.jpg'
import { IoHomeSharp } from "react-icons/io5";
import { useState } from 'react';
import { IoBag } from "react-icons/io5";
import { FaTag } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import Link from 'next/link';

const Asidebar = () => {

  const [select, setSelect] = useState("Home")

  return (
    <div className='bg-lime-900 w-1/6 flex flex-col text-center h-screen border-r-2'>
        <div className='flex justify-center rounded-full ms-5 gap-5 py-5 '>
            <Image src={Logo} alt="Logo" width={150} className='text-white rounded-full'/>
        </div>
        <div className='mt-10 mx-5 gap-5 flex flex-col'>
            <Link href="/dashboard" onClick={()=>setSelect("Home")} className={`text-white rounded-lg flex cursor-pointer py-3 px-3 gap-5 text-lg items-center ${ select === "Home" ? "bg-lime-700" : ""}`}>
                <IoHomeSharp className=''/>
                <span>Home</span>
            </Link>
            <div onClick={()=>setSelect("Orders")} className={`text-white rounded-lg flex cursor-pointer py-3 px-3 gap-5 text-lg items-center ${ select == "Orders" ? "bg-lime-700" : ""}`}>
                <IoBag className=''/>
                <span>Orders</span>
            </div>
            <Link href="/dashboard/products" onClick={()=>setSelect("Products")} className={`text-white rounded-lg flex cursor-pointer py-3 px-3 gap-5 text-lg items-center ${ select === "Products" ? "bg-lime-700" : ""}`}>
                <FaTag className=''/>
                <span>Products</span>
            </Link>
            <div onClick={()=>setSelect("Customers")} className={`text-white rounded-lg flex cursor-pointer py-3 px-3 gap-5 text-lg items-center ${ select === "Customers" ? "bg-lime-700" : ""}`}>
                <GoPeople className=''/>
                <span>Customers</span>
            </div>
        </div>
    </div>
  )
}

export default Asidebar