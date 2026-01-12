'use client'

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { LoginForm } from "@/components/login-form";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { Terminal } from "lucide-react";

export default function LoginPage() {

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <div className="bg-black flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="absolute inset-0 z-0 blur-xl animate rotate-infinite-slow">
        <Spline
          scene="https://prod.spline.design/MzN0bZlpOtOYb7eo/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      <div className="z-10 w-full max-w-sm animate-out fade-out delay-1000">
        {errorMessage && (
          <Alert variant="destructive" className='bg-destructive dark:bg-destructive/20 border-2 text-white'>
            <Terminal />
            <AlertTitle>Login Error</AlertTitle>
            <AlertDescription className='text-white/80'>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </div>
      <div className="w-full max-w-sm flex flex-col items-center gap-6 z-10">
        <LoginForm setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
}
