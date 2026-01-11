import { LoginForm } from "@/components/login-form";
import Spline from "@splinetool/react-spline";

/* Login Seite mit 3D Hintergrund und Login Formular */

export default function LoginPage() {
  return (
    <div className="bg-black flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="absolute inset-0 z-0 blur-xl">
        <Spline
          scene="https://prod.spline.design/MzN0bZlpOtOYb7eo/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      <div className="w-full max-w-sm flex flex-col items-center gap-6 z-10">
        <LoginForm />
      </div>
    </div>
  );
}
