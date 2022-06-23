import type { NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import HomePage from "../containers/homePage";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
