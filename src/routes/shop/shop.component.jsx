import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  const shopElements = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  return <div className="products-container">{shopElements}</div>;
};

export default Shop;
