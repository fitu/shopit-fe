import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ReactElement } from 'react';

import { getAllProducts } from '../../api/products/productsApi';
import ProductDetails from '../../components/products/details/ProductDetails';
import Product from '../../model/Product';

import styles from './productDetails.module.scss';

const getRoute = (product: Product) => ({
    pathname: '/products/[id]',
    query: { product: JSON.stringify(product), },
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

const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;

    const products = await getAllProducts();

    const foundProduct = products.find((product) => product.id === params?.id);

    if (!foundProduct) {
        return { notFound: true };
    }

    return {
        props: { product: foundProduct },
    };
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
