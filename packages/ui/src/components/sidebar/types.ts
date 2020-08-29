import { IconProps } from '../icon/types';
export type RenderFunction<Element = JSX.Element> = (props: any) => Element;

export type Renderer = {
  render: RenderFunction;
};

export function isRenderer<T>(props: Renderer | T): props is Renderer {
  if (typeof props === 'string') {
    return false;
  }
  return props && 'render' in props;
}

export interface IMenuItemProps extends IconProps {
  path: string;
  name: string;
  exact?: boolean;
}

export interface ISideBarProps {
  title?: string | Renderer;
  menuItems: IMenuItemProps[];
}
