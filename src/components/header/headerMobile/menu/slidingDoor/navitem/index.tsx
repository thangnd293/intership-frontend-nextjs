import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

import { NavItemContainer, LinkStyled, NavItemContent } from "./styles";

export interface INavItem {
  id: number;
  title: string;
  href?: string;
  children?: INavItem[];
}

interface INavItemProps {
  href?: string;
  onClick?: any;
  children: ReactNode;
  style?: CSSProperties;
}

const NavItem: React.FC<INavItemProps> = ({
  href,
  children,
  onClick,
  style,
  ...restProps
}) => {
  if (!!onClick) {
    return (
      <NavItemContainer style={style} onClick={onClick} {...restProps}>
        <NavItemContent>
          {children} <HiOutlineChevronRight />
        </NavItemContent>
      </NavItemContainer>
    );
  }

  return (
    <NavItemContainer>
      <Link href={href as string} {...restProps}>
        <LinkStyled>{children}</LinkStyled>
      </Link>
    </NavItemContainer>
  );
};

export default NavItem;
