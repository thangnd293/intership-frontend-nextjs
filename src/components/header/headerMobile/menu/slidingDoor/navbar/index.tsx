import { useLayoutEffect, useState } from "react";
import NavItem, { INavItem } from "../navitem";
import { ButtonBack, NavbarContainer } from "./styles";
import { IoIosArrowBack } from "react-icons/io";

interface INavbarProps {
  current: INavItem[];
  parent?: INavItem;
  style: object;
  handleBack?: () => void;
  visible: boolean;
}

const Navbar: React.FC<INavbarProps> = ({
  current,
  parent: p,
  style,
  handleBack: onBack,
  visible,
}) => {
  const [children, setChildren] = useState<INavItem[]>();
  const [parent, setParent] = useState<INavItem>();
  const [hidden, setHidden] = useState(true);

  const handleClick = (nav: INavItem) => {
    setChildren(nav.children);
    setParent(nav);
    setHidden(false);
  };
  const handleBack = () => {
    setHidden(true);
  };

  useLayoutEffect(() => {
    visible && setHidden(true);
  }, [visible]);

  return (
    <NavbarContainer style={style}>
      {p && (
        <ButtonBack onClick={onBack}>
          <IoIosArrowBack /> Trở về {p.title.toLowerCase()}
        </ButtonBack>
      )}
      {current?.map((nav) => {
        return (
          <NavItem
            // style={{ display: hidden ? "none" : "block" }}
            key={nav.id}
            href={nav.href}
            onClick={
              nav.children &&
              (() => {
                handleClick(nav);
              })
            }
          >
            {nav.title}
          </NavItem>
        );
      })}

      {current && (
        <Navbar
          current={children as INavItem[]}
          parent={parent}
          visible={visible}
          style={{
            transform: !hidden ? "translateX(0)" : "translateX(100%)",
          }}
          handleBack={handleBack}
        />
      )}
    </NavbarContainer>
  );
};

export default Navbar;
