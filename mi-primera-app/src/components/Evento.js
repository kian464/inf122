import React from "react";
import "../styles/Evento.css";

function Evento() {
    return (
        
        <div className="card-container">
            <img className="card-image"
            src={requestAnimationFrame("../images/evento1.jpeg")}
            alt="imagen del evento"/>

            <div class="text-container">
                <h2 className="title">Py Pizza 03 - PyPuzzle</h2>
                <p className="date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
                <p className="place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>
                <p className="description">Hello</p>
            </div>
        </div>
    );
}

export default Evento;