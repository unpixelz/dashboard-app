"use client";

import { ChartNoAxesCombined } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm({
  className,
  setErrorMessage,
  ...props
}: React.ComponentProps<"div"> & {
  setErrorMessage?: (msg: string | null) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient();
  const router = useRouter();

  

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setErrorMessage?.(null);

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setErrorMessage?.(error.name + ": " + error.message);
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  }


  return (
    <div
      className={cn(
        "flex flex-col gap-6 animate-in fade-in duration-1000 delay-500",
        className
      )}
      {...props}
    >
      <form onSubmit={handleLogin}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium pb-10"
            >
              <div className="flex size-30  items-center justify-center rounded-md">
                <ChartNoAxesCombined className="size-30" />
              </div>
            </a>
            <h1 className="text-xl font-bold">Willkommen zurück, tim</h1>
          </div>
          <div className="grid place-items-center">
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                required
              />
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </Field>
          </div>
          <Field>
            <Button
              className="transition active:scale-95 hover:bg-zinc-350"
              type="submit"
            >
              Login
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        Dein persönliches All-in-one Dashboard.
      </FieldDescription>
    </div>
  );
}
