import Link from "next/link";
import Image from "next/image";
import { GrClose } from "react-icons/gr";

import {
  ActionContainer,
  Button,
  ButtonHiddenSearch,
  HeaderContainer,
  HeaderContent,
  IconWrapper,
  SearchContainer,
  SearchContent,
  SearchInput,
} from "./styles";
import Menu from "./menu";
import { SearchIcon } from "../icons";
import { useState } from "react";

const HeaderMobile: React.FC = () => {
  const [showSearhInput, setShowSearchInput] = useState(false);

  const handleShowSearchInput = () => {
    setShowSearchInput(true);
  };

  const handleHiddenSearchInput = () => {
    setShowSearchInput(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="#">
          <a>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={88}
              height={38}
            />
          </a>
        </Link>
        <ActionContainer>
          <Button onClick={handleShowSearchInput}>
            <SearchIcon className="text-black" width="20px" height="19px" />
          </Button>
          <Menu />
        </ActionContainer>
      </HeaderContent>
      {showSearhInput && (
        <SearchContainer>
          <SearchContent>
            <IconWrapper>
              <SearchIcon className="text-black" width="18px" height="17px" />
            </IconWrapper>
            <SearchInput
              type="text"
              placeholder="Tìm sản phẩm, danh mục..."
              spellCheck={false}
            />
            <ButtonHiddenSearch onClick={handleHiddenSearchInput}>
              <GrClose fontSize="16px" />
            </ButtonHiddenSearch>
          </SearchContent>
        </SearchContainer>
      )}
    </HeaderContainer>
  );
};

export default HeaderMobile;
