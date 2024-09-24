import Image from 'next/image';
import styles from '../styles/footer.module.css';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
  //hacerlo responsive 
  return (
    <footer >
      <Row className={styles.container}>
        <Col xs={12} md={4} lg={4} className="mb-5 d-flex justify-content-center align-items-center">
          <Image src="/images/logo-footer.svg"
            className=""
            width={100}
            height={56}
            alt="Wider Logo" />
        </Col>
        <Col xs={12} md={4} lg={4} className='mb-4'>
          <p className='titulo-footer'>Oficinas</p>
          <p className='p-footer'>EEUU | España | Argentina | Perú | México</p>
          <p className='p-xs color-white ' >Copyright 2024</p>
          <Link href="/PrivacyPolicy" className='link-footer me-4 d-block d-md-inline mb-2 mb-md-0'>
            Política de Privacidad
          </Link>

          <Link href="/AccessibilityStatement" className='link-footer d-block d-md-inline'>
            Declaración de Accesibilidad
          </Link>
        </Col>
        <Col xs={12} md={4} lg={4} className='mb-4'>
          <p className='titulo-footer'>Contacto</p>
          <p className='p-footer'>info@wider.global</p>
          <a href="https://www.linkedin.com/company/wider.global" className='text-decoration-none'>
            <Image src="/images/in-icon.svg"
              className="me-2"
              width={24}
              height={24}
              alt="Linkedin Wider" /> </a>
        </Col>
      </Row>
    </footer>
  )
}
export default Footer