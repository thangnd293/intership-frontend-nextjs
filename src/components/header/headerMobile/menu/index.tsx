import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../styles";
import SlidingDoor from "./slidingDoor";
import { MenuContainer } from "./styles";

const Menu: React.FC = () => {
  const [showSlidingDoor, setShowSlidingDoor] = useState(false);
  const slidingDoor = useRef<HTMLDivElement>(null);

  const handleShowSlidingDoor = () => {
    setShowSlidingDoor(true);
  };

  useEffect(() => {
    const slidingDoorEl = slidingDoor?.current;

    const handleClickOutside = (e: MouseEvent) => {
      if (slidingDoorEl && !slidingDoorEl.contains(e.target as Node)) {
        console.log("ra");
        setShowSlidingDoor(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showSlidingDoor]);

  return (
    <MenuContainer ref={slidingDoor}>
      <Button onClick={handleShowSlidingDoor}>
        <AiOutlineMenu fontSize="22px" />
      </Button>

      <SlidingDoor visible={showSlidingDoor} />
    </MenuContainer>
  );
};

export default Menu;
