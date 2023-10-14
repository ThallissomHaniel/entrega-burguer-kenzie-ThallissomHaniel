import { ProductCard } from "./ProductCard";
import styles from "./ProductList.module.scss";

export const ProductList = ({ productList, createCartList}) => {
   return (
      <ul className={styles.cardList}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} createCartList={createCartList}/>
         ))}
      </ul>
   );
};
