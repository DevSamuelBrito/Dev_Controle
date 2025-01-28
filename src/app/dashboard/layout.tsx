import React, { ReactNode } from "react";
import { DashBoardHeader } from "./components/header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DashBoardHeader />
      {children}
    </>
  );
}
