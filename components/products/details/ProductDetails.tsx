import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { ReactElement } from "react";

import Product from '../../../model/Product';

import styles from './productDetails.module.scss';

const ProductDetails = ({ product }: Props): ReactElement => {
    const imageSrc = isEmpty(product.images) ? '' : product.images[0].url;

    return (
        <data className={styles.container}>
            <img className={styles.image} src={imageSrc} alt={product.name} />
            <div className={styles.detailsContainer}>
                <span className={styles.text}>{product.name}</span>
                <span className={styles.text}>{product.price}</span>
            </div>
        </data>
    )
};

interface Props {
    product: Product;
}

ProductDetails.propTypes = {
    product: PropTypes.instanceOf(Product).isRequired,
}

export default ProductDetails;
