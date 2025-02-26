import Products from '@/components/Products'
import React from 'react'

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

const page = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products: Product[] = await res.json();
    return (
        <div>
            <Products products={products}/>
        </div>
    )
}

export default page