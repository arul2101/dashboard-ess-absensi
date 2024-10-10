"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { toast } from "sonner"

import { Input } from "@/components/ui/input"

export default function LoginForm() {
    const [usernameInput, setUsernameInput] = React.useState();
    const [passwordInput, setPasswordInput] = React.useState();

    const handleLogin = () => {
        if(!usernameInput?.trim("") || !passwordInput?.trim("")) {
            toast.error("Username or password cannot blank!");
            return;
        }
    }
    
    return (
      <section className="flex justify-center items-center h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-3xl">Login</CardTitle>
            <CardDescription>Employee Self-Service</CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="Username" className="mb-4" onKeyDown={(e) => {
                setUsernameInput(e.currentTarget.value)
            }}/>
            <Input type="password" placeholder="Password" onKeyDown={(e) => {
                setPasswordInput(e.currentTarget.value)
            }} />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="text-white" onClick={handleLogin}>Login</Button>
          </CardFooter>
        </Card>
      </section>
    )
}
