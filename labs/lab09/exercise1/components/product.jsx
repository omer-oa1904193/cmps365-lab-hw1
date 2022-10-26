/* eslint-disable @next/next/no-img-element */
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './product.module.css'

export function Product({ product }) {
    return <>
        <article className={styles.container}>
            <img className={styles.image} src={product.image} alt="product image" ></img>
            <h3>{product.name}</h3>
            <p>{`$${product.price}`}</p>
            <p>{product.descirption}</p>

            <div>
                <AddIcon></AddIcon>
                <p>{product.quantity}</p>
                <RemoveIcon></RemoveIcon>
            </div>
        </article>

    </>
}