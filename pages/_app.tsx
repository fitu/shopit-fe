import { AppProps } from 'next/dist/shared/lib/router/router';
import { ReactElement } from 'react';

import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  return <Component {...pageProps} />
}


export default MyApp;
