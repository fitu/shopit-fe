import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { ReactElement } from "react";
import Product from '../../../model/Product';

const ProductDetails = ({ product }: Props): ReactElement => {
    const imageSrc = isEmpty(product.images) ? '' : product.images[0].url;

    return (
        <div>
            <img src={imageSrc} alt={product.name} />
            <span>{product.name}</span>
            <span>{product.price}</span>
        </div>
    )
};

interface Props {
    product: Product;
}

ProductDetails.propTypes = {
    product: PropTypes.instanceOf(Product).isRequired,
}

export default ProductDetails;
