"use client";

import { AppDispatch, RootState } from "@/lib/store/store";
import { fetchTodo } from "@/slices/cart/todos";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Todo {
  id: number;
  userId: number;
  todo: string;
  completed: boolean;
}

const Todos = () => {
  const [data, setData] = useState<Todo[]>([]);
  const todo = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (todo.data) {
      setData(todo.data);
    }
  }, [todo.data]);

  return (
    <div className="flex justify-center items-center flex-col w-full h-[88vh]">
      <button onClick={() => dispatch(fetchTodo())} className="bg-cyan-500 text-white py-2 px-4 mt-5 rounded">Get Todo</button>
      <div className="mt-1 space-y-4  h-[88vh] overflow-x-hidden w-full px-10">
        {data.map((item) => (
          <div 
            key={item.id} 
            className={`p-4 border rounded-lg shadow-md${
              item.completed ? "bg-green-100 border-green-400 " : "bg-white border-red-300 "
            }`}
          >
            <p className="text-gray-700 text-sm">User ID: <span className="font-semibold">{item.userId}</span></p>
            <p className="text-lg font-medium text-gray-900">{item.todo}</p>
            <p 
              className={`text-sm font-semibold mt-2 ${
                item.completed ? "text-green-600" : "text-red-500"
              }`}
            >
              {item.completed ? "Completed ✅" : "Pending ❌"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
