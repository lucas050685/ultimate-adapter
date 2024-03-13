import { ReactNode, createContext } from 'react';
import { DrawerTabId } from './types';


export type DrawerContextValue = {
  push: (content: ReactNode, id?: DrawerTabId) => DrawerTabId;
  back: () => Promise<DrawerTabId | undefined>;
  remove: (id: DrawerTabId) => Promise<DrawerTabId>;
}

const defaultValue: DrawerContextValue = {
  push: () => {
    throw new Error('Method not implemented')
  },
  back: () => {
    throw new Error('Method not implemented')
  },
  remove: () => {
    throw new Error('Method not implemented')
  },
}

export const DrawerContext = createContext<DrawerContextValue>(defaultValue);