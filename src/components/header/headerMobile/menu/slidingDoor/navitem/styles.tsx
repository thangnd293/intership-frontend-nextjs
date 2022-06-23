import styled from "@emotion/styled";
import tw from "twin.macro";

export const NavItemContainer = styled.div`
  ${tw`w-full border-b border-t border-solid border-secondary cursor-pointer`}
`;

export const LinkStyled = styled.a`
  ${tw`flex justify-between items-center text-primary py-3 px-5 text-xs sm:text-md`}
`;

export const NavItemContent = styled.button`
  ${tw`flex justify-between items-center w-full text-primary py-3 px-5 text-xs sm:text-md`}
`;
