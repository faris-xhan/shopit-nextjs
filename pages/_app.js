import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <title>Shopit - Buy what you love.</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
