import Image from 'next/image';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';

import { deleteProductById, editProduct } from '../../../api/products/productsApi';
import Product from '../../../model/Product';
import PrimaryButton from '../../forms/button/PrimaryButton';
import Label from '../../ui/Label';

import styles from './productDetails.module.scss';

interface Props {
    isEditMode?: boolean;
    product: Product;
}

const ProductDetails = ({ isEditMode = false, product }: Props): ReactElement => {
    const imageSrc = !product.images ? '' : product.images[0].url;

    const handleEdit = async (): Promise<void> => {
        await editProduct(product.id);
    };

    const handleDelete = async (): Promise<void> => {
        await deleteProductById(product.id);
    };


    return (
        <data className={styles.container}>
            <div className={styles.imageContainer}>
                <Image alt={product.title} className={styles.image} height={240} src={imageSrc} width={240} />
            </div>
            <div className={styles.detailsContainer}>
                <Label isEditMode={isEditMode} name={product.title} text={product.title} />
                <Label isEditMode={isEditMode} name={'price'} text={`$ ${product.price}`} />
                {/* <FormattedNumber currency={'USD'} style="currency" value={product.price} /> */}
            </div>
            {isEditMode && (
                <div className={styles.buttonsContainer}>
                    <PrimaryButton isBold isRounded titleId="products.content.edit" onClick={handleEdit} />
                    <PrimaryButton isBold isRounded titleId="products.content.delete" onClick={handleDelete} />
                </div>
            )}
        </data>
    );
};

ProductDetails.propTypes = {
    isEditMode: PropTypes.bool,
    product: PropTypes.instanceOf(Product).isRequired,
};

ProductDetails.displayName = 'ProductDetails';

export default ProductDetails;
