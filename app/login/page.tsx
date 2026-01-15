"use client";

import { toast } from "sonner";
import { LoginForm } from "@/components/login-form";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { useEffect } from "react";
import { Terminal } from "lucide-react";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  return (
    <div className="bg-black flex min-h-svh items-center justify-center">
      <div className="flex">
        <div className="blur-xl absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/lasers.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="w-1/2 h-screen border relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="h-1/2 flex w-full items-center justify-center text-white border-r border-white">
            <h1 className=" text-8xl font-bold py-2 text-center w-md">
              Your All in One Trading Panel.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen flex rounded-4xl items-center justify-center z-10">
        <LoginForm setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
}
