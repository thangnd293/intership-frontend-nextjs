import styled from "@emotion/styled";
import tw from "twin.macro";

export const ColLayoutContainer = styled.div`
  ${tw`flex flex-col gap-4 items-center md:items-start md:gap-6 sm:pb-0`}

  & + div {
    ${tw`pt-5 border-t border-solid border-white sm:border-none sm:pt-0`}
  }
`;

export const Title = styled.h5`
  ${tw`text-lg text-white font-bold`}
`;
