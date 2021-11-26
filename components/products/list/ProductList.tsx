import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import Link from 'next/link';

import Product from '../../../model/Product';
import ProductDetails from '../details/ProductDetails';

import styles from './productList.module.scss';
import { getRoute } from '../../../pages/products/[id]';

const ProductList = ({ products }: Props): ReactElement => {
    if (!products) {
        return (
            <section className={styles.noResultsContainer}>
                <span className={styles.noResultsText}>No Products!</span>
            </section>
        )
    }

    return (
        <section className={styles.resultsContainer}>
            {products.map((product) =>
                <Link href={getRoute(product._id)}>
                    <a>
                        <ProductDetails key={product._id} product={product} />
                    </a>
                </Link>
            )}
        </section>
    )
};

interface Props {
    products: Array<Product>;
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.instanceOf(Product).isRequired).isRequired,
}

export default ProductList;
