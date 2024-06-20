import Link from 'next/link';
import styles from './header.module.css';

const Navigation = () => (
  <nav aria-label="Principal" className={styles.nav}>
    <ul className={styles.navList}>
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/about">Servicios</Link>
      </li>
      <li>
        <Link href="/contact" aria-label="Conocer al equipo">Equipo</Link>
      </li>
      <li>
        <Link href="/contact">Contacto</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;