import CardItem from "../../containers/homePage/products/components/cardItem";
import Title from "../../containers/homePage/products/components/Title";
import { IProduct } from "../../containers/homePage/products/milkSection";
import {
  Price,
  PriceContainer,
} from "../../containers/homePage/products/styles";
import { CartIcon } from "./icons";
import { LayoutContainer, ProductBox, TitleProduct } from "./styles";

interface IProductsLayout {
  title: string;
  description: string;
  productList: IProduct[];
}

const ProductsLayout: React.FC<IProductsLayout> = ({
  title,
  description,
  productList,
}) => {
  return (
    <LayoutContainer>
      <Title description={description}>{title}</Title>
      <ProductBox>
        {productList.map((product, index) => {
          return (
            <CardItem key={index} image={product.image}>
              <TitleProduct>{product.title}</TitleProduct>
              <PriceContainer>
                <Price>
                  đ {`${product.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Price>
                <CartIcon />
              </PriceContainer>
            </CardItem>
          );
        })}
      </ProductBox>
    </LayoutContainer>
  );
};

export default ProductsLayout;
