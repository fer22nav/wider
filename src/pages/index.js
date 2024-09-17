import Image from "next/image";
import styles from '../styles/main.module.css';
import { Col, Container, Row } from "react-bootstrap";

export default function Index() {
  return (
    <div className={styles.minWidth}>
      <section>
        <div className={styles.firstContainer}>

          <h1 className="visually-hidden">Home wider accessibility</h1>
          <h2 className="titulo-xxl color-white ">Hacemos más que<br /> accesibilidad</h2>
          {/* <div className={styles.bgVector1}></div> */}
          <div className={styles.paragraphContainer}>
            <p className='p-xl color-white mb-0'><span className="color-lima">Estrategias escalables</span> para cada cliente.</p>
            <p className='p-xl color-white'><span className="color-lima"> Experiencias memorables</span> para todas las personas.</p>
          </div>
          <div className='d-flex w-100 '>
            <button className='button-lima p-boton me-4' >Contactanos</button>
            <button className='button-blue p-boton'>Descargar brochure de servicios</button>
          </div>
        </div>
        <Row className={styles.gridContainer}>
          <Col xs={12} md={6} lg={7} >
            <h2 className="titulo-l color-white mb-0">Diseño, estrategia,<br />innovación e inclusión.</h2>
          </Col>
          <Col xs={12} md={6} lg={5} className={styles.rightColumn}>
            <p className="p-m color-white mb-0">Combinamos el <span className="color-lima">pensamiento estratégico, la<br /> accesibilidad y la tecnología</span> para crear <br />experiencias memorables para todas las<br /> personas.</p>
          </Col>
        </Row>
      </section>
      <section className="" >
        <Row className="">
          <div className="d-flex justify-content-center">
            <h2 className="titulo-xl color-white">Nuestra Experiencia</h2>
          </div>

          <ul className="d-flex list-unstyled"> 
            <Col as="li" xs={12} md={6} lg={4}>
              <p className="numbers-home">+30</p>
              <p className="roboto">Países diferentes</p>
            </Col>
            <Col as="li" xs={12} md={6} lg={4}>
              <p className="numbers-home">+200</p>
              <p className="roboto">Demandas revisadas</p>
            </Col>
            <Col as="li" xs={12} md={6} lg={4}>
              <p className="numbers-home">+10 mil</p>
              <p className="roboto">Personas capacitadas</p>
            </Col>
          </ul>
        </Row>
      </section>
      <section className="" style={{ paddingTop: '170px' }}>
        <div className="section-container">
          <Row>
            <Col xs={12} md={6} lg={5}  >
              <div className="h-100 d-grid justify-content-between">
                <h2 className="titulo-l color-blue-text">Un equipo con<br />
                  <span className="color-blue"> experiencia</span> </h2>
                <Image
                  width={105}
                  height={20}
                  className="mt-2 mb-4"
                  src="/images/line-1.svg"
                  alt="Descripción de la imagen 1" />
                <p className="p-l color-grey">Trabajamos en red con especialistas
                  de<br /> diferentes disciplinas para potenciar <br />el valor
                  de los servicios que ofrecemos. </p>
                <button className="button-blue p-boton mt-4" style={{ color: '#070F35' }}>Sobre nosotras</button>
              </div>
            </Col>
            <Col xs={12} md={6} lg={7}>
              <div className="d-flex justify-content-between">
                <div className="card-container">
                  <Image src="/images/susi-photo.svg"
                    className="card-photo mb-4"
                    width={224}
                    height={224}
                    alt="Wider Logo" />
                  <p className="card-title mb-2">Susana Pallero</p>
                  <p className="card-text">Chief Accessibility Officer.<br /> W3C Invited Expert.<br /> CPWA, WAS, CPACC.</p>
                </div>
                <div className="card-container">
                  <Image src="/images/pipi-photo.svg"
                    className="card-photo mb-4"
                    width={224}
                    height={224}
                    alt="Wider Logo" />
                  <p className="card-title mb-2">Silvia Marquez</p>
                  <p className="card-text">Diseñadora UX/UI.<br /> Especialista en accesibilidad<br /> digital. CPACC.</p>
                </div>
              </div>
            </Col>
          </Row>
          <div className={styles.bgVector2}></div>
          <Row className="">
            <Col xs={12} md={6} lg={3} className="h-100">
              <div className="card-container-small mb-24">
                <div className={styles.auitoryIcon}>
                  <Image src="/images/auditory-icon.svg"
                    className=""
                    width={24}
                    height={29}
                    alt="Wider Logo" />
                </div>
                <p className='p-card-small-title'>Auditoría</p>
                <p className='p-card-small'>Auditoría y mejora de productos digitales. </p>
              </div>
              <div className="card-container-small ">
                <div className={styles.strategyIcon}>
                  <Image src="/images/transformation-icon.svg"
                    className=""
                    width={29}
                    height={29}
                    alt="Wider Logo" />
                </div>
                <p className='p-card-small-title '>Transformación</p>
                <p className='p-card-small'>Orientación en procesos de transformación tecnológica </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} >
              <div className="card-container-small mb-24">
                <div className={styles.strategyIcon}>
                  <Image src="/images/strategy-icon.svg"
                    className=""
                    width={30}
                    height={30}
                    alt="Wider Logo" />
                </div>
                <p className='p-card-small-title'>Estrategia</p>
                <p className='p-card-small'>Creación de estrategias y<br />políticas de accesibilidad</p>
              </div>
              <div className="card-container-small ">
                <div className={styles.legalIcon}>
                  <Image src="/images/legal-icon.svg"
                    className=""
                    width={34}
                    height={34}
                    alt="Wider Logo" />
                </div>
                <p className='p-card-small-title'>Legal</p>
                <p className='p-card-small'>Reducción del riesgo legal, económico y social.</p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6} className="d-flex justify-content-center align-items-center">
              <div className="">
                <h2 className="titulo-xl">Nuestros <br />servicios</h2>
                <p className='p-card-small'>Contanos la necesidad de
                  tu empresa y te<br /> decimos cómo podemos ayudarte.</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="background-image-section-3 pt-185">
        {/* <div className="section-container">
          <Row className="">
            <Col xs={12} md={6} lg={6} >
              <h2 className="titulo-l color-white">Procesos más eficientes, soluciones sólidas y resultados sostenibles</h2>
              <Image
                width={105}
                height={20}
                className="mt-2 mb-4"
                src="/images/line-2.svg"
                alt="Descripción de la imagen 1" />
              <p className="p-l color-white">Ofrecemos soluciones personalizadas, sólidas y realistas. Construimos planes de acción adaptados a los objetivos y cultura de cada empresa. </p>
            </Col>
            <Col xs={12} md={6} lg={6} >
              <Image src="/images/phone-guy.svg"
                className=""
                width={690}
                height={600}
                alt="Wider Logo" />
            </Col>
          </Row>

        </div> */}
        <div className={styles.bgVector3}></div>
        <div className="section-container">
          <Row className="">
            <Col xs={12} md={6} lg={5} >
              <Image
                width={450}
                height={360}
                className="mt-2 mb-4"
                src="/images/people.svg"
                alt="Descripción de la imagen 1" />
            </Col>
            <Col xs={12} md={6} lg={7} >
              <div className="d-flex flex-column justify-content-around ">
                <h2 className="titulo-xl color-white">Podés contactarnos desde donde estes.</h2>
                <Image
                  width={105}
                  height={20}
                  className="mt-4 mb-5"
                  src="/images/line-3.svg"
                  alt="Descripción de la imagen 1" />
                <button className="button-lima color-white">Contactanos</button></div>
            </Col>
          </Row>
        </div >
      </section>
    </div >
  );
}
