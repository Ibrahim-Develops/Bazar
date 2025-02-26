import DisplayProducts from '@/components/DisplayProducts'

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

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();
  
  return (
    <div>
      <DisplayProducts product={product}/>
    </div>
  )
}

export default page