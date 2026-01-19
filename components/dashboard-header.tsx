// components/dashboard-header.tsx
"use client";

import { Button } from "@/components/ui/button";
import { LogOut, Bolt } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/app/hooks/useAuth";
import { toast } from "sonner";

export function DashboardHeader() {
  const { session, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Erfolgreich ausgeloggt");
    } catch (error) {
      toast.error("Logout fehlgeschlagen");
    }
  };

  return (
    <nav className="top-0 fixed left-0 w-full z-50 bg-white shadow-md">
      <header className="p-2 bg-zinc-main border-b shadow-lg w-full">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-sm font-medium text-white">
              {session?.user.email}
            </h1>
          </div>
          <div className="flex items-center">
            <Button
              variant="outline"
              className="text-white mr-2"
              size="icon-sm"
            >
              <Bolt size={14} />
            </Button>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  className="bg-red-900 hover:bg-red-950 border-red-600 border text-white"
                  size="icon-sm"
                  onClick={handleLogout}
                >
                  <LogOut size={14} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ausloggen</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </header>
    </nav>
  );
}