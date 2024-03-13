import { useContext } from 'react';
import { DrawerContext } from './DrawerContext';
import { DrawerTabContext } from './DrawerTabContext';

export function useDrawer(){
  const drawerFunctions = useContext(DrawerContext);
  const drawerTabFunctions = useContext(DrawerTabContext);
  
  return {
    ...drawerFunctions,
    ...drawerTabFunctions
  }
}