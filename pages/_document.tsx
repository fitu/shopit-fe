import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

class ShopitDocument extends Document {
    render(): ReactElement {
        return (
            <Html>
                <Head lang="en" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default ShopitDocument;
