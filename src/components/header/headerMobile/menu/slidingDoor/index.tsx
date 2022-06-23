import { forwardRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../../../../button";
import { UserIcon } from "../../../../button/icons";
import { CartIcon } from "../../../icons";
import Navbar from "./navbar";
import { INavItem } from "./navitem";

import {
  ActionContainer,
  ContentContainer,
  Highlight,
  NavbarContainer,
  SlidingDoorContainer,
  Title,
} from "./styles";

interface ISlidingDoorProps {
  visible: boolean;
}

const NAVS: INavItem[] = [
  {
    id: 1,
    title: "Đồng giá",
    children: [
      {
        id: 1,
        title: "title 1.1",
        children: [
          {
            id: 1,
            title: "title 1.1.1",
            href: "/title1.1.1",
          },
          {
            id: 2,
            title: "title 1.1.2",
            href: "/title1.1.2",
          },
          {
            id: 3,
            title: "title 1.1.3",
            href: "/title1.1.3",
          },
        ],
      },
      {
        id: 2,
        title: "title 1.2",
        href: "/title1.2",
      },
      {
        id: 3,
        title: "title 1.3",
        href: "/title1.1",
      },
    ],
  },
  {
    id: 2,
    title: "Đồ bộ cao cấp",
    children: [
      {
        id: 1,
        title: "title 2.1",
        href: "/title 2.1",
      },
      {
        id: 2,
        title: "title 2.2",
        href: "/title2.2",
      },
      {
        id: 3,
        title: "title 2.3",
        href: "/title2.3",
      },
    ],
  },
  {
    id: 3,
    title: "Sơ sinh",
    href: "/title3",
  },
  {
    id: 4,
    title: "Bé gái",
    href: "/title3",
  },
  {
    id: 5,
    title: "Bé trai",
    href: "/title3",
  },
  {
    id: 6,
    title: "Phụ kiện",
    href: "/title3",
  },
  {
    id: 7,
    title: "Khuyến mại",
    href: "/title3",
  },
  {
    id: 8,
    title: "Blog",
    href: "/title3",
  },
  {
    id: 9,
    title: "Blog",
    href: "/title3",
  },
  {
    id: 10,
    title: "Blog",
    href: "/title3",
  },
  {
    id: 11,
    title: "Blog",
    href: "/title3",
  },
  {
    id: 12,
    title: "Blog",
    href: "/title3",
  },
  {
    id: 13,
    title: "Blog",
    href: "/title3",
  },
];

const SlidingDoor = forwardRef<HTMLDivElement, ISlidingDoorProps>(
  ({ visible }, ref) => {
    return (
      <SlidingDoorContainer
        ref={ref}
        style={{
          transform: visible ? "translateX(0)" : `translateX(100%)`,
        }}
      >
        <ContentContainer>
          <Title>
            Welcome
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="w-[60px]"
            />
          </Title>
          <ActionContainer>
            <Button size="small" variant="secondary">
              Giỏ hàng <CartIcon className="pl-1" />
            </Button>
            <Button size="small">
              <UserIcon className="pr-1" /> Đăng nhập
            </Button>
          </ActionContainer>
          <NavbarContainer>
            <Navbar
              visible={visible}
              current={NAVS}
              style={{
                transform: "translateX(0)",
              }}
            />
          </NavbarContainer>
        </ContentContainer>
      </SlidingDoorContainer>
    );
  }
);

export default SlidingDoor;
