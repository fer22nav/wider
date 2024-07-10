import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div>
          <img src="imagen1.jpg" alt="Logo wider" />
        </div>
        <div>
          <p>Oficinas</p>
          <p>EEUU | España | Argentina | Perú | México</p>
          <a href="#">Copyright 2024</a>
          <a href="#" >Política de Privacidad</a>
          <a href="#" >Declaración de Accesibilidad</a>
        </div>
        <div>
          <p>Contacto</p>
          <p>info@wider.global</p>
          icon in / icon youtube
        </div>
      </div>
    </footer>
  )
}
export default Footer