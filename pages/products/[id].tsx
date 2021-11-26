import { useRouter } from 'next/dist/client/router';
import { ReactElement } from 'react';

import styles from './productId.module.scss';

const getRoute = (productId: string) => ({
    pathname: '/products/[id]',
    query: { id: productId },
});

const ProductId = (): ReactElement => {
    const router = useRouter();

    console.log(router.query.id);

    return (
        <div></div>
    )
}

export { getRoute }
export default ProductId;
