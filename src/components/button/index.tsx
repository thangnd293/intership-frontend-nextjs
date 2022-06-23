import { ReactNode } from "react";
import { ButtonContainer, ButtonText } from "./styles";

export type IVariants = "primary" | "secondary";
export type ISizes = "small" | "medium";

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: IVariants;
  size?: ISizes;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  type = "button",
  variant = "primary",
  size = "medium",
  iconLeft,
  iconRight,
  className,
  children,
  onClick,
}) => {
  return (
    <ButtonContainer
      type={type}
      className={className}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {iconLeft && iconLeft}
      <ButtonText>{children}</ButtonText>
      {iconRight && iconRight}
    </ButtonContainer>
  );
};

export default Button;
