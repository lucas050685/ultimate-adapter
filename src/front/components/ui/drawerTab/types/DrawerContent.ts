import { ReactNode } from "react";
import { DrawerTabId } from "./DrawerTabId";

export type DrawerContent = { 
  id?: DrawerTabId,
  content: ReactNode,
}