import * as React from 'react';
import { Button } from '../src/components/button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { HomeIcon } from '@bcdapps/icons';

export default {
  title: 'Button',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  const label = text('Label', 'See now');
  return <Button
  color="#000"
  background="#FFF"
  className={'rounded-full shadow bg-gray-400 dark:bg-black text-black hover:bg-gray-100'} onClick={action('clicked')}> {label} </Button>;
};

export const IconButton = () => {
  const label = text('Label', 'See now');
  return <Button className={'shadow bg-gray-400 dark:bg-black text-black hover:bg-gray-100'} onClick={action('clicked')}><HomeIcon /> {label} </Button>;
};

