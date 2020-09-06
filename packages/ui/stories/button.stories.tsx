import * as React from 'react';
import { Button, ButtonHandler } from '../src/components/button';

import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
export default {
  title: 'Button',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  const label = text('Label', 'See now');
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Button
        label={label}
        className={'rounded-full shadow text-black'}
        onClick={action('clicked')}
      />
    </ThemeProvider>
  );
};

export const SuccessButton = () => {
  const label = text('Label', 'Submit');

  const refButton = React.useRef<ButtonHandler>();
  const handleEvent = e => {
    setTimeout(() => {
      refButton.current.result(true);
    }, 5000);
  };

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Button
        onClick={e => handleEvent(e)}
        ref={refButton}
        label={label}
        icon="HiOutlineHome"
        className={'shadow text-black'}
      />
    </ThemeProvider>
  );
};

export const ErrorButton = () => {
  const label = text('Label', 'Submit');

  const refButton = React.useRef<ButtonHandler>();
  const handleEvent = e => {
    setTimeout(() => {
      refButton.current.result(false);
    }, 5000);
  };

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Button
        onClick={e => handleEvent(e)}
        ref={refButton}
        label={label}
        icon="HiOutlineHome"
        className={'shadow text-black'}
      />
    </ThemeProvider>
  );
};
