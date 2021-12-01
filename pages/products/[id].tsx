import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ReactElement } from 'react';

import ProductDetails from '../../components/products/details/ProductDetails';
import { getProducts } from '../../data/productData';
import Product from '../../model/Product';

import styles from './productId.module.scss';

const getRoute = (productId: string) => ({
    pathname: '/products/[id]',
    query: { id: productId },
});

interface Props {
    product?: Product;
}

const ProductDetailsPage = ({ product }: Props): ReactElement => {
    if (!product) {
        return <div>No product to show</div>;
    }

    return (
        <div className={styles.container}>
            <ProductDetails product={product} />
        </div>
    );
};

const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
    const { params } = context;

    const products = getProducts();

    const foundProduct = products.find((product) => product._id === params?.id);

    if (!foundProduct) {
        return { notFound: true };
    }

    return {
        props: { product: foundProduct },
    };
};

const getStaticPaths: GetStaticPaths = (context: GetStaticPropsContext) => {
    const products = getProducts();
    const paths = products.map((product) => ({ params: { id: product._id } }));

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
