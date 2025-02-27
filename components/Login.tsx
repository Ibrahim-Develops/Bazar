import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex items-center justify-center p-4 h-full w-full">
      <Link href="/dashboard">
        <Button className="absolute top-8 left-10 bg-lime-700 hover:bg-lime-800">
          Back To Home page
        </Button>
      </Link>

      <Card className="w-full mt-28 max-w-sm shadow-lg rounded-2xl border border-gray-200 bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">Login</CardTitle>
          <CardDescription className="text-gray-500">
            Enter your credentials to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1"
              />
            </div>
            <Button className="w-full mt-2 bg-lime-700 hover:bg-lime-800">Login</Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-gray-500 flex justify-center">
          Donot have an account?{" "}
          <span className="text-green-600 cursor-pointer ml-1 hover:underline">
            Sign Up
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
