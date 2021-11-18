import { ReactElement } from 'react';
import ProductList from '../components/products/list/ProductList';

import { getProducts } from '../data/productData';

import styles from './index.module.scss';

const HomePage: React.FC = (): ReactElement => {
    const products = getProducts();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Latest Products</h1>
            <ProductList products={products} />
            <footer></footer>
        </div>
    );
};

export default HomePage;
