import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../../i18n'; // Importar la inicialización de i18next
import React, { useEffect, useState } from 'react';
import { appWithTranslation, useTranslation } from 'next-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Maintenance from './Maintenance'; // Modo mantenimiento (por si es necesario)

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const direction = locale === 'ar' || locale === 'he' ? 'rtl' : 'ltr'; // Manejo de texto RTL para árabe o hebreo

  const isMaintenanceMode = false;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { t } = useTranslation('common');
  if (!mounted) {
    return null; // Evitar renderizar hasta que esté montado en el cliente
  }
  if (isMaintenanceMode) {
    return (
      <>
        <Head>
          <title>{t('maintenance.title')}</title>  {/* Título para el modo mantenimiento basado en la traducción */}
          <meta name="description" content={t('maintenance.description')} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Maintenance />
      </>
    );
  }

  return (
    <>
      <Head>
        {/* Título dinámico basado en el idioma */}
        <title>{t('home.title')}</title>  {/* Este título cambiará según el idioma */}
        <meta name="description" content={t('home.description')} />
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

export default appWithTranslation(MyApp); // No necesitas pasar nextI18NextConfig aquí
