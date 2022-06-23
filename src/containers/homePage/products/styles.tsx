import styled from "@emotion/styled";
import tw from "twin.macro";

export const ProductsContainer = styled.section`
  ${tw`w-full`}
`;

export const PriceContainer = styled.div`
  ${tw`flex justify-between items-center`}
`;

export const Price = styled.p`
  ${tw`text-primary font-bold`}
`;
