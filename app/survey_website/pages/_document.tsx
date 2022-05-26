import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocs extends Document {
    render(): JSX.Element {
        return (
            <Html data-theme="kha" style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    <meta name="application-name" content="PWA App" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="PWA App" />
                    <meta name="description" content="Best PWA App in the world" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="msapplication-config" content="/icons/browserconfig.xml" />
                    <meta name="msapplication-TileColor" content="#2B5797" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content="#000000" />

                    <link rel="apple-touch-icon" href="/icons/touch-icon-ipad.png" />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/icons/touch-icon-ipad.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/icons/touch-icon-iphone-retina.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="167x167"
                        href="/icons/touch-icon-ipad-retina.png"
                    />

                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-x16.png" />
                    <link rel="manifest" href="/manifest.json" />
                    {/* <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" /> */}
                    {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocs;
