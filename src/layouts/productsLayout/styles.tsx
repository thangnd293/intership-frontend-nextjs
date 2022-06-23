import styled from "@emotion/styled";
import tw from "twin.macro";

export const LayoutContainer = styled.div`
  ${tw`py-5 md:py-10`}
`;

export const ProductBox = styled.div`
  ${tw`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6`}
`;
export const TitleProduct = styled.h5`
  ${tw`text-xs md:text-md font-semibold my-6`}
`;
