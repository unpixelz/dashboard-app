import { Hexagon } from "lucide-react";

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
import { use } from "react";
import { userInfo } from "os";
import { userAgent } from "next/server";


const username = "Tim";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium pb-10"
            >
              <div className="flex size-30  items-center justify-center rounded-md">
                <Hexagon className="size-30" />
              </div>
            </a>
            <h1 className="text-xl font-bold">Willkommen zurück, {username}</h1>
          </div>
          <div className="grid place-items-center">
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="username"
                required
              />
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </Field>
          </div>
          <Field>
            <Button className="transition active:scale-95 hover:bg-zinc-350" type="submit">Login</Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        Dein persönliches All-in-one Dashboard.
      </FieldDescription>
    </div>
  );
}