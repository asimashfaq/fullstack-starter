import React from 'react';
import { Input } from '../src/components/input';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default {
  title: 'Input',
  decorators: [withKnobs, withInfo],
};

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
});

export const BasicUsage = () => {
  const label = text('Label', 'Email');
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        render={({ errors, touched, validateField, validateForm }) => (
          <Form>
            <Input
              label={label}
              name="email"
              type="email"
              errors={errors}
              className={''}
              onClick={action('clicked')}
              placeholder="Enter your email"
            />
          </Form>
        )}
      />
    </ThemeProvider>
  );
};
