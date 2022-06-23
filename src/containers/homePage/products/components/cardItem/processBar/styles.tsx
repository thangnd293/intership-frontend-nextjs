import styled from "@emotion/styled";
import tw from "twin.macro";

export const ProcessBarContainer = styled.div`
  ${tw`w-full h-5 rounded-[20px] flex items-center justify-center bg-secondary relative`}
`;

export const ProcessBarText = styled.span`
  ${tw`absolute z-10 text-xs text-black `}
`;

export const ProcessBarFill = styled.div`
  ${tw`absolute top-0 left-0 h-full rounded-[20px] bg-primary`}
`;
