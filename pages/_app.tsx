import { AppProps } from 'next/dist/shared/lib/router/router';
import { ReactElement } from 'react';
import Navigation from '../components/home/Navigation';
import SearchProducts from '../components/products/search/SearchProducts';
import Logo from '../components/ui/Logo';
import InternationalizationProvider from '../l10n/InternationalizationProvider';

import '../styles/globals.scss';
import styles from './app.module.scss';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <InternationalizationProvider>
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
  )
}

export default MyApp;
