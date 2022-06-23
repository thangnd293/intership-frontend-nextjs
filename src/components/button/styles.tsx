import styled from "@emotion/styled";
import tw from "twin.macro";

import { ISizes, IVariants } from ".";

const variants: Record<IVariants, any> = {
  primary: tw`text-white bg-primary hover:text-primary hover:bg-white`,
  secondary: tw`text-primary bg-white hover:text-white hover:bg-primary`,
};

const sizes: Record<ISizes, any> = {
  small: tw`px-3 py-2 text-xs sm:text-md`,
  medium: tw`px-4 py-2`,
};

export const ButtonContainer = styled.button<{
  variant: IVariants;
  size: ISizes;
}>`
  ${tw`rounded-lg border border-solid duration-100 flex items-center gap-2`}

  ${({ variant }) => variants[variant]}
  ${({ size }) => sizes[size]}
`;

export const ButtonText = styled.span`
  ${tw`inline-flex items-center`}
`;
