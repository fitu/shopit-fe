import { isEmpty, isNil } from 'lodash';
import { ReactElement } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next'

import ProductList from '../components/products/list/ProductList';
import { getProducts } from '../data/productData';
import Product from '../model/Product';

import styles from './index.module.scss';

interface Props {
    products: Array<Product>,
}

const HomePage = ({ products }: Props): ReactElement => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Latest Products</h1>
            <ProductList products={products} />
            <footer></footer>
        </div>
    );
};

// Static Site Generation
const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
    const products = getProducts();

    if (isNil(products)) {
        return {
            props: {},
            redirect: {
                destination: '/not-found',
            },
        };
    }

    if (isEmpty(products)) {
        return { notFound: true }; // Show a 404 if true
    }

    return {
        props: { products },
        revalidate: 30, // Incremental Site Generation
    };
};

export { getStaticProps };
export default HomePage;
