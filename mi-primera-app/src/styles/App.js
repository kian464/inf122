import logo from './logo.svg';
import '../App.css';
import Evento from './components/Evento.js'
import EventoB from './components/EventoB.js'
function App() {
  return (
    <div className="App">
      <Evento />
      <EventoB title="Py Pizza 03 - PyPuzzle"
        image="evento1"
        dateLiteral="12 de Diciembre de 2023 - 11:00"
        placeLiteral="Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia"
        description="
        ¡Hola Pythonista!
        Participa en este Evento Presencial de la comunidad Python La Paz
        ¿Cuánto conoces de Python?
        Aprende a trabajar en equipo resolviendo increíbles acertijo
        ¡Anímate a ser parte de esta actividad!
        "
      />


      <EventoB title="MeetUp 11 - 3 Pitfalls de la Ingeniería de datos"
        image="evento2"
        dateLiteral="12 de enero de 2023"
        placeLiteral="Mr Pizza, 20 de octubre Frente a la plaza"
        description="
        ¡Hola Pythonista!
        Acompáñanos al MeetUp mensual de la comunidad Python La Paz
        En este MeetUp tendremos la participación de Valery Calderon Briz, Ingeniera en Telecomunicaciones actualmente trabajando como Ingeniera de datos Senior en One.Five
        Anteriormente Co-organizadora de Pyladies MX y Líder de la comunidad Python Guatemala
        ha impartido conferencias y talleres en diversas PyCon en múltiples países.
        "
      />
    </div>
  );
}

export default App;