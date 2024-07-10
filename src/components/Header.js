import Navigation from "./Navigation";
import styles from '../styles/header.module.css';
import Image from "next/image";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/images/wider-header-logo.svg"
          width={80}
          height={40}
          alt="Wider Logo" />
      </div>
      <Navigation />
      <div className={styles.languageSwitch}>
        <a href="#" className={styles.active}>ESPAÑOL</a>
        <span>/</span>
        <a href="#">ENGLISH</a>
      </div>
    </div>
  </header>
);

export default Header;