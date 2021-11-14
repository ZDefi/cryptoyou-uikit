import { ReactNode } from 'react';
export interface BottomNavItemProps {
    label: ReactNode | string;
    href: string;
    iconName?: string;
    isActive?: boolean;
    showItemsOnMobile?: boolean;
}
