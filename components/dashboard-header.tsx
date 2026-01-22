// components/dashboard-header.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, Bolt } from "lucide-react";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/app/hooks/useAuth";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { set } from "date-fns";

export function DashboardHeader() {
  const { session, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

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
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <Button
                variant="outline"
                className="text-white mr-6"
                size="icon-sm"
                onClick={() => {setIsOpen(true);}}
              >
                <Plus size={14} />
              </Button>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create Trade</DialogTitle>
                  <DialogDescription>
                    Create a new trade to track your investment. Fill in the details below.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1"></Label>
                    <Input
                      id="name-1"
                      name="name"
                      defaultValue="Pedro Duarte"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Username</Label>
                    <Input
                      id="username-1"
                      name="username"
                      defaultValue="@peduarte"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button
              variant="outline"
              className="text-white mr-2"
              size="icon-sm"
              onClick={() => {
                toast.info("Feature in Arbeit...");
              }}
            >
              <Bolt size={14} />
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
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
