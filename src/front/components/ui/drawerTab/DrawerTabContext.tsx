import { createContext } from "react";
import { DrawerTabId } from "./types";

export type DrawerTabContextValue = {
  close: () => Promise<void>;
  id: DrawerTabId;
}

export const DrawerTabContext = createContext<DrawerTabContextValue | undefined>(undefined);
