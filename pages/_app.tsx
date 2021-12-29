import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ReactElement } from 'react';

import Navigation from '../components/home/Navigation';
import SearchProducts from '../components/products/search/SearchProducts';
import Logo from '../components/ui/Logo';
import InternationalizationProvider from '../l10n/InternationalizationProvider';

import '../styles/globals.scss';
import styles from './app.module.scss';

const ShopitApp = ({ Component, pageProps }: AppProps): ReactElement => (
    <InternationalizationProvider>
        <Head>
            <title>{"Shopit!"}</title>
            <meta content="Shopit app" name="description" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        </Head>
        <header className={styles.headerContainer}>
            <Logo />
            <div className={styles.searchContainer}>
                <SearchProducts />
            </div>
            <div className={styles.navigationContainer}>
                <Navigation />
            </div>
        </header>
        <main className={styles.mainContainer}>
            <Component {...pageProps} />
        </main>
    </InternationalizationProvider>
);

ShopitApp.displayName = 'MyAShopitApp';

export default ShopitApp;
