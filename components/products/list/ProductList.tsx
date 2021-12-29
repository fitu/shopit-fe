import Link from 'next/link';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import Product from '../../../model/Product';
import { getRoute } from '../../../pages/products/[id]';
import ProductDetails from '../details/ProductDetails';

import styles from './productList.module.scss';

interface Props {
    products: Array<Product>;
}

const ProductList = ({ products }: Props): ReactElement => {
    if (!products) {
        return (
            <section className={styles.noResultsContainer}>
                <span className={styles.noResultsText}>
                    <FormattedMessage id="home.content.no_products" />
                </span>
            </section>
        );
    }

    return (
        <section className={styles.resultsContainer}>
            {products.map((product) => (
                <Link href={getRoute(product.id)} key={product.id}>
                    <a>
                        <ProductDetails key={product.id} product={product} />
                    </a>
                </Link>
            ))}
        </section>
    );
};

ProductList.propTypes = { products: PropTypes.arrayOf(PropTypes.instanceOf(Product).isRequired).isRequired };

ProductList.displayName = 'ProductList';

export default ProductList;
