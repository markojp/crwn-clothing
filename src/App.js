import "./categories.styles.scss";
import CategoryItem from "./components/category-item/category-item.component";

const App = () => {
  const categories = [
    {
      id: "sfg45",
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: "rgh23",
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: "rtj67",
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: "gkb84",
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: "jkd62",
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  const categorieElements = categories.map((category) => {
    return <CategoryItem key={category.id} category={category} />;
  });

  return (
    <div>
      <div className="categories-container">{categorieElements}</div>
    </div>
  );
};

export default App;
