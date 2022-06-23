import ProductsLayout from "../../../../layouts/productsLayout";

export interface IProduct {
  image: string;
  title: string;
  price: number;
}

const MILK_LIST: IProduct[] = [
  {
    image: "/assets/images/milk-0.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/milk-1.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/milk-2.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/milk-3.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/milk-4.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/milk-5.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/milk-6.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/assets/images/milk-7.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
];

const MilkSection: React.FC = () => {
  return (
    <ProductsLayout
      productList={MILK_LIST}
      title="Sữa bột cao cấp"
      description="135 khuyến mãi"
    />
  );
};

export default MilkSection;
