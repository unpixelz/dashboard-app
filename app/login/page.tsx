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
      <div className="w-1/2 h-screen bg-zinc-main animate-slide-in-left">
      </div>
      <div className="w-1/2 flex items-center justify-center z-10">
        <LoginForm setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
}
