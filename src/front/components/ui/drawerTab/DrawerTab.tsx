import { CSSProperties, PropsWithChildren, StyleHTMLAttributes, useContext } from 'react';
import { DrawerTabContext } from './DrawerTabContext';
import { DrawerContext } from './DrawerContext';
import { DrawerTabId } from './types';
import clsx from 'clsx';
import './css/drawerTab.css';


export type DrawerTabProps = PropsWithChildren<{
  id: DrawerTabId,
  position?: number,
}>

export function DrawerTab({ children, id, position = 0 }: DrawerTabProps) {
  const { remove } = useContext(DrawerContext);

  const close = async () => {
    await remove(id);
  }

  const defaultPadding = 200;
  const padding = position * defaultPadding + defaultPadding;
  const bgStyle: CSSProperties = { paddingLeft: `${padding}px` };
  const bgClassName = `bg-black/10 absolute w-full h-full z-[9999]`;
  const containerClassName = 'bg-white p-6 relative h-full';

  return (
    <DrawerTabContext.Provider value={{ close, id }}>
      <div className={bgClassName} style={bgStyle}>
        <div className={clsx('drawerTabContainer', containerClassName)}>
          {children}
        </div>
      </div>
    </DrawerTabContext.Provider>
  );
}