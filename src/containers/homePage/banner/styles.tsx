import styled from "@emotion/styled";
import tw from "twin.macro";

export const BannerContainer = styled.section`
  @media screen and (min-width: 800px) {
    & {
      background-image: url("/assets/images/banner.png");
    }
  }
  ${tw`mx-5 xl:mx-0 bg-secondary bg-no-repeat bg-right-bottom background-size[50%]`};
`;

export const BannerContent = styled.div`
  ${tw`w-full md:w-1/2 md:mx-5 my-10 px-10 md:px-4 pb-[53px] pt-[48px] md:pb-[106px] md:pt-[96px]`}
`;

export const Heading = styled.h1`
  ${tw`text-3xl md:text-4xl font-bold text-black`}
`;

export const Paragraph = styled.p`
  ${tw`text-md text-justify md:text-align[start] md:text-lg text-black opacity-60 my-6`}
`;
