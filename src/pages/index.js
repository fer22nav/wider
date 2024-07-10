import Image from "next/image";
import styles from '../styles/main.module.css';
import { Col, Row } from "react-bootstrap";

export default function Index() {
  return (
    <div className={styles.minWidth}>
      <div className="background-image-section-1">
        <section className="d-flex flex-column align-items-center">
          <h1 className="visually-hidden">Home wider accessibility</h1>
          <h2 className="titulo-xxl color-white mt-5">Hacemos más que <span class="color-lima">accesibilidad</span></h2>
          <p className='p-xl text-center color-white mt-4 mb-4'>Estrategias escalables para cada cliente.<br /> Experiencias memorables para todas las personas.</p>
          <div className='d-flex justify-content-center w-100'>
            <button className='button-lima p-boton me-2' >Sobre nosotras</button>
            <button className='button-blue p-boton ms-2'>Conocer servicios</button>
          </div>
        </section>
        <div className={styles.bgVector1}></div>
        <section className='d-flex justify-content-center align-items-center'>
          <Row className="w-100">
            <Col>
              <h2 className="titulo-l color-white">Diseño,
                <span className="color-lima">estrategia,</span><br />
                <span className="color-lima">innovación</span>  e inclusión.</h2>
              <p className="p-l color-white">Colaboramos con las organizaciones para mejorar procesos,
                enriquece productos digitales y ampliar el alcance a nuevos mercados.</p>
            </Col>
            <Col>
              <Image src="/images/wheelchair-guy.svg"
                width={686}
                height={477}
                alt="Wider Logo" />
            </Col>
          </Row>
        </section>
      </div>
      <section className="background-image-section-2" style={{ paddingTop: '170px' }}>
        <Row >
          <Col className="d-flex flex-column justify-content-between" >
            <h2 className="titulo-l color-blue-text">Un equipo con<br />
              <span className="color-blue"> experiencia</span> </h2>
            <Image
              width={105}
              height={20}
              className="mt-2 mb-4"
              src="/images/line.svg"
              alt="Descripción de la imagen 1" />
            <p className="p-l color-grey">Trabajamos en red con especialistas
              de<br /> diferentes disciplinas para potenciar el valor<br />
              de los servicios que ofrecemos. </p>
            <button className="button-blue p-boton" style={{ color: '#070F35' }}>Sobre nosotras</button>
          </Col>
          <Col >
            <div className="d-flex justify-content-around ">
              <div className="card-container">
                <Image src="/images/susi-photo.png"
                  className="card-photo mb-4"
                  width={224}
                  height={224}
                  alt="Wider Logo" />
                <p className="card-title mb-2">Susana Pallero</p>
                <p className="card-text">Chief Accessibility Officer.<br /> W3C Invited Expert.<br /> CPWA, WAS, CPACC.</p>
              </div>
              <div className="card-container">
                <Image src="/images/pipi-photo.png"
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
        <Row >
          <Col className="" >
            <Row >
              <div className="card-container">
                {/* <Image src="/images/pipi-photo.png"
                  className=""
                  width={224}
                  height={224}
                  alt="Wider Logo" /> */}
                <p>Auditoría</p>
                <p>Auditoría y mejora de productos digitales. </p>
              </div>
              <div className="card-container">
                <img src="imagen1.jpg" alt="Descripción de la imagen 1" />
                <p>Estrategia</p>
                <p>Creación de estrategias y políticas de accesibilidad</p>
              </div>
            </Row>
          </Col>
          <Col className="" >
            <Row >
              <div className="card-container">
                <img src="imagen1.jpg" alt="Descripción de la imagen 1" />
                <p>Transformación</p>
                <p>Orientación en procesos de transformación tecnológica </p>
              </div>
              <div className="card-container">
                <img src="imagen1.jpg" alt="Descripción de la imagen 1" />
                <p>Legal</p>
                <p>Reducción del riesgo legal, económico y social.</p>
              </div>
            </Row>
          </Col>
          <Col className="" >
            <h2>Nuestros servicios</h2>
            <p>Contanos la necesidad de
              tu empresa y te decimos cómo podemos ayudarte.</p>
          </Col>
        </Row>
      </section>
      <section>

      </section>

      <section>
        <h2>Procesos más eficientes, soluciones más sólidas y resultados más sostenibles.</h2>
        <p>Ofrecemos soluciones personalizadas, sólidas y realistas. Construimos planes de acción adaptados a los objetivos y cultura de cada empresa.</p>
        <a href='#'>Contactar al equipo</a>
      </section>

      <section>
        <h2>Procesos más eficientes, soluciones sólidas y resultados sostenibles</h2>
        <p>Ofrecemos soluciones personalizadas, sólidas y realistas. Construimos planes de acción adaptados a los objetivos y cultura de cada empresa. </p>
        <h2>Nuestra Experiencia</h2>
        <div >
          <p>+30</p>
          <p>Paises diferentes</p>
        </div>
        <div >
          <p>+200</p>
          <p>Demandas revisadas</p>
        </div>
        <div >
          <p>+10 mil</p>
          <p>Personas capacitadas</p>
        </div>
      </section>

      <section>
        <img src="imagen1.jpg" alt="Descripción de la imagen 1" />
        <h2>Podés contactarnos desde donde estes.</h2>
        <button >Contactanos</button>
      </section>
    </div >
  );
}
