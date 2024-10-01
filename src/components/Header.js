import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher"; // Importamos el componente de cambio de idioma
import styles from '../styles/header.module.css';
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className="text-decoration-none">
            <Image
              src="/images/wider-header-logo.svg"
              width={80}
              height={40}
              alt="Ir a inicio"
            />
          </Link>
        </div>
        <div className="me-lg-5">
          <LanguageSwitcher />
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
