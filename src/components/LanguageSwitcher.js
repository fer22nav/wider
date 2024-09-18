// components/LanguageSwitcher.js
import { useRouter } from 'next/router';
import styles from '../styles/languageSwitcher.module.css';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  // Función para alternar entre los idiomas
  const toggleLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className={styles.languageSwitcher}
      aria-label={locale === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
    >
      <span className={locale === 'es' ? styles.active : ''}>ESPAÑOL</span>
      <span className={styles.separator}> / </span>
      <span className={locale === 'en' ? styles.active : ''}>ENGLISH</span>
    </button>
  );
};

export default LanguageSwitcher;
