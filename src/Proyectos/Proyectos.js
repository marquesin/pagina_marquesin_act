import React from "react";
import "./Proyectos.css";
import cactus from "./img/Isometric Stickers Cactus.svg";
import Plantilla from "./ProyectoPlantilla/Plantilla";
import derecha from "./img/Derecha.svg";
import hoverD from "./img/DerechaHover.svg";
import { useState } from "react";

export default function Proyectos() {
  const [hover, setHover] = useState(false);
  return (
    <section id="proyectos">
      <div className="containerTituloProyectos">
        <img src={cactus} alt="Imagen de cactus" />
        <h1>Proyectos</h1>
      </div>
      <div className="containerPlantillas">
        <div>
          <Plantilla />
          <Plantilla />
        </div>
        <button
          id="buttonD"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {hover ? <img src={hoverD} alt="" /> : <img src={derecha} alt="" />}
        </button>
        {/* boton */}
      </div>
    </section>
  );
}
{
  /* <img src={planta1} alt="" />
        <img src={planta2} alt="" />
        <img src={planta3} alt="" /> */
}
