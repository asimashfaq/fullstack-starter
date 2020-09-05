import React, { useContext } from 'react';
import '../../style.css';
import { Dropdown } from '../dropdown';
import { Button } from '../button';
import { ThemeSwitchButton } from '../theme-switcher';
import { HeaderProps } from './types';
import { SidebarContext } from '../../context/sidebar.context';
import { Icon } from '../icon';

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const { toggleSidebar } = useContext(SidebarContext)
  return (
    <div className="bg-white shadow-md dark:bg-gray-800 z-40">
      <header className="px-6 py-4 ">
        <div className="flex items-center justify-between mx-auto">
          <Button onClick={toggleSidebar} className="p-1 mr-5 -ml-1 bg-white hover:bg-white dark:bg-transparent dark:text-white focus:shadow-outline-gray">
            <Icon icon="HiOutlineMenu" className="dark:text-white" />
          </Button>
          <ul className="flex flex-row flex-1 space-x-6 justify-end items-center ">
            <li className="cursor-pointer">
              <ThemeSwitchButton />
            </li>
            {props.rightDropdown ? (
              <li>
                <Dropdown
                  title={props.rightDropdown.title}
                  menuItems={props.rightDropdown.menuItems}
                />
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
