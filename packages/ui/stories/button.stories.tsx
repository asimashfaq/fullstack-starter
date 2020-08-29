import * as React from 'react';
import { Button } from '../src/components/button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

export default {
  title: 'Button',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  const label = text('Label', 'See now');
  return <Button onClick={action('clicked')}> {label} </Button>;
};

BasicUsage.story = {
  parameters: {
    info: {
      inline: true,
      header: false,
      text: `
    ~~~js
    <Button>Click Here</Button>
    ~~~
  `,
    },
  },
};
