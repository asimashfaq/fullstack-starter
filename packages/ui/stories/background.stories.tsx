import * as React from 'react';
import { Background, BackgroundProvider } from '../src/components/background';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

export default {
  title: 'Background',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  return (
    <BackgroundProvider>
        <Background url={'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg'} bgColor="#1b2b48" offset="20%" /> 
    </BackgroundProvider>
  );
};
