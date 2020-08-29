export enum SortDirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}
export type SortDirection = keyof typeof SortDirectionEnum;
export type SortProperties<T extends string> = {
  [P in T]?: SortDirection;
};
