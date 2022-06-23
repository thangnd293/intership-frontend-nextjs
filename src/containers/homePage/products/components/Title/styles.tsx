import styled from "@emotion/styled";
import tw from "twin.macro";

export const TitleContainer = styled.div`
  ${tw``}
`;

export const Heading = styled.h2`
  ${tw`flex items-center gap-2 md:gap-3 text-xl md:text-xxl font-bold`}
`;

export const Description = styled.p`
  ${tw`mt-3 text-xs md:mt-4 md:text-md text-black`}
`;
