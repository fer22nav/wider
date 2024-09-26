import React from 'react';
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from '../styles/main.module.css';
import { Col, Container, Row } from "react-bootstrap";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Index() {
  const { t } = useTranslation('common');
  return (
    <div>
      <section>
        <div className={styles.firstContainer}>

          <h1 className="opacity-0">Home wider accessibility</h1>

          <h2 className="titulo-xxl color-white d-md-none" dangerouslySetInnerHTML={{ __html: t('welcome') }}>
          </h2>
          <h2 className="titulo-xxl color-white d-none d-md-block d-lg-none" dangerouslySetInnerHTML={{ __html: t('welcome') }}>

          </h2>
          <h2 className="titulo-xxl color-white d-none d-lg-block" dangerouslySetInnerHTML={{ __html: t('welcome') }}>

          </h2>

          <div className={styles.paragraphContainer}>
            <p className='p-xl color-white mb-0' dangerouslySetInnerHTML={{ __html: t('description1') }}></p>
            <p className='p-xl color-white' dangerouslySetInnerHTML={{ __html: t('description2') }}></p>
          </div>
          <Row >
            <Col xs={12} md={12} lg={2} >
              <a href="#contact-section" className='button-lima p-boton d-inline-flex text-decoration-none'>
                {t('contactbt')}
              </a>
            </Col>
            {/* <Col xs={12} md={12} lg={10} >
              <button className='button-blue p-boton'>Descargar brochure de servicios</button>
            </Col> */}
          </Row>
        </div>
        <Row className={styles.gridContainer}>
          <Col xs={12} md={6} lg={7} className="text-center text-md-start">
            <h2 className="titulo-l color-white mb-0">Diseño, estrategia,<br />innovación e inclusión.</h2>
          </Col>
          <Col xs={12} md={6} lg={5} className={`${styles.rightColumn} text-center text-md-start pe-0`}>
            <p className="p-m color-white mb-0">Combinamos el <span className="color-lima">pensamiento estratégico, la<br /> accesibilidad y la tecnología</span> para crear <br />experiencias memorables para todas las<br /> personas.</p>
          </Col>
        </Row>
      </section>
      <section className="" >
        <Row className={styles.gridContainer}>
          <div className="d-flex justify-content-center">
            <h2 className="titulo-xl color-white text-center text-md-start">Nuestra Experiencia</h2>
          </div>

          <ul className="list-unstyled row">
            <li className="col-12 col-md-4 mb-4">
              <div className="text-center">
                <p className="numbers-home">+30</p>
                <p className="roboto">Países diferentes</p>
              </div>
            </li>
            <li className="col-12 col-md-4 mb-4">
              <div className="text-center">
                <p className="numbers-home">+200</p>
                <p className="roboto">Demandas revisadas</p>
              </div>
            </li>
            <li className="col-12 col-md-4 mb-4">
              <div className="text-center">
                <p className="numbers-home">+10 mil</p>
                <p className="roboto">Personas capacitadas</p>
              </div>
            </li>
          </ul>
        </Row>

      </section>
      <section >
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 ">
            <h2 className="titulo-l color-white mb-4 text-center text-md-start">
              Algunos de<br /> nuestros<br />
              <span className="color-lima">clientes</span>
            </h2>
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <ul className="row list-unstyled">
              <li className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <Image
                  width={150}
                  height={80}
                  src="/images/smartecarte.svg"
                  alt="smartecarte"
                />
              </li>
              <li className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <Image
                  width={300}
                  height={80}
                  src="/images/volvo.svg"
                  alt="volvo"
                />
              </li>
              <li className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <Image
                  width={150}
                  height={80}
                  src="/images/bid.svg"
                  alt="bid"
                />
              </li>
              <li className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <Image
                  width={150}
                  height={80}
                  src="/images/modo.svg"
                  alt="modo"
                />
              </li>
              <li className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <Image
                  width={150}
                  height={80}
                  src="/images/rga.svg"
                  alt="rga"
                />
              </li>
              <li className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <Image
                  width={120}
                  height={80}
                  src="/images/sky.svg"
                  alt="sky"
                />
              </li>
              <li className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <Image
                  width={150}
                  height={80}
                  src="/images/unibarcelona.svg"
                  alt="unibarcelona"
                />
              </li>
              <li className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <Image
                  width={150}
                  height={80}
                  src="/images/bcp.svg"
                  alt="bcp"
                />
              </li>
              <li className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <Image
                  width={80}
                  height={80}
                  src="/images/itx.svg"
                  alt="ITX"
                />
              </li>
            </ul>

          </div>
        </div>
      </section>
      <Row className={styles.gridContainer}>
        <Col xs={12} md={6} lg={6} className="mb-4 mb-md-0">
          <h2 className="titulo-l color-white mb-0">Solo trabajamos <br />con <span className="color-lima">expertos</span></h2>
        </Col>
        <Col xs={12} md={6} lg={6} >
          <p className="p-l color-white mb-0">Todos nuestros profesionales tienen al menos<br /> 4 años de experiencia en accesibilidad y están <br />certificados internacionalmente a través de la<br /> Asociación Internacional de Profesionales de<br /> Accesibilidad (IAAP).</p>
        </Col>
      </Row>

      <ul className="row list-unstyled">
        {/* Tarjeta 1 */}
        <li className="col-xs-12 col-md-6 col-lg-3 mb-4 d-flex">
          <div className="card-container-small">
            <div className="d-flex">
              <div className={styles.legalIcon}>
                <Image
                  src="/images/legal-team-icon.svg"
                  width={33}
                  height={33}
                  alt="Wider Logo"
                />
              </div>
              <p className="p-card-small-title">Equipo<br /> Legal</p>
            </div>
            <p className="p-card-small">Contamos con abogados y expertos en cumplimiento de distintas partes del mundo, que en muchos casos han sido co-autores y asesores expertos de leyes y estándares.</p>
          </div>
        </li>

        {/* Tarjeta 2 */}
        <li className="col-xs-12 col-md-6 col-lg-3 mb-4 d-flex">
          <div className="card-container-small">
            <div className="d-flex">
              <div className={styles.legalIcon}>
                <Image
                  src="/images/testing-icon.svg"
                  width={33}
                  height={33}
                  alt="Wider Logo"
                />
              </div>
              <p className="p-card-small-title">Equipos de <br />Testing</p>
            </div>
            <p className="p-card-small">Contamos con expertos en pruebas de accesibilidad que diagnostican y miden el cumplimiento de los estándares de accesibilidad. Registran los errores y documentan formas de remediación para que puedan ser solucionados por los equipos de desarrollo.</p>
          </div>
        </li>

        {/* Tarjeta 3 */}
        <li className="col-xs-12 col-md-6 col-lg-3 mb-4 d-flex">
          <div className="card-container-small">
            <div className="d-flex">
              <div className={styles.strategyIcon}>
                <Image
                  src="/images/transformation-icon.svg"
                  width={24}
                  height={24}
                  alt="Wider Logo"
                />
              </div>
              <p className="p-card-small-title">Consultores de<br /> accesibilidad</p>
            </div>
            <p className="p-card-small">Contamos con expertos en crear estrategias para que tus productos sean y se mantengan accesibles para todas las personas cumpliendo los estándares según tu industria de principio a fin.</p>
          </div>
        </li>

        {/* Tarjeta 4 */}
        <li className="col-xs-12 col-md-6 col-lg-3 mb-4 d-flex">
          <div className="card-container-small">
            <div className="d-flex">
              <div className={styles.uxuiIcon}>
                <Image
                  src="/images/uxui-icon.svg"
                  width={33}
                  height={33}
                  alt="Wider Logo"
                />
              </div>
              <p className="p-card-small-title">Diseñadores<br /> UX/UI </p>
            </div>
            <p className="p-card-small">Contamos con diseñadores UX/UI especializados en crear experiencias digitales atractivas, fáciles de usar y accesibles. Además revisan y dan recomendaciones de remediación para diseños y sistemas de diseño.</p>
          </div>
        </li>
      </ul>
      {/* <div className={styles.bgVector3}></div> */}

      <section id="contact-section" className=" pt-180 pb-180">
        <h2 className="p-xl color-white mb-0 text-center">Si querés saber más, solicita una cita con nuestros  <br /> profesionales en
          <span className="color-lima"> info@wider.global</span></h2>
      </section>
    </div >
  );
}

