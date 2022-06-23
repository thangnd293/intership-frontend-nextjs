import Navitem from "./navItem";
import { NavbarContainer } from "./styles";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Navitem href="#">Đồng giá</Navitem>
      <Navitem href="#">Đồ bộ cao cấp</Navitem>
      <Navitem href="#">Sơ sinh</Navitem>
      <Navitem href="#">Bé gái</Navitem>
      <Navitem href="#">Bé trai</Navitem>
      <Navitem href="#">Phụ kiện</Navitem>
      <Navitem href="#">Khuyến mãi</Navitem>
      <Navitem href="#">Blog</Navitem>
    </NavbarContainer>
  );
};

export default Navbar;
