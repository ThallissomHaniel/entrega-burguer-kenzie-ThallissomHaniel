import { MdDelete } from "react-icons/md";
import styles from "./CartItem.module.scss";

export const CartItemCard = ({ product, deleteModalCard }) => {
   
   return (
      <li>
         <div className={styles.imgDiv}>
            <img src={product.img} alt={product.name} />
         </div>
         <div className={styles.productInfo}>
            <h3>{product.name}</h3>
            <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => deleteModalCard(product)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
