import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />

                    <link rel="stylesheet" href="css/animate.css" />
                    <link rel="stylesheet" href="css/icomoon.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Script src="js/jquery.min.js" strategy="beforeInteractive" />
                    <Script src="js/jquery.easing.1.3.js" strategy="beforeInteractive" />
                    <Script src="js/jquery.waypoints.min.js" strategy="beforeInteractive" />
                    <Script src="js/main.js" strategy="beforeInteractive" />
                </body>
            </Html>
        )
    }
}

export default Document