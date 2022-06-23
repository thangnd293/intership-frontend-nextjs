import { useMediaQuery } from "react-responsive";
import Button from "../../../components/button";
import { ArrowRightIcon } from "../../../components/button/icons";
import { BannerContainer, BannerContent, Heading, Paragraph } from "./styles";

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <Heading>Lựa chọn tối ưu của mẹ và bé</Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Paragraph>
        <Button iconRight={<ArrowRightIcon />}>Bắt đầu</Button>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
