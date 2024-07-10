import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import Image from 'next/image';

const NavItem = ({ href, label, ariaLabel }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li className={isActive ? styles.active : ""}>
      <Link className={styles.pNav} href={href} aria-label={ariaLabel}>{label}</Link>
      {isActive && (
        <Image
          src="/images/vector-menu.svg"
          width={60}
          height={20}
          alt="Wider Logo"
          className={styles.menuIcon}
        />
      )}
    </li>
  );
};

const Navigation = () => (
  <nav aria-label="Principal" className={styles.nav}>
    <ul className={styles.navList}>
      <NavItem href="/" label="Inicio" />
      <NavItem href="/services" label="Servicios" />
      <NavItem href="/team" label="Sobre nosotros" ariaLabel="Conocer al equipo" />
      <NavItem href="/contact" label="Contacto" />
    </ul>
  </nav>
);

export default Navigation;