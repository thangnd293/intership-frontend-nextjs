import styled from "@emotion/styled";
import tw from "twin.macro";

export const NavbarContainer = styled.nav`
  transform: translateX(100%);
  ${tw`absolute z-[9999] top-0 left-0 w-full h-full flex flex-col bg-white duration-300`}
`;

export const ButtonBack = styled.button`
  ${tw`flex items-center gap-2 p-5 text-primary`}
`;
