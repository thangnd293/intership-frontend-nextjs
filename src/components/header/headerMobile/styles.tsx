import styled from "@emotion/styled";
import tw from "twin.macro";

import { SearchIcon } from "../icons";

export const HeaderContainer = styled.header`
  ${tw`w-full fixed z-[9999] border border-solid border-[#EEEEEE] bg-white`}
`;

export const HeaderContent = styled.div`
  ${tw`w-full px-5 py-3  flex justify-between items-center relative`}
`;

export const ActionContainer = styled.div`
  ${tw`flex gap-1`}
`;

export const Button = styled.button`
  ${tw`w-[32px]aspect-ratio[1] rounded-lg 
      flex items-center justify-center`}
`;

export const SearchContainer = styled.div`
  ${tw`absolute w-full left-0 flex justify-center bg-white`}
`;

export const SearchContent = styled.div`
  ${tw`w-full flex mx-5 pl-5 py-4 pr-[60px] text-xs text-grey 
  border-b-2 border-solid border-black`}
`;

export const IconWrapper = styled.div`
  ${tw`absolute h-full aspect-ratio[1] top-0 left-5 flex items-center justify-center`}
`;

export const SearchInput = styled.input`
  ${tw`w-full bg-none pl-[25px]`}
`;

export const ButtonHiddenSearch = styled(IconWrapper)`
  ${tw`left-[unset] right-5 cursor-pointer`}
`;
