import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher"; // Importamos el componente de cambio de idioma
import styles from '../styles/header.module.css';
import Image from "next/image";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/images/wider-header-logo.svg"
          width={80}
          height={40}
          alt="Wider Logo"
        />
      </div>

      <LanguageSwitcher />
    </div>
  </header>
);

export default Header;
