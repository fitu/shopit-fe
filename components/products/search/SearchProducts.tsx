import { ReactElement } from 'react';

import styles from './searchProducts.module.scss';

const SearchProducts: React.FC = (): ReactElement => {
    return (
        <div className={styles.container}>
            <span className={styles.searchTitle}>Enter Product Name</span>
            <button className={styles.searchButton}>
                <svg className={styles.searchIcon} />
            </button>
        </div>
    )
};

export default SearchProducts;
