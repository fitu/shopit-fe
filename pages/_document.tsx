import Document, { Html, Head, Main, NextScript } from 'next/document';

class ShopitDocument extends Document {
    render() {
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