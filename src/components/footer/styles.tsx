import styled from "@emotion/styled";
import tw from "twin.macro";

export const FooterContainer = styled.footer`
  ${tw`w-full bg-primary px-5 xl:px-0`}
`;

export const FooterContent = styled.div`
  ${tw`w-full max-w-[1120px] mx-auto py-5 sm:grid-cols-2 md:py-10 grid md:grid-cols-4 gap-5`}
`;

export const ContentContainer = styled.div`
  ${tw`flex flex-col gap-5 items-center  md:items-start`}
`;

export const LinkStyled = styled.a`
  ${tw`text-md text-white cursor-pointer`}
`;

export const SocialContainer = styled.div`
  ${tw`flex gap-4`}
`;
