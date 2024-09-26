import React from 'react';
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from '../styles/main.module.css';
import { Col, Container, Row } from "react-bootstrap";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
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
              <button className='button-blue p-boton'>{t('contactbt')}</button>
            </Col> */}
          </Row>
        </div>
        <Row className={styles.gridContainer}>
          <Col xs={12} md={6} lg={7} className="text-center text-md-start">
            <h2 className="titulo-l color-white mb-0" dangerouslySetInnerHTML={{ __html: t('desingh2') }}></h2>
          </Col>
          <Col xs={12} md={6} lg={5} className={`${styles.rightColumn} text-center text-md-start pe-0`}>
            <p className="p-m color-white mb-0" dangerouslySetInnerHTML={{ __html: t('desingP') }}></p>
          </Col>
        </Row>
      </section>
      <section className="" >
        <Row className={styles.gridContainer}>
          <div className="d-flex justify-content-center">
            <h2 className="titulo-xl color-white text-center text-md-start"> {t('experienceH2')}</h2>
          </div>

          <ul className="list-unstyled row">
            <li className="col-12 col-md-4 mb-4">
              <div className="text-center">
                <p className="numbers-home">+30</p>
                <p className="roboto">{t('experienceP1')}</p>
              </div>
            </li>
            <li className="col-12 col-md-4 mb-4">
              <div className="text-center">
                <p className="numbers-home">+200</p>
                <p className="roboto">{t('experienceP2')}</p>
              </div>
            </li>
            <li className="col-12 col-md-4 mb-4">
              <div className="text-center">
                <p className="numbers-home">+10 mil</p>
                <p className="roboto">{t('experienceP3')}</p>
              </div>
            </li>
          </ul>
        </Row>

      </section>
      <section >
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 ">
            <h2 className="titulo-l color-white mb-4 text-center text-md-start" dangerouslySetInnerHTML={{ __html: t('someClients') }}>
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
                  width={180}
                  height={80}
                  src="/images/eafit.svg"
                  alt="universidad EAFIT"
                />
              </li>
              <li className="col-12 col-md-4 d-flex justify-content-center mb-4">
                <Image
                  width={150}
                  height={80}
                  src="/images/unibarcelona.svg"
                  alt="universidad de barcelona"
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
          <h2 className="titulo-l color-white mb-0" dangerouslySetInnerHTML={{ __html: t('expertsH2') }}></h2>
        </Col>
        <Col xs={12} md={6} lg={6} >
          <p className="p-l color-white mb-0" dangerouslySetInnerHTML={{ __html: t('expertsP') }}></p>
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
                  alt="legal Logo"
                />
              </div>
              <p className="p-card-small-title" dangerouslySetInnerHTML={{ __html: t('LegalTeamTitle') }}></p>
            </div>
            <p className="p-card-small" dangerouslySetInnerHTML={{ __html: t('LegalTeamP') }}></p>
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
                  alt="testing Logo"
                />
              </div>
              <p className="p-card-small-title" dangerouslySetInnerHTML={{ __html: t('testingTeamTitle') }}></p>
            </div>
            <p className="p-card-small" dangerouslySetInnerHTML={{ __html: t('testingTeamP') }}></p>
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
                  alt="Accesibility Logo"
                />
              </div>
              <p className="p-card-small-title" dangerouslySetInnerHTML={{ __html: t('accesibilityTitle') }}></p>
            </div>
            <p className="p-card-small" dangerouslySetInnerHTML={{ __html: t('accesibilityP') }}></p>
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
              <p className="p-card-small-title" dangerouslySetInnerHTML={{ __html: t('uxuiTitle') }}></p>
            </div>
            <p className="p-card-small" dangerouslySetInnerHTML={{ __html: t('uxuiP') }}></p>
          </div>
        </li>
      </ul>
      {/* <div className={styles.bgVector3}></div> */}

      <section id="contact-section" className=" pt-180 pb-180">
        <h2 className="p-xl color-white mb-0 text-center" dangerouslySetInnerHTML={{ __html: t('constactMail') }}></h2>
      </section>
    </div >
  );
}

