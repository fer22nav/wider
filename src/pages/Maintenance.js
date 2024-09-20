import Image from "next/image";

export default function Maintenance() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <div>
        <Image
          src="/images/wider-header-logo.svg"
          width={600}
          height={300}
          alt="Wider Logo"
        />
      </div>
      <h2 className="titulo-xxl color-white">Próximamente</h2>
    </div>
  );
}