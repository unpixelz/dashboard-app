import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardLoading } from "@/components/dashboard-loading";
import { DashboardView } from "../view/page";

export default function DashboardPage() {
  return (
    <DashboardLoading>
      <div className="bg-zinc-main min-h-screen flex flex-col">
        <DashboardHeader />
        
        <div className="flex h-screen pt-12 w-full">
          {/* Linke Sidebar */}
          <aside
            id="default-sidebar"
            className="fixed left-0 top-14 z-40 w-64 h-[calc(100vh-3.5rem)] transition-transform -translate-x-full sm:translate-x-0 bg-neutral-primary-soft border-default"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-default">
              <ul className="space-y-2 font-medium">

              </ul>
            </div>
          </aside>
          
          {/* Hauptinhalt */}
          <main className="flex-1 ml-0 sm:ml-64 overflow-y-auto">
            <DashboardView />
          </main>
        </div>
      </div>
    </DashboardLoading>
  );
}