import React, { useContext } from 'react';
import { Sidebar } from '../sidebar';
import { Header } from '../header';
import { IDropdownProps } from 'components/dropdown/types';
import { DashboardProps } from './types';
import styled from 'styled-components';
import { SidebarContext } from '../../context/sidebar.context';
interface DashboardContainerProps {
  isOpen: boolean
}

const DashboardContainer = styled.div<DashboardContainerProps>`
  display: grid;
  grid-template-columns:${props => props.isOpen ? "256px auto" : "0px auto" } ;
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
    'sidenav header'
    'sidenav main'
    'sidenav footer';
  height: 100vh;
`;


const MainWrapper = styled.div`
  grid-area: main;
`;
const FooterWrapper = styled.div`
  grid-area: footer;
`;
export const Dashboard: React.FC<DashboardProps> = ({ children, siderbar, 
  headerDropDownMenuTitle = 'Settings',
  headerDropDownMenuItems, title= "Admin Panel", footer= "Developed with love" }) => {
  const { isSidebarOpen } = useContext(SidebarContext)

  return (
    <DashboardContainer isOpen={isSidebarOpen as boolean}>
      <Header
        rightDropdown={
          {
            title: headerDropDownMenuTitle,
            menuItems: headerDropDownMenuItems,
          } as IDropdownProps
        }
      />
      <Sidebar menuItems={siderbar} title={title} />
      <MainWrapper className="z-20">{children}</MainWrapper>
      <FooterWrapper>{footer}</FooterWrapper>
    </DashboardContainer>
  );
};
