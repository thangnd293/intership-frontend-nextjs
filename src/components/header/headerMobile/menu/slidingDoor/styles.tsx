import styled from "@emotion/styled";
import tw from "twin.macro";

export const SlidingDoorContainer = styled.nav`
  ${tw`fixed flex flex-col z-[999999] top-0 right-0 w-2/3 h-full bg-white duration-300 shadow-lg`}
`;

export const Title = styled.p`
  ${tw`flex items-center w-full pt-5 px-5 text-primary text-lg sm:text-xl`}
`;

export const Highlight = styled.span`
  ${tw`font-semibold`}
`;

export const Button = styled.button`
  ${tw`p-5`}
`;

export const ContentContainer = styled.div`
  ${tw`flex flex-col flex-grow-[1] gap-5 items-end`}
`;

export const ActionContainer = styled.div`
  ${tw`w-full flex px-5 gap-5`}
`;

export const NavbarContainer = styled.div`
  ${tw`relative flex-1 w-full bg-white overflow-y-auto`}
`;
