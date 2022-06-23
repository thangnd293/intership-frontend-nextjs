import { CSSProperties, ReactNode } from "react";
import ImageElement from "../../../../../components/image";
import { CardContainer, CardContent } from "./styles";

interface ICartItemProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  image: string;
}

const CardItem: React.FC<ICartItemProps> = ({
  image,
  className,
  children,
  style,
}) => (
  <CardContainer style={style} className={className}>
    <CardContent>
      <ImageElement className="rounded-lg" src={image} alt="product" />
      {children}
    </CardContent>
  </CardContainer>
);

export default CardItem;
