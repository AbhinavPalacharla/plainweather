import React from "react";
import { Header } from "./Header/Header.component";
import { CommandPallet } from "./CommandPallet/CommandPallet.component";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <CommandPallet />
      <Header />
      <main>{children}</main>
    </div>
  );
};
