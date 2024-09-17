import Image from "next/image";
import { Col, Row } from "react-bootstrap";

export default function Team() {
  return (
    <>
      <section className="background-image-section-team-1">
        <div className="section-container pt-5">
          <h1 className="titulo-xxl color-white text-center mb-50">Un equipo con experiencia</h1>
          <div className=" text-container">
            <p className="p-xxxl color-white text-center mt-4">“Nuestra meta es ayudar a las empresas a<br /> construir
              productos y servicios que transformen positivamente
              la vida de las personas.”</p>
          </div>

          <Row>
            <Col xs={12} md={6} lg={4} >
              <Image src="/images/vr-guy.svg"
                width={390}
                height={556}
                alt="Wider Logo" />
            </Col>
            <Col xs={12} md={6} lg={8} className="d-flex align-items-center" >
              <div className="ps-5">
                <p className="p-xxl color-lila-text mb-5">Sabemos de estándares y<br />  cómo cumplirlos, desde un<br />  enfoque más amplio.</p>
                <button className='button-lima p-boton '>Contactanos</button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="background-image-section-team-2">
        <div className="section-container d-flex flex-column justify-content-evenly h-100">
          <div className="text-center">
            <h2 className="titulo-xl color-blue-text text-center ">Nos presentamos</h2>
            <Image src="/images/line-team-1.svg"
              className="card-photo mb-4 ps-5"
              width={400}
              height={10}
              alt="Wider Logo" />
          </div>
          <Row>
            <Col xs={12} md={6} lg={6} >
              <div className="card-container-hizontal">
                <Image src="/images/susi-team.svg"
                  className="card-photo "
                  width={224}
                  height={224}
                  alt="Wider Logo" />
                <div className="d-flex flex-column ps-4">
                  <p className="card-title-horizontal mb-4">Soy Susi Pallero</p>
                  <p className="card-text">Chief Accessibility Officer.<br />
                    W3C Invited Expert.<br />  CPWA, WAS, CPACC.</p>
                  <a href="#">Perfil Linkdin</a></div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}  >
              <div className="card-container-hizontal">
                <Image src="/images/pipi-team.svg"
                  className="card-photo "
                  width={224}
                  height={224}
                  alt="Wider Logo" />
                <div className="d-flex flex-column ps-4">
                  <p className="card-title-horizontal mb-4">Soy Pipi Marquez</p>
                  <p className="card-text">Diseñadora UX/UI.<br />  Especialista en accesibilidad digital.  CPACC.</p>
                  <a href="#">Perfil Linkdin</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section >
      <section>
        <div >
          <h2>Diseñamos estrategias escalables y entrenamos a
            los equipos para un cambio sostenible.</h2>
          <p>Trabajamos en forma colaborativa con cada cliente para mejorar sus productos, procesos y políticas.</p>

        </div>
        <div >
          <p>Conocimiento.
            Innovación.
            Co-creación.
            Excelencia.</p>

        </div>
      </section>
      <section>
        <div >
          <h2>Sobre Wider</h2>
          <h3>Somos profesionales con muchos años de experiencia en accesibilidad digital</h3>
          <p>Diseñamos de experiencias e innovación tecnológica.
            Brindamos servicios de consultoría para empresas, instituciones, gobiernos y comunidades.</p>
          <h3>Nuestra sociedad nació con el activismo</h3>
          <p>Porque sabemos que podemos hacer una diferencia
            significativa en el mundo. Lo vivimos con responsabilidad, pero también con mucho disfrute.</p>
          <div>
            <h3>Nos impulsa el deseo de crecer y ayudar a crecer a más personas</h3>
            <p>Eso nos llevó a generar y compartir conocimiento sobre estos temas: somos autoras de cursos, libros y frameworks. </p>
          </div>

        </div>
      </section>
    </>
  );
}