import React from "react";
import { Header } from "./Header/Header.component";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
