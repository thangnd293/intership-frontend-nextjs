import styled from "@emotion/styled";
import tw from "twin.macro";

export const HomeContainer = styled.div`
  ${tw`flex w-full min-h-screen flex-col items-center`}
`;

export const BannerSection = styled.div`
  ${tw`w-full mt-[55px] md:mt-[137px] bg-white`}
`;

export const BannerContainer = styled.section`
  ${tw`w-full max-w-[1120px] mx-auto`}
`;

export const ProductsSection = styled.div`
  ${tw`w-full bg-light-grey`}
`;

export const Main = styled.main`
  ${tw`w-full px-5 max-w-[1120px] md:mx-auto`}
`;
