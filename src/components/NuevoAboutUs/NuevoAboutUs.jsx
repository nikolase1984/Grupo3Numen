import * as style from "../NuevoAboutUs/styles";

const NuevoAboutUs = () => {
  return (
    <div id="about" className={style.divContainer}>
      <div className={style.div}>
        <div className={style.titulos}>
          <h2 className={style.h2}>Acerca de nosotros</h2>
          <p className={style.p}>
            Somos un comercio local de pastas frescas y deliciosas.
          </p>
        </div>
        <div className={style.divTexto}>
          <p className="mb-4">
            En nuestra tienda, utilizamos ingredientes frescos y de alta calidad
            para crear pastas deliciosas y únicas. Nuestro equipo de chefs
            experimentados trabaja duro para crear sabores que satisfagan a
            todos los gustos.
          </p>
          <p className="mb-4">
            Ofrecemos una amplia variedad de pastas, desde las opciones clásicas
            hasta las más creativas, como la pasta de remolacha y la pasta de
            tinta de calamar.
          </p>
          <p className="mb-4">
            Además, nuestro servicio de entrega rápida y confiable garantiza que
            nuestros clientes puedan disfrutar de nuestras pastas frescas en la
            comodidad de su hogar. Siempre estamos disponibles para responder
            cualquier pregunta o inquietud que puedan tener nuestros clientes.
          </p>
          <p>
            Gracias por elegir nuestro comercio local de pastas. Esperamos que
            disfrutes de nuestras deliciosas pastas y que vuelvas pronto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NuevoAboutUs;
