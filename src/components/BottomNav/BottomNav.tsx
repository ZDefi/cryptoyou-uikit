import React, { useState } from "react";
import styled from 'styled-components'
import BottomNavItem from "../BottomNavItem";
import StyledBottomNav, { StyledOverlay } from "./styles";
import { Box } from "../Box";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { BottomNavProps } from "./types";
import { NotificationDot } from "../NotificationDot";
import { Link } from "react-router-dom";

const NavButton = styled.a<{isActived?: boolean}>`
  height: 44px;
  line-height: 44px;
  text-align: center;
  width: 100%;
  /* padding: 0 18px; */
  color: #FFFFFF;
  cursor: pointer;
  background: #1D2633;
  /* background: ${({ isActived }) => (isActived ? '#557061' : '')}; */
`

const BottomNav: React.FC<BottomNavProps> = ({ items = [], activeItem = "", activeSubItem = "", ...props }) => {
  const [menuOpenByIndex, setMenuOpenByIndex] = useState({});
  // const isBottomMenuOpen = Object.values(menuOpenByIndex).reduce((acc, value) => acc || value, false);
  const isBottomMenuOpen = false
  return (
    <>
      {/* {isBottomMenuOpen && <StyledOverlay />} */}
      <StyledBottomNav justifyContent="space-around" {...props}>
        {items.filter(f => f.showOnMobile).map(({ label, items: menuItems, href, target, icon, showOnMobile = true, showItemsOnMobile = true }, index) => {
          const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
          if (target === '_blank') {
            return <NavButton key={href} to={href} isActived={href === activeItem} target="_blank">{label}</NavButton>
          }
          return (
            <NavButton key={href} as={Link} to={href} isActived={href === activeItem}>{label}</NavButton>
            // showOnMobile && (
            //   <DropdownMenu
            //     key={label as string}
            //     items={menuItems}
            //     isBottomNav
            //     activeItem={activeSubItem}
            //     showItemsOnMobile={showItemsOnMobile}
            //     setMenuOpenByIndex={setMenuOpenByIndex}
            //     index={index}
            //   >
            //     <Box>
            //       <NotificationDot show={!!statusColor} color={statusColor}>
            //         <BottomNavItem
            //           href={href}
            //           isActive={href === activeItem}
            //           label={label}
            //           iconName={icon}
            //           showItemsOnMobile={showItemsOnMobile}
            //         />
            //       </NotificationDot>
            //     </Box>
            //   </DropdownMenu>
            // )
          );
        })}
      </StyledBottomNav>
    </>
  );
};

export default BottomNav;
