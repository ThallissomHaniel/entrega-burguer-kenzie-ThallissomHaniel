import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import styles from "./Header.module.scss";

export const Header = ({ setIsOpen, cartList }) => {

   const searchProduct = () => {
      const findProduct = productList.filter((product) => product.name.includes(value))
      console.log(findProduct);
   }

   return (
      <header className={styles.header}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpen(true)}>
               <MdShoppingCart size={21} />
               <span>{cartList.length}</span>
            </button>
         </div>
      </header>
   );
};
