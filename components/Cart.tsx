"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/store/store";
import Image from "next/image";
import { decreasequantity, increasequantity, removefromcart } from "@/slices/cart/cartslice";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch()
    console.log(cart);

    return (
        <div className="p-6 gap-6 h-[88vh] overflow-x-hidden ">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 flex flex-col">
                            <div className="w-full h-40 flex justify-center items-center">
                                <Image src={item.image} alt={item.title} width={100} height={100} objectFit="contain" className="rounded-lg"/>
                            </div>
                            <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
                            <p className="text-green-600 font-bold text-xl mt-2">${item.price}</p>
                            <div className="flex gap-5 items-center mt-2">
                            <span onClick={()=>dispatch(increasequantity(item))} className="bg-yellow-300 rounded py-2 px-3 cursor-pointer">+</span>
                            <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                            <span onClick={()=>dispatch(decreasequantity(item))} className="bg-yellow-300 rounded py-2 px-3 cursor-pointer">-</span>
                            </div>
                            <button onClick={()=>dispatch(removefromcart(item))} className="bg-lime-700 mt-2 text-white py-2 rounded ">Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
