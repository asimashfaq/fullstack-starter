import * as Icons from '@bcdapps/icons'
export interface IconProps {
    icon:  keyof typeof Icons,
    className?: string,
    props?: any,
}