import Link from 'next/link';
import styles from '../styles/header.module.css';

const Navigation = () => (
  <nav aria-label="Principal" className={styles.nav}>
    <ul className={styles.navList}>
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/services">Servicios</Link>
      </li>
      <li>
        <Link href="/team" aria-label="Conocer al equipo">Sobre nosotros</Link>
      </li>
      <li>
        <Link href="/contact">Contacto</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;