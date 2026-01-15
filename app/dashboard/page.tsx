"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChartAreaInteractive } from "../playground/page";
import SpotlightCard from "@/components/ui/spotlight-card";

const items = [
  { title: "Account Balance", value: "107.000 $" },
  { title: "Active Sessions", value: "7,642" },
  { title: "Server Uptime", value: "99.9%" },
  { title: "New Signups", value: "89" },
];

export default function DashboardPage() {
  const { useRouter } = require("next/navigation");
  const router = useRouter();

  return (
    <div className="bg-zinc-main min-h-screen flex flex-col">
      {/* Header*/}
      <nav className="fixed left- w-full z-50 bg-white shadow-md">
        <header className="p-2 bg-zinc-main border-b shadow-lg w-full">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <BarChart3 className="text-emerald-500" size={20} />
              <h1 className="text-sm font-medium text-white">
                myTradingJourney
              </h1>
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
      </nav>

      {/* Main Content mit Sidebars */}
      <div className="flex flex-1 pt-14 w-full">
        {/* Linke Sidebar */}


    
        {/* Hauptinhalt */}
        <div className="flex-1 min-h-screen border-r border-l border-zinc-700">
          <h1 className="text-2xl font-medium p-4 text-white">Overview</h1>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <Card
                key={index}
                className={cn(
                  "border-0 shadow-initial rounded-3xl",
                  index === 1 || index === 3
                    ? "bg-superlight-card"
                    : "bg-light-card"
                )}
              >
                <CardHeader className="flex flex-col gap-2 m-4">
                  <CardTitle className="text-black flex">
                    {item.title}
                  </CardTitle>
                  <p className="text-black text-4xl mt-2 font-bold">{item.value}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="flex gap-4">
            <div className="w-1/3 pl-4">
              <SpotlightCard />
            </div>
            <div className="w-2/3 pr-4">
              <ChartAreaInteractive />
            </div>
          </div>
          <div className="flex rounded-3xl bg-zinc-card h-100 m-4 pr-4"></div>
        </div>
      </div>
    </div>
  );
}
