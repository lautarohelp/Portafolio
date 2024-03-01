import "./Home.css"
import { MyInfo } from "./MyInfo";

export function Home() {
  return (
    <section className="Home-info">
        <MyInfo
        saludo={"Hola!"}
        title={`Soy Lautaro Toledo, Web Developer.`}
        text={`Desarrollador Web Apasionado.
        Busco aplicar mi pasión por el desarrollo web en un
        entorno colaborativo que fomente la innovación y el
        crecimiento.`}
        /> 
        <figure>
            {/* <img src="../../imagenes/20240123_172846-min.png" alt="imagen de perffil" /> */}
        </figure>
    </section>
  );
}

