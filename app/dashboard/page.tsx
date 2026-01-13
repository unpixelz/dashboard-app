"use client";
import { Card, CardHeader,CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { BarChart3 } from 'lucide-react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="p-2 m-4 bg-zinc-900 border border-zinc-800 rounded-lg max-w-4xl shadow-lg">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-4">
              <BarChart3 className="text-emerald-500" size={24} />
              <h1 className="text-sm font-medium font-sans">myDashboard</h1>
            </div>
          </div>
        </header>
      <div className="p-10 text-white">Dashboard Page Content</div>
    </div>
  );
}
