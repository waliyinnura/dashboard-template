import { Dashboard } from "@/components/Dashboard";
import { SidebarNav } from "@/components/SidebarNav";
import { useState } from "react";

export default function Home() {
  const [activePage, setActivePage] = useState("Dashboard");
  return (
    <main>
      <SidebarNav activePage={activePage} setActivePage={setActivePage}>
        <Dashboard activePage={activePage} />
      </SidebarNav>
    </main>
  );
}
