import styled from "@emotion/styled";
import tw from "twin.macro";

export const TimeBoxContainer = styled.div`
  ${tw`flex items-center gap-1.5 md:gap-3`}
`;

export const TimeItem = styled.span`
  ${tw`inline-block text-xs font-medium py-1 px-1.5 md:text-md md:font-semibold rounded-lg bg-[#000] text-white`}
`;
