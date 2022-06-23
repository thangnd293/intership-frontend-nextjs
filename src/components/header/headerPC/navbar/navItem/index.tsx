import Link from "next/link";
import { ReactNode } from "react";
import { ArrowDownIcon } from "./icons";
import { NavContainer } from "./styles";

interface INavitemPProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const Navitem: React.FC<INavitemPProps> = ({ href, className, children }) => {
  return (
    <Link href={href}>
      <NavContainer className={className}>
        <span>{children}</span> <ArrowDownIcon />
      </NavContainer>
    </Link>
  );
};

export default Navitem;
