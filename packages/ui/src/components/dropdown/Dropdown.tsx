import React from 'react';
import { NavLink } from 'react-router-dom';
import Popper from 'popper.js';
import { IDropdownProps } from './types';
import { IMenuItemProps } from '../sidebar/types';
import { Icon } from '../icon';

export const Dropdown: React.FC<IDropdownProps> = ({
  placement = 'bottom-end',
  title,
  menuItems,
  ...props
}) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<HTMLButtonElement>();
  const popoverDropdownRef = React.createRef<HTMLUListElement>();
  const openDropdownPopover = () => {
    new Popper(
      btnDropdownRef.current as HTMLButtonElement,
      popoverDropdownRef.current as HTMLUListElement,
      {
        placement: placement,
      },
    );
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <div className="relative">
      <button
        className="p-2 border-2 rounded-md border-gray-600 dark:hover:bg-gray-700 dark:text-white outline-none focus:outline-none"
        ref={btnDropdownRef}
        onClick={() => {
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {title}
      </button>
      <ul
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'w-56 p-2 mt-2  text-sm font-semibold text-gray-600 bg-white border border-gray-100 rounded-md shadow-md'
        }
      >
        {menuItems.map((item: IMenuItemProps) => (
          <li key={item.path} className="relative px-2 py-1">
            <NavLink
              exact
              to={item.path}
              className="inline-flex items-center w-full cursor-pointer  hover:text-gray-800 hover:bg-gray-100"
              activeClassName="text-gray-800"
            >
              <Icon className="w-5 h-5" icon={item.icon} />
              <span className="ml-3">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
