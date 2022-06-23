import Head from "next/head";
import Banner from "./banner";
import Products from "./products";
import {
  BannerContainer,
  HomeContainer,
  BannerSection,
  Main,
  ProductsSection,
} from "./styles";

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerSection>
        <BannerContainer>
          <Banner />
        </BannerContainer>
      </BannerSection>
      <ProductsSection>
        <Main>
          <Products />
        </Main>
      </ProductsSection>
    </HomeContainer>
  );
};

export default HomePage;
