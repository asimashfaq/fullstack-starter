import React from 'react';
import { SidebarProvider, Dashboard } from '@bcdapps/ui';
import * as S from '../components/styles';
import { sideBarItems } from '../components/Sidebar/menu';
import { HeaderDropDownMenu } from '../components/Header/menu';
export const Main = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <S.Wrapper>
          <Dashboard
            siderbar={sideBarItems}
            headerDropDownMenuItems={HeaderDropDownMenu}
          >
            {children}
          </Dashboard>
        </S.Wrapper>
      </SidebarProvider>
    </>
  );
};
