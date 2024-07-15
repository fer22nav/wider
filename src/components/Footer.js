import Image from 'next/image';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div>
          <Image src="/images/logo-footer.svg"
            className=""
            width={100}
            height={56}
            alt="Wider Logo" />
        </div>
        <div>
          <p className='titulo-footer'>Oficinas</p>
          <p className='p-footer'>EEUU | España | Argentina | Perú | México</p>
          <a className='link-footer me-4' href="#">Copyright 2024</a>
          <a className='link-footer me-4' href="#" >Política de Privacidad</a>
          <a className='link-footer' href="#" >Declaración de Accesibilidad</a>
        </div>
        <div>
          <p className='titulo-footer'>Contacto</p>
          <p className='p-footer'>info@wider.global</p>
          icon in / icon youtube
        </div>
      </div>
    </footer>
  )
}
export default Footer