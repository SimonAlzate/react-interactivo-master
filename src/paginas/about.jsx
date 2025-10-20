import "./about.css";
import jh from "../fotos/jhoiner.jpg"
import yoggy from "../fotos/simon.jpg"
import tomas from "../fotos/tomas.jpg"
import angelo from "../fotos/angelo.jpg"

export default function About() {
  return (
    <div className="about-container">
      <h2>Acerca de MCE</h2>

      <div className="about-box">
        <p>
          <strong>MCE (Medios de Comunicación Estudiantil)</strong> es un proyecto digital creado por y para los estudiantes, 
          con el propósito de fomentar la participación, la creatividad y el liderazgo dentro de la comunidad educativa. 
          Aquí los alumnos pueden compartir información, logros, noticias, actividades, eventos escolares y proyectos destacados.
        </p>
        <p>
          Nuestro objetivo es construir un espacio donde la voz de los estudiantes sea escuchada, 
          fortaleciendo la comunicación institucional y promoviendo valores como el respeto, 
          la responsabilidad y el trabajo en equipo.
        </p>
      </div>

      <h2>Nuestro Equipo</h2>
      <p className="intro">
        Un grupo de estudiantes comprometidos con la innovación, la tecnología y la comunicación. 
        Cada integrante aporta su talento para mantener viva la esencia de MCE.
      </p>

      <div className="team-section">
        <div className="team-card">
          <img src={yoggy} alt="Simon Alzate Jaramillo" />
          <h4>Simon Alzate Jaramillo</h4>
          <span>Coordinador General</span>
          <p>Encargado de la organización general del equipo y la supervisión de los proyectos estudiantiles.</p>
        </div>

        <div className="team-card">
          <img src={tomas} alt="Tomas Escobar Castillo" />
          <h4>Tomas Escobar Castillo</h4>
          <span>Diseño y Comunicación</span>
          <p>Responsable de la imagen visual de MCE y la creación de contenido gráfico y audiovisual.</p>
        </div>

        <div className="team-card">
          <img src={jh} alt="Jhoiner Hernandez" />
          <h4>Jhoiner Hernandez</h4>
          <span>Redacción y Noticias</span>
          <p>Encargado de redactar artículos, boletines y cubrir eventos de la comunidad educativa.</p>
        </div>

        <div className="team-card">
          <img src={angelo} alt="Angelo Ortega" />
          <h4>Angelo Ortega</h4>
          <span>Técnico y Mantenimiento</span>
          <p>Apoya en el área técnica, mantenimiento del portal y soluciones tecnológicas del equipo.</p>
        </div>
      </div>
    </div>
  );
}
