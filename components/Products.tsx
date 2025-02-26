"use client";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removefromcart } from "../slices/cart/cartslice";
import Image from "next/image";
import { RootState } from "../lib/store/store";
import Link from "next/link";

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

interface ProductsProps {
    products: Product[];
}

const Products = ({ products }: ProductsProps) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);

    return (
        <div className="overflow-x-hidden h-[88vh] bg-green-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

                {products.map((productitem) => {
                    const isInCart = cart.some(item => item.id === productitem.id);

                    return (
                        <div key={productitem.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col justify-between hover:scale-105">
                            <Link href={`/dashboard/products/${productitem.id}`}  className="w-full h-40 flex justify-center items-center">
                                <Image src={productitem.image} alt={productitem.title} width={100} height={100} className="rounded-lg mx-auto object-contain dp" />
                            </Link>
                            <div className="flex flex-col flex-grow">
                                <h2 className="text-lg font-semibold mt-4 text-gray-800">{productitem.title}</h2>
                                <p className="text-green-600 font-bold text-xl mt-2">${productitem.price}</p>
                                <p className="text-gray-500 text-sm mb-4">{productitem.category}</p>

                                {isInCart ? (
                                    <button
                                        className="mt-auto bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition"
                                        onClick={() => dispatch(removefromcart(productitem))}
                                    >
                                        Remove From Cart
                                    </button>
                                ) : (
                                    <button
                                        className="mt-auto bg-lime-700 text-white py-2 rounded-lg hover:bg-lime-800 transition"
                                        onClick={() => dispatch(addToCart(productitem))}
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    );
};

export default Products;
