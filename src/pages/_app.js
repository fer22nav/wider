import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import Maintenance from './Maintenance';

const metadata = {
  title: 'Home wider accessibility',
  description: 'Generated by create next app',
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const direction = locale === 'ar' || locale === 'he' ? 'rtl' : 'ltr';

  const isMaintenanceMode = true;

  if (isMaintenanceMode) {
    return (
      <>
        <Head>
          <title>Proximamente - Wider</title>
          <meta name="description" content="Nuestro sitio está en construccion. Vuelve pronto." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Maintenance />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div dir={direction}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default appWithTranslation(MyApp);
