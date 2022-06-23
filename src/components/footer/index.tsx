import Link from "next/link";
import Button from "../button";
import ColLayout from "./ColLayout";
import { ArrowRight, FacebookIcon, InstagramIcon, YoutubeIcon } from "./icons";
import {
  ContentContainer,
  FooterContainer,
  FooterContent,
  LinkStyled,
  SocialContainer,
} from "./styles";

const COLS = [
  {
    title: "Về chúng tôi",
    content: [
      "CÔNG TY CỔ PHẦN BẢO ANH ANH",
      "Địa chỉ: Số 6, Đường 22, Khu phố 2, Phường An Khánh, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
      "Điện thoại: 0768865858",
      "Email: hello@baababy.com.vn",
    ],
  },
  {
    title: "Hỗ trợ mua hàng",
    content: [
      "Chính sách Thành viên",
      "Chính sách Đổi trả",
      "Giao hàng - thanh toán",
      "Chính sách bảo mật thông tin",
      "Tuyển dụng",
      "Hệ thống 5 cửa hàng",
    ],
  },
  {
    title: "Thông tin liên hệ",
    content: [
      "CSKH 028 2262 5858 - Đơn hàng 07 6886 5858",
      "Mua hàng 07 6886 5858",
      "Email",
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {COLS.map((col, index) => {
          return (
            <ColLayout key={index} title={col.title}>
              <ContentContainer>
                {col.content.map((item, index) => {
                  return (
                    <Link key={index} href="#">
                      <LinkStyled>{item}</LinkStyled>
                    </Link>
                  );
                })}
              </ContentContainer>
            </ColLayout>
          );
        })}

        <ColLayout title="Kết nối với chúng tôi">
          <ContentContainer>
            <SocialContainer>
              <FacebookIcon />
              <YoutubeIcon />
              <InstagramIcon />
            </SocialContainer>
            <Button
              className="mt-5"
              variant="secondary"
              iconRight={<ArrowRight />}
            >
              Hệ thống cửa hàng
            </Button>
          </ContentContainer>
        </ColLayout>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
