export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type Post = {
  title: string;
  description: string;
  year: number;
  cover?: HTMLImageElement;
};

export type MenuItemsWithSubMenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};
