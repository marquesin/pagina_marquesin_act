import React from "react";
import "./Home.css";
import planta1 from "./img/People of Brooklyn Plant 1.png";
import planta2 from "./img/People of Brooklyn Plant 2.png";
import planta3 from "./img/People of Brooklyn Plant 5.png";
import chicaDePie from "./img/People of Brooklyn Standing.png";
import sol from "./img/People of Brooklyn Shape Sun.png";
import flecha from "./img/Arrow 1.svg";

export default function Home() {
  return (
    <section id="home">
      <div className="containerSol">
        <picture>
          <img src={sol} alt="Imagen sol" />
        </picture>
      </div>
      <div className="containerBienvenida">
        <h1>
          Bienvenid@ a mi <span>porfolio</span>!
        </h1>
      </div>
      <div className="containerPictures">
        <div>
          <picture>
            {/* <source media="(max-width: 900px)" srcset={planta2} sizes="200px" /> */}
            <img src={planta1} alt="Imagen Planta 1" className="plantas" />
          </picture>
          <picture>
            <img
              src={planta3}
              alt="Imagen Planta 3"
              className="plantas"
              id="plantaAlta"
            />
          </picture>
        </div>
        <div>
          <picture>
            <img
              src={chicaDePie}
              alt="Imagen Chica Saludando"
              className="chicaSaludando"
            />
          </picture>
          <picture>
            <img src={planta2} alt="Imagen Planta 2" className="plantas" />
          </picture>
        </div>
      </div>
      <div className="containerButtonFixed">
        <button className="buttonUp">
          <img src={flecha} alt="Flecha arriba" />
        </button>
        <button className="buttonCV">CV</button>
      </div>
    </section>
  );
}
