import ProductsLayout from "../../../../layouts/productsLayout";
import { IProduct } from "../milkSection";

const TOY_LIST: IProduct[] = [
  {
    image: "/assets/images/toy-0.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/toy-1.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/toy-2.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/toy-3.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/toy-4.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/toy-5.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/toy-6.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/toy-7.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
];

const ToySection: React.FC = () => {
  return (
    <ProductsLayout
      productList={TOY_LIST}
      title="Đồ chơi trẻ em"
      description="135 khuyến mãi"
    />
  );
};

export default ToySection;
