import { PropsWithChildren, useState, useCallback, ReactNode } from 'react';
import { v4 as uuid } from 'uuid';
import { DrawerContext } from "./DrawerContext";
import { DrawerTab } from './DrawerTab';
import { DrawerContent, DrawerTabId } from './types';

export function DrawerProvider({ children }: PropsWithChildren){
  const [drawerList, setDrawerList] = useState<Required<DrawerContent>[]>([]);

  const push = useCallback((content: ReactNode, id?: DrawerTabId): DrawerTabId => {
    const drawerContent = {
      content,
      id: id ?? uuid(),
    }

    setDrawerList((currentList) => {
      return [... currentList, drawerContent]
    });

    return drawerContent.id;
  }, []);

  const back = async (): Promise<DrawerTabId | undefined> => {
    const removedDrawer = drawerList.pop();
    setDrawerList(drawerList);
    return removedDrawer?.id;
  }

  const remove = async (removeId: DrawerTabId): Promise<DrawerTabId> => {
    const newList = drawerList.filter(({ id }) => id !== removeId );
    setDrawerList(newList);
    return removeId;
  }

  const getDrawerList = () => {
    return drawerList.map(({ content, id }, index) => {
      return <DrawerTab key={id} id={id} position={index}>{ content }</DrawerTab>
    })
  }

  return (
    <DrawerContext.Provider value={{ push, back, remove }}>
      { getDrawerList() }
      { children }
    </DrawerContext.Provider>
  );
}