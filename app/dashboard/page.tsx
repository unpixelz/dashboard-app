"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChartAreaInteractive } from "../playground/page";
import SpotlightCard from "@/components/ui/spotlight-card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useEffect } from "react";
import { createClient } from "@/lib/supabase";
import { se } from "date-fns/locale";
import DashboardView from "../view/page";
import { redirect } from "next/dist/server/api-utils";
import { toast } from "sonner";

export default function DashboardPage() {
  const { useRouter } = require("next/navigation");
  const router = useRouter();
  const supabase = createClient();

  const [session, setSession] = useState<any>(null);

  // Session abrufen

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
    setSession(currentSession.data.session);
  };

  useEffect(() => {
    fetchSession();
  }, []);


  // Logout
  const handleLogout = async () => {

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Logout fehlgeschalen: " + error.message);
      return;
    }
    console.log("Logout success");
    router.push("/login");
  };

  return (
    <>
      {session ? (
        <div className="bg-zinc-main min-h-screen flex flex-col">
          {/* Header*/}
          <nav className="fixed left- w-full z-50 bg-white shadow-md">
            <header className="p-2 bg-zinc-main border-b shadow-lg w-full">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-4">
                  <BarChart3 className="text-emerald-500" size={20} />
                  <h1 className="text-sm font-medium text-white">
                    {session.user.email}
                  </h1>
                </div>
                <div className="flex items-center">
                  {/* Logout button */}
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        className="bg-red-900 hover:bg-red-950 border-red-600 border text-white"
                        size="icon"
                        onClick={handleLogout}
                      >
                        <LogOut size={14} className="ml-1" />
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

          <div className="flex flex-1 pt-14 w-full">
            {/* Linke Sidebar */}
            <aside
              id="default-sidebar"
              className="top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
              aria-label="Sidebar"
            >
              <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
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
            <DashboardView />
          </div>
        </div>
      ) : (
        <div className="text-6xl text-white">NO SESSION</div>
      )}
    </>
  );
}
