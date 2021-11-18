import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';

import Product from '../../../model/Product';
import ProductDetails from '../details/ProductDetails';

import styles from './productList.module.scss';

const ProductList = ({ products }: Props): ReactElement => {
    if (isEmpty(products)) {
        return (
            <section className={styles.noResultsContainer}>
                <span className={styles.noResultsText}>No Products!</span>
            </section>
        )
    }

    return (
        <section className={styles.resultsContainer}>
            {products.map((product) => <ProductDetails key={product._id} product={product} />)}
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
