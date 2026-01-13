"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { BarChart3, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
export default function DashboardPage() {
  const { useRouter } = require("next/navigation");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="p-2 m-4 bg-zinc-900 border border-zinc-800 rounded-lg max-w-full shadow-lg">
        <div className="flex items-center justify-between">w
          <div className="flex items-center gap-4">
            <BarChart3 className="text-emerald-500" size={20} />
            <h1 className="text-sm font-medium font-sans">myDashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <form
              onSubmit={() => {
                router.push("/login");
              }}
            >
              <Button
                className="text-xs transition active:scale-95 hover:bg-zinc-350"
                type="submit"
                variant="destructive"
              >
                Logout
                <LogOut />
              </Button>
            </form>
          </div>
        </div>
      </header>
      <div className="p-10 text-white">Dashboard Page Content</div>
    </div>
  );
}
