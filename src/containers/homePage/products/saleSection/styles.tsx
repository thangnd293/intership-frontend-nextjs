import styled from "@emotion/styled";
import tw from "twin.macro";

export const SaleContainer = styled.div`
  ${tw`py-5 md:py-10`}
`;

export const HeadingContainer = styled.div`
  ${tw`flex items-center gap-1.5 md:gap-3`}
`;

export const ProductBox = styled.div`
  ${tw`mt-6 overflow-x-hidden relative`}
`;

export const ProductList = styled.div`
  ${tw`flex duration-500 ease-in-out`}
`;

export const Button = styled.button`
  ${tw`absolute top-1/2 px-1 py-2 text-xl sm:text-xxl md:text-2xl rounded-md bg-[#ee4c7eb8]`}
`;

export const Discount = styled.span`
  ${tw`inline-block px-2.5 py-1 rounded-lg text-primary border border-solid border-primary`}
`;
