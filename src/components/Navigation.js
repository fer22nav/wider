import Link from 'next/link';

const Navigation = () => (
  <nav aria-label="Main navigation">
    <ul>
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/about">Servicios</Link>
      </li>
      <li>
        <Link href="/contact">Equipo</Link>
      </li>
      <li>
        <Link href="/contact">Contacto</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;