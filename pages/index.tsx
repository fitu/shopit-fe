import { isEmpty, isNil } from 'lodash';
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';

import { getAllProducts } from '../api/products/productsApi';
import ProductList from '../components/products/list/ProductList';
import Product from '../model/Product';

import styles from './index.module.scss';

interface Props {
    products: Array<Product>;
}

const HomePage = ({ products }: Props): ReactElement => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Latest Products</h1>
            <ProductList products={products} />
            <footer />
        </div>
    );
};

// Static Site Generation
const getStaticProps: GetStaticProps = async () => {
    const products = await getAllProducts();

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

HomePage.displayName = 'HomePage';

export { getStaticProps };
export default HomePage;
