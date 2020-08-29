import React from 'react';
import '../../style.css';
import { SidebarContent } from './internals/SidebarContent';
import { ISideBarProps } from './types';
import { isRenderer } from '../../types';

export const Sidebar: React.FC<ISideBarProps> = ({
  menuItems,
  title,
  ...props
}) => {
  return (
    <aside className="flex box-border flex-wrap flex-grow w-64 border-r-2 border-gray-400 overflow-hidden lg:z-30 block bg-white">
      <div className="py-4 w-full h-full">
        {isRenderer(title) ? (
          title.render(props)
        ) : (
          <a className="text-xl font-bold ml-4">{title && title}</a>
        )}
        <SidebarContent menuItems={menuItems} />
      </div>
    </aside>
  );
};
