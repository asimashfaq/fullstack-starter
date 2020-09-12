import React, { useContext } from 'react';
import '../../style.css';
import { Dropdown } from '../dropdown';
import { StandardButton } from '../button';
import { HeaderProps } from './types';
import { SidebarContext } from '../../context/sidebar.context';
import { Icon } from '../icon';
import styled from 'styled-components';
const HeaderWrapper = styled.div`
  grid-area: header;
`;
export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <HeaderWrapper className="bg-white shadow-md dark:bg-gray-800 z-40">
      <header className="px-1 py-1 ">
        <div className="flex items-center justify-between mx-auto">
          <StandardButton
            label="Home"
            onClick={toggleSidebar}
            className="p-1 mr-5 -ml-1 text-black hover:bg-white dark:bg-transparent dark:text-white focus:shadow-outline-gray"
          ><Icon icon="HiOutlineMenu"/>Home</StandardButton>
          <ul className="flex flex-row flex-1 space-x-6 justify-end items-center ">
            <li className="cursor-pointer">
            {/* <ThemeSwitchButton label="" /> */}
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
    </HeaderWrapper>
  );
};
