import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChartAreaInteractive } from "../playground/page";
import SpotlightCard from "@/components/ui/spotlight-card";

const items = [
  { title: "Account Balance", value: "107.000 $" },
  { title: "Active Sessions", value: "7,642" },
  { title: "Server Uptime", value: "99.9%" },
  { title: "New Signups", value: "89" },
];

export default function DashboardView() {
  return (
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
              <CardTitle className="text-black flex">{item.title}</CardTitle>
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
  );
}