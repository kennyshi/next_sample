import NavBar from './navbar';
import Head from 'next/head';
import navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <NavBar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;