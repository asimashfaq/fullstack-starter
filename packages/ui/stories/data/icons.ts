import * as Icons from 'react-icons/hi';
type Icons = keyof typeof Icons;
//@ts-ignore
const iconLists: Icons[] = [...Icons];

export { iconLists };
