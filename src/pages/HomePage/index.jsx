import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsApi } from "../../components/services/api";

export const HomePage = () => {
   const products = localStorage.getItem("@products");

   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(products ? JSON.parse(products) : []);
   const [isOpen, setIsOpen] = useState(false);

   const createCartList = (addProduct) => {
      const hasProduct = cartList.some((product) => product.id === addProduct.id);

      if (!hasProduct) {
         setCartList([...cartList, addProduct]);
      } 
   }

   const deleteModalCard = (removeProduct) => {
      const deleteProduct = cartList.filter((card) => card.id !== removeProduct.id)
      console.log(deleteProduct);
      setCartList(deleteProduct)
   }

   useEffect(() => {
      localStorage.setItem("@products", JSON.stringify(cartList))     
   }, [cartList])

   useEffect(() => {
      const getProducts = async () => {
         try {
            const { data } = await productsApi.get("/products");
            setProductList(data);
         } catch (error) {
            throw new Error(error.message);
         }
      }
      getProducts()
   }, [])


   return (
      <>
         <Header setIsOpen={setIsOpen} cartList={cartList} productList={productList}/>
         <main>
            <ProductList productList={productList} createCartList={createCartList}/>
            <CartModal setCartList={setCartList} cartList={cartList} isOpen={isOpen} setIsOpen={setIsOpen} deleteModalCard={deleteModalCard}/>
         </main>
      </>
   );
};
