import React from 'react';
import '../../style.css';
import { MenuIcon } from '@bcdapps/icons';
import { Dropdown } from '../dropdown';
import { NavLink } from 'react-router-dom';
import { ThemeSwitchButton } from '../theme-switcher';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <div className="bg-white shadow-md dark:bg-gray-800 ">
      <header className="px-6 py-4 ">
        <div className="flex flex-row justify-between items-center">
          <NavLink to={'/'} className="cursor-pointer">
            <MenuIcon className="dark:text-white" />
          </NavLink>
          <ul className="flex flex-row flex-shrink-0 space-x-6 justify-end items-center ">
            <li className="cursor-pointer">
              <ThemeSwitchButton />
            </li>
            {props.rightDropdown ? (
              <li>
                <Dropdown title={props.rightDropdown.title} menuItems={props.rightDropdown.menuItems} />
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
};
