import { Suspense, useLayoutEffect, useState } from "react";
import HeaderMobile from "./headerMobile";
import HeaderPC from "./headerPC";

const Header = () => {
  const [isPC, setIsPC] = useState(true);

  useLayoutEffect(() => {
    setIsPC(window.innerWidth > 800);
    window.addEventListener("resize", () => {
      setIsPC(window.innerWidth > 800);
    });
  }, []);

  return (
    <Suspense fallback={<></>}>
      {isPC ? <HeaderPC /> : <HeaderMobile />}
    </Suspense>
  );
};

export default Header;
