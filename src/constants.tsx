import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";
import { Post } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },

  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Icon icon="lucide:layout-dashboard" width="24" height="24" />,
  },

 // {
 //   title: "Publications",
 //   path: "/publications",
 //   icon: <Icon icon="lucide:book-check" width="24" height="24" />,
 //   submenu: true,
 //   subMenuItems: [
 //     { title: "Journals", path: "/publications/journals" },
 //     { title: "Book Chapters", path: "/publications/book-chapters" },
 //     { title: "Conf", path: "/publications/conf" },
 //   ],
 // },
];

export const POSTS: Post[] = [
  {
    title: "This is a post",
    description: "lorem ipsum",
    year: 1924,
  },
];
