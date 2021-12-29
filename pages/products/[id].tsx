import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { UrlObject } from 'node:url';
import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { getAllProducts, getProductById } from '../../api/products/productsApi';
import ProductDetails from '../../components/products/details/ProductDetails';
import Product from '../../model/Product';

import styles from './productDetails.module.scss';

const getRoute = (productId: string): UrlObject => ({
    pathname: '/products/[id]',
    query: { id: productId },
});

interface Props {
    product?: Product;
}

const ProductDetailsPage = ({ product }: Props): ReactElement => {
    if (!product) {
        return (
            <div>
                <FormattedMessage id="products.content.no_product_to_show" />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <ProductDetails product={product} />
        </div>
    );
};

const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;

    if (!params?.id) {
        return { notFound: true };
    }

    const product = await getProductById(params.id as string);

    if (!product) {
        return { notFound: true };
    }

    return { props: { product: JSON.parse(JSON.stringify(product)) } };
};

const getStaticPaths: GetStaticPaths = async () => {
    const products = await getAllProducts();
    const paths = products.map((product) => ({ params: { id: product.id.toString() } }));

    return {
        paths,
        // fallback: false -> pregenerate all listed pages, if you access a not listed one, a 404 will be returned.
        // fallback: true -> pregenerate all listed pages, but allow to access not listed ones.
        // fallback: 'blocking' -> pregenerate all listed pages, but wait for it to get it from server.
        fallback: true,
    };
};

ProductDetailsPage.displayName = 'ProductDetailsPage';

export { getRoute, getStaticProps, getStaticPaths };
export default ProductDetailsPage;
