import React, { useContext } from 'react';
import '../../style.css';
import { SidebarContent } from './internals/SidebarContent';
import { ISideBarProps } from './types';
import { isRenderer } from '../../types';
import { SidebarContext } from '../../context/sidebar.context';
import { Backdrop } from '../backdrop';
import { motion } from "framer-motion";
import styled from 'styled-components';

const sidebar = {
  open: { 
    x: 0, 
    transition: {
      duration: 0.2,
    }
  },
  closed: {  
    x: "-400px"
  },
};
const SidebarWrapper = styled.div`
  grid-area: sidenav;
`;
export const Sidebar: React.FC<ISideBarProps> = ({
  menuItems,
  title,
  ...props
}) => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  return (
    <SidebarWrapper>
      <Backdrop className={ 'hidden'} onClick={closeSidebar as any} />
      <motion.div
        initial={"open"}
        animate={isSidebarOpen ? "open": "closed"}
        variants={sidebar}
        className={'z-50 h-full'}
      >
        <aside className={`flex h-full flex-shrink-0 w-64 overflow-y-auto z-30 bg-white shadow-md block`}>
          <div className="pt-5 w-full h-full">
            {isRenderer(title) ? (
              title.render(props)
            ) : (
              <a className="text-xl font-bold ml-4">{title && title}</a>
            )}
            <SidebarContent menuItems={menuItems} />
          </div>
        </aside>
      </motion.div>
    </SidebarWrapper>
  );
};
