"use client";

import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}

interface DisplayProductsProps {
  product: Product;
}

const DisplayProducts = ({ product }: DisplayProductsProps) => {
  return (
    <div className="flex justify-center items-center h-[88vh]">
      <div className=" w-full bg-white  rounded-lg p-6 flex gap-10 justify-between mx-20">
        <Image src={product.image} alt="img" width={350} height={100}/>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-lg font-bold text-seagreen mt-3">${product.price}</p>
          <p className="text-sm text-gray-500 mt-1">Category: {product.category}</p>

          <div className="mt-3 flex items-center">
            <span className="text-yellow-500 text-lg font-bold">{product.rating.rate} ★</span>
            <span className="ml-2 text-gray-500">({product.rating.count} reviews)</span>
          </div>

          <button className="mt-4 w-full  text-white py-2 rounded-lg bg-green-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
