"use client";
import { Card, CardHeader,CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen min-w-screen bg-zinc-950">
      <div className="fex grid grid-cols-3">
        <div className="min-h-screen">
            <Card><CardHeader><CardTitle className="green-faded"><h1 className="text-xl font-bold">Dashboard</h1></CardTitle></CardHeader></Card>
        </div>
        <div className="min-h-screen">
            <Card><CardHeader><CardTitle className="green-faded"><h1 className="text-xl font-bold">Dashboard</h1></CardTitle></CardHeader></Card>
        </div>
        <div className="min-h-screen">
            <Card><CardHeader><CardTitle className="green-faded"><h1 className="text-xl font-bold">Dashboard</h1></CardTitle></CardHeader></Card>
        </div>
      </div>
      <div className="p-10 text-white">Dashboard Page Content</div>
    </div>
  );
}
