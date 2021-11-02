import { ReactElement } from 'react';
import Navigation from '../components/home/Navigation';
import ProductList from '../components/products/ProductList';
import SearchProducts from '../components/products/SearchProducts';

import Logo from '../components/ui/Logo';
import { getProducts } from '../data/productData';

const HomePage: React.FC = (): ReactElement => {
    const products = getProducts();

    return (
        <div>
            <header>
                <div>
                    <Logo />
                </div>
                <div>
                    <SearchProducts />
                </div>
                <Navigation />
            </header>
            <main>
                <h1>Latest Products</h1>
                <ProductList products={products} />
            </main>
            <footer></footer>
        </div>
    );
};

export default HomePage;
