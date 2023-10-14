import styles from ".././ProductList.module.scss";

export const ProductCard = ({ product, createCartList }) => {
    return (
        <li className={styles.card}>
            <small>
                <img src={product.img} alt={product.name} />
            </small>
            <div>
                <h3 className="Heading3">{product.name}</h3>
                <span className={styles.category}>{product.category}</span>
                <span className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button onClick={() => createCartList(product)}>Adicionar</button>
            </div>
        </li>
    )
}