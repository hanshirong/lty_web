import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/PagePiling.css';

function MyApp({Component, pageProps, router}) {

    if (router.pathname === '/observer') {
        return <Component {...pageProps} />;
    }

    return (
        <>
            <Header pathname={router.pathname}/>
            <Component {...pageProps}/>
            <Footer/>
        </>
    );
}

export default MyApp
