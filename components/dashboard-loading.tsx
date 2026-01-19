"use client";

import { useAuth } from "@/app/hooks/useAuth";

export function DashboardLoading({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-main">
        <div className="text-white text-xl">loading</div>
      </div>
    );
  }

  return <>{children}</>;
}