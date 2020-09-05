import React from 'react';
import '../../../style.css';
import { NavLink, Route } from 'react-router-dom';
import { Icon } from '../../icon';
import { IMenuItemProps, ISideBarProps } from '../types';

export const SidebarContent: React.FC<ISideBarProps> = ({ menuItems }) => {
  return (
      <ul className="font-semibold text-sm mt-6">
        {menuItems.map((item: IMenuItemProps) => (
          <li key={item.path} className="relative px-6 py-3">
            <NavLink
              exact
              to={item.path}
              className="inline-flex items-center w-full  cursor-pointer text-gray-500 hover:text-gray-700"
              activeClassName="text-gray-800"
            >
              <Route path={item.path} exact={item.exact}>
                <span className="absolute w-1 inset-y-0 left-0 border-l-4 border-purple-600 rounded-r-md"></span>
              </Route>
              <Icon className="w-5 h-5" icon={item.icon} />
              <span className="ml-4">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>   
  );
};
