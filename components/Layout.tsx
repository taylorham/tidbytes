import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return <div style={{ zIndex: 1 }}>{children}</div>;
}
