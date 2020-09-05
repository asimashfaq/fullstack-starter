import * as React from 'react';
import { Button, ButtonHandler } from '../src/components/button';

import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
export default {
  title: 'Button',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  const label = text('Label', 'See now');
  return (
    <Button
      color="#000"
      label={label}
      background="#FFF"
      className={
        'rounded-full shadow bg-gray-400 dark:bg-black text-black hover:bg-gray-100'
      }
      onClick={action('clicked')}
   />
  );
};

export const IconButton = () => {
  const label = text('Label', 'See now');

  const refButton = React.useRef<ButtonHandler>();
  setTimeout(() =>{
    console.log(refButton.current);
    refButton.current.result(false)
  },5000)
  return (
    <Button
      ref={refButton}
      label={label}
      icon="HiOutlineHome"
      className={
        'shadow bg-gray-400 dark:bg-black text-black hover:bg-gray-100'
      }
    />
  );
};
