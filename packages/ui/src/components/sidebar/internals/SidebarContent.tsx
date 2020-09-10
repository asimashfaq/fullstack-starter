import React from 'react';
import '../../../style.css';
import { Icon } from '../../icon';
import { IMenuItemProps, ISideBarProps } from '../types';

export const SidebarContent: React.FC<ISideBarProps> = ({ menuItems }) => {
  return (
      <ul className="font-semibold text-sm mt-6">
        {menuItems.map((item: IMenuItemProps) => (
          <li key={item.path} className="relative px-6 py-3">
            <a
              href={item.path}
              className="inline-flex items-center w-full  cursor-pointer text-gray-500 hover:text-gray-700"
            >
              <Icon className="w-5 h-5" icon={item.icon} />
              <span className="ml-4">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>   
  );
};
