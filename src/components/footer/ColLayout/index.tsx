import { ReactNode } from "react";
import { ColLayoutContainer, Title } from "./styles";

interface IColLayoutProps {
  title: string;
  children: ReactNode;
}

const ColLayout: React.FC<IColLayoutProps> = ({ title, children }) => {
  return (
    <ColLayoutContainer>
      <Title>{title}</Title>
      {children}
    </ColLayoutContainer>
  );
};

export default ColLayout;
