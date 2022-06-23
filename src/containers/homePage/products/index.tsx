import MilkSection from "./milkSection";
import SaleSection from "./saleSection";
import { ProductsContainer } from "./styles";
import ToySection from "./toySection";

const Products: React.FC = () => {
  return (
    <ProductsContainer>
      <SaleSection />
      <MilkSection />
      <ToySection />
    </ProductsContainer>
  );
};

export default Products;
