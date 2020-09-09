import React from 'react';
import { Field, ErrorMessage, getIn, FormikErrors } from 'formik';
import classNames from 'classnames';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface InputProps {
  className?: string;
  label?: string;
  value?: string;
  name: string;
  errors: FormikErrors<{[key: string]:string}>;
  [key: string]: any;
}
function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return {
        border: '1px solid red'
      }
    }
  }
const InputWrapper = styled.div``;

const InputLabel = styled.label``;

export const Input: React.FC<InputProps> = ({ className, label, errors, value, name, ...props }) => {
  return (
    <InputWrapper className={classNames('mb-4', className)} >
      <InputLabel className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={name}>{label}</InputLabel>
      <Field  style={getStyles(errors, name)} name={name}  {...props}
      className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline-none '} />
      <ErrorMessage name={name}>
        {(invalidMessage) => 
         <motion.div
         animate={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -1000 }}
       >
           <div className="field-error text-red-100 ">{invalidMessage}</div>
        </motion.div>
        }
      </ErrorMessage>
    </InputWrapper>
  );
};
