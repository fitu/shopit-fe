import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';

import Product from '../../model/Product';
import ProductDetails from './ProductDetails';

const ProductList: React.FC<Props> = ({ products }): ReactElement => {
    if (isEmpty(products)) {
        return (
            <div>
                <span>No Products!</span>
            </div>
        )
    }

    return (
        <section>
            {products.map((product) => <ProductDetails key={product._id} product={product} />)}
        </section>
    )
};

interface Props {
    products: Array<Product>;
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.instanceOf(Product).isRequired).isRequired,
}

export default ProductList;
