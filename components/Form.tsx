"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/textarea";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
    name: string,
    email: string,
    message: string,
    firstname: string,
    secondname: string,
};

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm<Inputs>();
    const names = watch("name")
    const onSubmit = (data: Inputs) => {
    console.log(data);
    toast.success("Form submitted successfully!", { autoClose: 1000 });
    reset()
    }

    return (
        <div className="h-[88vh] overflow-x-hidden">
            <div onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 border rounded-lg shadow-md mt-16">
                <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
                <form className="space-y-4">
                    <div>   
                        <label className="block text-sm font-medium">Name</label>
                        <select {...register("name")} className="w-full p-2 border rounded">
                            <option>Select</option>
                            <option value={"firstname"}>First Name</option>
                            <option value={"secondname"}>Second Name</option>
                        </select>
                    </div>
                    {names === "firstname" ? (
                        <>
                        <div>
                            <label className="block text-sm font-medium">First Name</label>
                            <Input {...register("firstname", { required: "First Name Is Required" })} className={` w-full p-2 border-black border rounded focus:outline-black ${errors.firstname ? "border-red-500 focus:outline-red-400" : ""}`}/>
                            {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
                        </div>
                        </>
                    ) : names === "secondname" ? (
                        <>
                        <div>
                            <label className="block text-sm font-medium">Second Name</label>
                            <Input {...register("secondname", { required: "Second Name Is Required" })} className={`w-full p-2 border-black border rounded focus:outline-black ${errors.secondname ? "border-red-500 focus:outline-red-400" : ""}`}/>
                            {errors.secondname && <p className="text-red-500 text-sm mt-1">{errors.secondname.message}</p>}
                        </div>
                        </>
                    )
                    : "" }
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <Input {...register("email", { required: "Email Is Required" })} className={`w-full p-2 border-black rounded focus:outline-black  ${errors.email ? "border-red-500 focus:outline-red-400" : ""}`}/>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Message</label>
                        <Textarea {...register("message", { required: "Message Is Required" })} className={`w-full p-2 border-black border rounded focus:outline-black ${errors.message ? "border-red-500 focus:outline-red-400" : ""}`}></Textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700">Submit</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Form