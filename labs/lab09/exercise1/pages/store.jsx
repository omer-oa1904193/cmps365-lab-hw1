import { Product } from "../components/product.jsx";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
export default function Store() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function initPoructs() {
            setProducts(
                Array.from(Array(10).keys()).map(i => ({
                    id: faker.datatype.bigInt(),
                    name: faker.commerce.product(),
                    descirption: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    image: faker.image.animals(350, 250, true),
                    quantity: faker.random.numeric(),
                })))
        }
        initPoructs();
    }, [])
    console.log(products)
    return <>
        <section className="products">
            {products.map(p =>
                <Product key={p.id} product={p}>

                </Product>
            )
            }
        </section>
    </>
}