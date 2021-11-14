import { ReactNode } from "react";
import { BoxProps } from "../Box";
import { DropdownMenuItems } from "../DropdownMenu/types";
export declare type MenuItemsType = {
    label: ReactNode | string;
    href: string;
    icon?: string;
    items?: DropdownMenuItems[];
    showOnMobile?: boolean;
    showItemsOnMobile?: boolean;
};
export interface MenuItemsProps extends BoxProps {
    items: MenuItemsType[];
    activeItem?: string;
    activeSubItem?: string;
    variant?: "default" | "subMenu" | "header";
}
