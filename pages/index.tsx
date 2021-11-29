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

const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
    const products = getProducts();

    return {
        props: {
            products,
        },
    };
}

export { getStaticProps };
export default HomePage;
