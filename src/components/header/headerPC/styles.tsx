import styled from "@emotion/styled";
import tw from "twin.macro";

export const HeaderContainer = styled.header`
  ${tw`w-full px-5 xl:px-0 fixed z-[9999] duration-500 border border-solid border-[#EEEEEE] bg-white`}
`;

export const HeaderContent = styled.div`
  ${tw`w-full max-w-[1120px] mx-auto flex justify-between items-center `}
`;

export const SearchContainer = styled.div`
  ${tw`relative mx-[145px] pt-5 pb-5 flex-1 flex items-center `}
`;

export const SearchInput = styled.input`
  ${tw`w-full pl-5 py-5 pr-[60px] rounded-lg text-xs bg-light-grey text-grey`}
`;

export const ButtonSearch = styled.button`
  ${tw`absolute right-0 w-[32px] mr-2 aspect-ratio[1] rounded-lg bg-primary 
      flex items-center justify-center hover:bg-primary-lighter`}
`;

export const ActionContainer = styled.div`
  ${tw`flex gap-6`}
`;
