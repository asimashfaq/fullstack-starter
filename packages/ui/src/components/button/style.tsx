import theme from 'styled-theming';
import styled from 'styled-components';
import { themesMap } from '../theme/themes';
import { motion } from 'framer-motion';
import { ButtonProps } from './types';

/* --------------------------------- styles --------------------------------- */
const backgroundColor = theme.variants('mode', 'variant', {
  default: {
    light: themesMap.light.colors.fill,
    dark: themesMap.dark.colors.fill,
  },
});

const buttonColor = theme.variants('mode', 'variant', {
  default: {
    light: themesMap.light.colors.font.active,
    dark: themesMap.dark.colors.font.active,
  },
  hover: {
    light: themesMap.light.colors.font.active,
    dark: themesMap.dark.colors.font.active,
  },
  closed: {
    light: themesMap.light.colors.font.active,
    dark: themesMap.dark.colors.font.active,
  },
  success: { light: '#FFF', dark: themesMap.dark.colors.hover },
  error: { light: '#FFF', dark: themesMap.dark.colors.hover },
});

const buttonHoverColor = theme.variants('mode', 'variant', {
  default: {
    light: themesMap.light.colors.hover,
    dark: themesMap.dark.colors.hover,
  },
  hover: {
    light: themesMap.light.colors.hover,
    dark: themesMap.dark.colors.hover,
  },
  closed: {
    light: themesMap.light.colors.hover,
    dark: themesMap.dark.colors.hover,
  },
  success: { light: '#27ae60', dark: themesMap.dark.colors.hover },
  error: { light: '#e74c3c', dark: themesMap.dark.colors.hover },
});
export const SButton = styled(motion.button).attrs(
  (props: Partial<ButtonProps>) => ({
    variant: props.variant,
  }),
)<Partial<ButtonProps>>`
  position: relative;
  color: ${props => (props.color ? props.color : buttonColor)};
  background-color: ${backgroundColor};
  overflow: hidden;
  z-index: -1;
`;
export const ButtonWrapper = styled.div`
  width: fit-content;
`;

export const BgCircle = styled(motion.div).attrs(
  (props: Partial<ButtonProps>) => ({
    variant: props.variant,
  }),
)<Partial<ButtonProps>>`
  position: absolute;
  left: calc(50% - 5px);
  top: calc(50% - 5px);
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin: 0;
  background-color: ${buttonHoverColor};
  z-index: -1;
`;
export const ButtonContent = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonIcon = styled(motion.div)`
  width: 24px;
`;
export const ButtonLabel = styled.div``;
