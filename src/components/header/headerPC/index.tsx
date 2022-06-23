import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../../button";
import { UserIcon } from "../../button/icons";
import { CartIcon, SearchIcon } from "../icons";
import {
  ActionContainer,
  ButtonSearch,
  HeaderContainer,
  HeaderContent,
  SearchContainer,
  SearchInput,
} from "./styles";
import Navbar from "./navbar";

const SCROLL_SPACE = 137;

const HeaderPC: React.FC = () => {
  const lastScrollTop = useRef(0);
  const headerContent = useRef<any>(null);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (Math.abs(st - lastScrollTop.current) < SCROLL_SPACE) return;

      if (st > lastScrollTop.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer
      style={{
        transform: showHeader
          ? "translateY(0px)"
          : `translateY(-${headerContent.current?.clientHeight || 0}px)`,
      }}
    >
      <HeaderContent ref={headerContent}>
        <Link href="#">
          <a>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={110}
              height={47}
            />
          </a>
        </Link>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Tìm sản phẩm, danh mục..."
            spellCheck={false}
          />
          <ButtonSearch>
            <SearchIcon />
          </ButtonSearch>
        </SearchContainer>
        <ActionContainer>
          <button>
            <CartIcon />
          </button>
          <Button iconLeft={<UserIcon />}>Đăng nhập</Button>
        </ActionContainer>
      </HeaderContent>
      <Navbar />
    </HeaderContainer>
  );
};

export default HeaderPC;
