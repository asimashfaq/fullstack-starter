import React, { useContext } from 'react';
import '../../style.css';
import { SidebarContent } from './internals/SidebarContent';
import { ISideBarProps } from './types';
import { isRenderer } from '../../types';
import { SidebarContext } from '../../context/sidebar.context';
import { Backdrop } from '../backdrop';
import { motion } from "framer-motion";

const sidebar = {
  open: { 
    x: 0, 
    transition: {
      duration: 0.5,
    }
  },
  closed: {  
    x: "-40%"
  },
};

export const Sidebar: React.FC<ISideBarProps> = ({
  menuItems,
  title,
  ...props
}) => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  return (
    <>
      <Backdrop className={`${isSidebarOpen ? 'block' : 'hidden'}`} onClick={closeSidebar as any} />
      <motion.div
        initial={false}
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebar}
        className={'absolute z-50 h-full mt-16'}
      >
        <aside className={`flex h-full flex-shrink-0 w-64 overflow-y-auto z-30 bg-white dark:bg-gray-800 dark:text-white ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <div className="py-4 w-full h-full">
            {isRenderer(title) ? (
              title.render(props)
            ) : (
              <a className="text-xl font-bold ml-4">{title && title}</a>
            )}
            <SidebarContent menuItems={menuItems} />
          </div>
        </aside>
      </motion.div>
    </>
  );
};
