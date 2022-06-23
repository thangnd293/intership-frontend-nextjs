import { useEffect, useLayoutEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useElementSize } from "usehooks-ts";
import CardItem from "../components/cardItem";
import ProcessBar from "../components/cardItem/processBar";
import Title from "../components/Title";

import { LightningIcon } from "../icons";
import { Price, PriceContainer } from "../styles";

import {
  SaleContainer,
  Button,
  Discount,
  HeadingContainer,
  ProductBox,
  ProductList,
} from "./styles";
import TimeBox from "./TimeBox";

const TIME = 86400;

const SaleSection: React.FC = () => {
  const [squareRef, { width }] = useElementSize();
  const [widthElement, setWidthElement] = useState(0);
  const [widthScrollView, setWidthScrollView] = useState(0);
  const [showButtonLeft, setShowButtonLeft] = useState(true);
  const [showButtonRight, setShowButtonRight] = useState(true);

  const getCol = () => {
    if (typeof window === "undefined") {
      return 4;
    }

    const currentViewport =
      document.documentElement.clientWidth || window.innerWidth;

    if (currentViewport < 640) {
      return 2;
    } else if (currentViewport < 1024) {
      return 3;
    }
    return 4;
  };

  const [col, setCol] = useState(() => getCol());
  let gap = 20;

  useLayoutEffect(() => {
    const handleResponsive = () => {
      setCol(getCol);

      setWidthScrollView(0);
    };

    window.addEventListener("resize", handleResponsive);
  }, []);

  useEffect(() => {
    setWidthElement((width - (col - 1) * gap) / col);
  }, [width, col]);

  const handleLeftClick = () => {
    setWidthScrollView((prev) => prev - (widthElement + gap) * col);
  };

  const handleRightClick = () => {
    setWidthScrollView((prev) => prev + (widthElement + gap) * col);
  };

  useEffect(() => {
    if (widthScrollView <= 0) {
      setShowButtonLeft(false);
    } else {
      setShowButtonLeft(true);
    }

    const carousellWidth = widthElement * 10 + 9 * gap;

    if (
      widthScrollView >
      carousellWidth - (widthElement * col + gap * (10 - col))
    ) {
      setShowButtonRight(false);
    } else {
      setShowButtonRight(true);
    }
  }, [widthScrollView, col, widthElement]);

  return (
    <SaleContainer>
      <Title description="135 khuyến mãi">
        <HeadingContainer>
          <LightningIcon /> Flash Sale <TimeBox countdown={TIME} />
        </HeadingContainer>
      </Title>
      <ProductBox ref={squareRef}>
        <ProductList
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${widthScrollView}px)`,
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <CardItem
                image={`/assets/images/sale-${index % 4}.png`}
                key={index}
                style={{ width: widthElement + "px" }}
                className="shrink-0"
              >
                <PriceContainer className="my-6">
                  <Price>đ 200,000</Price>
                  <Discount>-{index}%</Discount>
                </PriceContainer>
                <ProcessBar fill={20}>Đã bán 2</ProcessBar>
              </CardItem>
            );
          })}
        </ProductList>
        {showButtonLeft && (
          <Button className="left-0" onClick={handleLeftClick}>
            <FaChevronLeft className="text-inherit text-light-grey" />
          </Button>
        )}
        {showButtonRight && (
          <Button className="right-0" onClick={handleRightClick}>
            <FaChevronRight className="text-inherit text-light-grey" />
          </Button>
        )}
      </ProductBox>
    </SaleContainer>
  );
};

export default SaleSection;
