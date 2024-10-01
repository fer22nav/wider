import Image from 'next/image';
import styles from '../styles/footer.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


const Footer = () => {

  const { t } = useTranslation('footer');
  return (
    <footer >
      <Container>
        <Row className="container">
          <Col xs={12} md={4} lg={4} className="mb-5 d-flex justify-content-center align-items-center">
            <Image src="/images/logo-footer.svg"
              className=""
              width={100}
              height={56}
              alt="Wider Logo" />
          </Col>
          <Col xs={12} md={4} lg={4} className='mb-4 '>
            <p className='titulo-footer'>{t('offices')}</p>
            <p className='p-footer'>EEUU | España | Argentina | Perú | México</p>
            <p className='p-xs color-white ' >Copyright 2024</p>
            <Link href="/PrivacyPolicy" className='link-footer me-4 d-block d-md-inline mb-2 mb-md-0'>
              {t('policylink')}
            </Link>

            <Link href="/AccessibilityStatement" className='link-footer d-block d-md-inline'>
              {t('statementLink')}
            </Link>
          </Col>
          <Col xs={12} md={4} lg={4} className='mb-4  d-md-flex flex-md-column justify-content-md-center align-items-md-center'>
            <div>
              <p className='titulo-footer'>  {t('contact')}</p>
              <p className='p-footer'>info@wider.global</p>
              <a href="https://www.linkedin.com/company/wider.global" className='text-decoration-none'>
                <Image src="/images/in-icon.svg"
                  className="me-2"
                  width={24}
                  height={24}
                  alt="Linkedin Wider" /> </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer