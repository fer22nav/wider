// components/LanguageSwitcher.js
import { useRouter } from 'next/router';
import styles from '../styles/languageSwitcher.module.css';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  // Función para cambiar el idioma
  const switchLanguage = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className={styles.languageSwitcher} aria-label="Change language">
      <button
        className={locale === 'es' ? styles.active : ''}
        onClick={() => switchLanguage('es')}
        aria-current={locale === 'es' ? 'true' : 'false'}
        aria-label="Cambiar a Español"
      >
        ESPAÑOL
      </button>
      <span className={styles.limaColor}>/</span>
      <button
        className={locale === 'en' ? styles.active : ''}
        onClick={() => switchLanguage('en')}
        aria-current={locale === 'en' ? 'true' : 'false'}
        aria-label="Switch to English"
      >
        ENGLISH
      </button>
    </div>
  );
};

export default LanguageSwitcher;
