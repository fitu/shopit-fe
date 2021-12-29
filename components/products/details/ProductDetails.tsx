import Image from 'next/image';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import { FormattedNumber } from 'react-intl';

import Product from '../../../model/Product';

import styles from './productDetails.module.scss';

interface Props {
    product: Product;
}

const ProductDetails = ({ product }: Props): ReactElement => {
    const imageSrc = !product.images ? '' : product.images[0].url;

    return (
        <data className={styles.container}>
            <div className={styles.imageContainer}>
                <Image alt={product.title} className={styles.image} height={240} src={imageSrc} width={240} />
            </div>
            <div className={styles.detailsContainer}>
                <span className={styles.name}>{product.title}</span>
                <span className={styles.price}>
                    <FormattedNumber currency={'USD'} style="currency" value={product.price} />
                </span>
            </div>
        </data>
    );
};

ProductDetails.propTypes = { product: PropTypes.instanceOf(Product).isRequired };

ProductDetails.displayName = 'ProductDetails';

export default ProductDetails;
