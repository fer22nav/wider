import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Aquí agregas el link de Google Fonts o cualquier otra fuente global */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Readex+Pro:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Otros metadatos globales o estilos que quieras */}
      </Head>
      <body>
        <Main />  {/* Aquí se renderiza el contenido dinámico */}
        <NextScript />  {/* Aquí se añaden los scripts necesarios */}
      </body>
    </Html>
  );
}