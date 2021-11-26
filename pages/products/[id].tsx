import { useRouter } from 'next/dist/client/router';
import { ReactElement } from 'react';

import ProductDetails from '../../components/products/details/ProductDetails';
import Product from '../../model/Product';

import styles from './productId.module.scss';

const getRoute = (product: Product) => ({
    pathname: '/products/[id]',
    query: {
        id: product._id,
        product: JSON.stringify(product),
    },
});

const ProductId = (): ReactElement => {
    const router = useRouter();

    const { product: jsonProduct } = router.query;
    if (!jsonProduct) {
        return (
            <div></div>
        )
    }

    const product = JSON.parse(jsonProduct as string);

    return (
        <div className={styles.container}>
            <ProductDetails product={product} />
        </div>
    )
}

export { getRoute }
export default ProductId;
