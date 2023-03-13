import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <html lang="ko">
        <head>
            <meta charSet="UTF-8"/>
                <title>index</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="/css/normalize.css"/>
                        <link rel="stylesheet" href="/css/main.css"/>
                            <link rel="stylesheet" href="/css/project2.css"/>


        </head>
        <body>
        <div id="wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
        </body>
        </html>
    );
};

export default Layout;