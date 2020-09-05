import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import * as HIcons from 'react-icons/hi';
export const IconList = { ...HIcons, AiOutlineLoading3Quarters };
export type IconName = keyof typeof IconList;
export interface IconProps {
  icon: IconName;
  className?: string;
}
