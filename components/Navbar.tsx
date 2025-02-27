"use client"

import { RootState } from "../lib/store/store";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state: RootState)=> state.cart)
  
  return (
    <>
    <div className='flex justify-between w-full px-20 py-8 bg-lime-900 h-20 text-white'>
        <div className=""></div>
        <div className='flex gap-10'>
            <Link href="/login">Login</Link>
        </div>
        <Link href="/dashboard/cart">
        <div>
        <CiShoppingCart className="text-4xl mt-[-5px] cursor-pointer"/>
          <div className="bg-red-500 w-5 h-5 text-center rounded-full text-sm relative bottom-10">{cart.length}</div>
        </div>
        </Link>
    </div>
    </>
  )
}

export default Navbar