import { ReactElement } from 'react';
import { FaSearch } from 'react-icons/fa';
import InputValue from '../../forms/InputValue';

import styles from './searchProducts.module.scss';

const SearchProducts: React.FC = (): ReactElement => {
    return (
        <div className={styles.container}>
            <InputValue
                isSubmitted={true}
                isValid={false}
                label='this is the label'
                name={'search'}
                placeHolder='this is the placeholder'
                value={1}
                setValue={() => 2}
            />
            <button className={styles.searchButton}>
                <FaSearch className={styles.searchIcon} />
            </button>
        </div>
    )
};

export default SearchProducts;

