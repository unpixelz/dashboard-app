"use client";
import { BarChart3, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Bolt } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import DashboardView from "../view/page";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { toast } from "sonner";

export default function DashboardPage() {
  // Auth + getSession
  const { session, loading, logout, user } = useAuth();

  // Logout Handler

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Erfolgreich ausgeloggt");
    } catch (error) {
      toast.error("Logout fehlgeschlagen");
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-main">
        <div className="text-white text-xl">loading</div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-main min-h-screen flex flex-col">
      {/* Header*/}
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
              {/* Buttons rechts */}
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

      <div className="flex h-screen pt-12 w-full">
        {/* Linke Sidebar */}
        <aside
          id="default-sidebar"
          className="fixed left-0 top-14 z-40 w-64 h-[calc(100vh-3.5rem)] transition-transform -translate-x-full sm:translate-x-0 bg-neutral-primary-soft border-default"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-default">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                >
                  <svg
                    className="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  ></svg>
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        {/* Hauptinhalt */}
        <main className="flex-1 ml-0 sm:ml-64 overflow-y-auto">
          <DashboardView />
        </main>
      </div>
    </div>
  );
}
