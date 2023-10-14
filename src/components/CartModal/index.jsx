import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./CartModal.module.scss";

export const CartModal = ({ cartList, isOpen, setIsOpen, deleteModalCard, setCartList }) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0); 

   return (
      <div role="dialog" className={styles.modalOverlay} id={!isOpen && "hidden"}>
         <div className={styles.modal}>
            <div className={styles.modalHeader}>
               <h2 className="">Carrinho de compras</h2>
               <button className={styles.closeButton} aria-label="close" title="Fechar" onClick={() => setIsOpen(false)}>
                  <MdClose size={21} />
               </button>
            </div>

            <div className={styles.modalMain}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} cartList={cartList} deleteModalCard={deleteModalCard}/>
                  ))}
               </ul>
            </div>
            
            <div className={styles.modalFooter}>
               <div>
                  <span className={styles.total}>Total</span>
                  <span className={styles.totalPrice}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={() => setCartList([])}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
