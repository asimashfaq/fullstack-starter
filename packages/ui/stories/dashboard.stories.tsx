import * as React from 'react';
import { Dashboard } from '../src/components/dashboard';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/context/theme.context';
import { SidebarProvider } from '../src/context/sidebar.context';
import { BackgroundProvider, Background } from '../src/components/background';

export default {
  title: 'Dashboard',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <MemoryRouter> 
          <Dashboard /> 
        </MemoryRouter>
      </ThemeProvider>
    </SidebarProvider>
  );
};
export const BackgroundDashboardUsage = () => {
  return (
    <SidebarProvider>
      <ThemeProvider>
            <BackgroundProvider>
        <MemoryRouter> 
          <Dashboard>
              <Background url={'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg'} bgColor="#1b2b48" offset="20%" /> 
          </Dashboard> 
        </MemoryRouter>         
         </BackgroundProvider>

      </ThemeProvider>
    </SidebarProvider>
  );
};
