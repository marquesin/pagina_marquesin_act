import React from "react";
import "./Conoceme.css";
import perrito from "./img/Brazuca Dog.svg";
import montania from "./img/People of Brooklyn Mountain 3.svg";
import chicaSentada from "./img/People of Brooklyn Sitting on Floor.svg";

export default function Conoceme() {
  return (
    <section className="containerConoceme">
      <div className="columnaIzquierdaConoceme">
        <picture>
          <img src={montania} alt="Montania de fondo" />
        </picture>
        <picture>
          <img
            src={chicaSentada}
            alt="Chica sentada"
            className="chicaSentada"
          />
        </picture>
      </div>
      <div className="columnaDerechaConoceme">
        <div>
          <h2>Conoceme</h2>
          <picture>
            <img src={perrito} alt="Perrito" />
          </picture>
        </div>
        <div>
          <p>
            Soy Rocio y soy desarrolladora Front End. Siempre me gustó la
            tecnología y desde que me metí en este mundo no dejo de aprender
            cosas nuevas. Mis principales habilidades son HTML, CSS, JavaScript
            y React. Considero también que tengo muy buenas habilidades blandas
            para sumar al equipo. Quiero seguir creciendo y ganar experiencia
            para desarrollar mi carrera en este gran universo
          </p>
        </div>
      </div>
    </section>
  );
}
