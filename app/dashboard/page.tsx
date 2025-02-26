
import Image from "next/image";
import market from '../../assets/market.png'

export default function Home() {
  return (
    <>
      <div className="flex flex-col px-20 pt-10 justify-center items-center gap-5 bg-green-100">
        <h1 className="text-4xl font-bold">Welcome To Bazar</h1>
        <div>
          <Image src={market} className="w-full h-[74.1vh]" alt="" />
        </div>
      </div>
    </>
  );
}
