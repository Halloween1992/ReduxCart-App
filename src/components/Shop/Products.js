import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    tilte: "12 Rules for life",
    description:
      "An Antidote to Chaos is a 2018 self-help book by the Canadian clinical psychologist Jordan Peterson.",
    price: 49.99,
  },
  {
    id: "p2",
    tilte: "The richest man in babylon",
    description:
      "a by George S. Clason that dispenses financial advice through a collection of parables set 4,000 years ago in ancient Babylon",
    price: 85.3,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.tilte}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
