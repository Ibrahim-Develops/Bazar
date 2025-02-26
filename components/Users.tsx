"use client";

import { FetchUser } from "@/app/actions/users";
import { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: "male" | "female" | string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: { color: string; type: string };
  university: string;
  company: { name: string; title: string };
}

const Users = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await FetchUser();
        setData(users.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-8 bg-gray-100 h-[88vh] overflow-x-hidden text-center">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        User List
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center"
          >
            <img
              src={user.image}
              alt={user.firstName}
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <h3 className="text-xl font-semibold mt-3 text-gray-800">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-sm text-gray-600">Age: {user.age} | {user.gender}</p>
            <p className="text-sm text-gray-500">Username: {user.username}</p>
            <p className="text-sm text-gray-500">Email: {user.email}</p>
            <p className="text-sm text-gray-500">Phone: {user.phone}</p>
            <p className="text-sm text-gray-500">Blood Group: {user.bloodGroup}</p>
            <p className="text-sm text-gray-500">Height: {user.height} cm | Weight: {user.weight} kg</p>
            <p className="text-sm text-gray-500">Eye Color: {user.eyeColor}</p>
            <p className="text-sm text-gray-500">Hair: {user.hair.color} ({user.hair.type})</p>
            <p className="text-sm text-gray-500 font-medium mt-2">University: {user.university}</p>
            <p className="text-sm text-gray-500 font-medium">Company: {user.company.name}</p>
            <p className="text-sm text-gray-500">{user.company.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
