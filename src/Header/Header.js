import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <section className="containerHeader">
      <header id="header">
        <div className="nombreLogo">
          <p>Rocio Marquesin</p>
        </div>
        <div className="cOpcionesHeader">
          <p>Conocéme</p>
          <p>Proyectos</p>
          <p>Skills</p>
          <p>Formación</p>
          <p>Contacto</p>
        </div>
      </header>
    </section>
  );
}
