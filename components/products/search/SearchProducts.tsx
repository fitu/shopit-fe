import { ReactElement } from 'react';
import { FaSearch } from 'react-icons/fa';

import styles from './searchProducts.module.scss';

const SearchProducts: React.FC = (): ReactElement => {
    return (
        <div className={styles.container}>
            <input className={styles.searchTitle}/>
            <button className={styles.searchButton}>
                <FaSearch className={styles.searchIcon} />
            </button>
        </div>
    )
};

export default SearchProducts;

