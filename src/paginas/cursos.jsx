import { Link } from "react-router-dom";
import "./cursos.css";

export default function Cursos() {
  const cursos = [
    {
      id: "matematicas",
      nombre: "Matemáticas",
      descripcion:
        "Aprende a analizar, razonar y resolver problemas utilizando la lógica y el pensamiento abstracto.",
    },
    {
      id: "ciencias",
      nombre: "Ciencias Naturales",
      descripcion:
        "Explora el funcionamiento del cuerpo humano, los ecosistemas y los fenómenos naturales.",
    },
    {
      id: "lengua",
      nombre: "Lengua Castellana",
      descripcion:
        "Mejora tus habilidades de lectura, escritura y comunicación efectiva.",
    },
    {
      id: "fisica",
      nombre: "Educación Física",
      descripcion:
        "Desarrolla tus capacidades físicas y motrices mediante el deporte y el trabajo en equipo.",
    },
    {
      id: "ingles",
      nombre: "Inglés",
      descripcion:
        "Fortalece tus habilidades comunicativas en el idioma inglés de manera práctica y divertida.",
    },
    {
      id: "tecnologia",
      nombre: "Tecnología e Informática",
      descripcion:
        "Aprende programación básica, diseño web y el uso responsable de las TIC.",
    },
  ];

  return (
    <div className="cursos-container">
      <h2>Cursos disponibles</h2>
      <p className="intro">
        Estos cursos están diseñados para fortalecer tus conocimientos en
        diferentes áreas académicas y fomentar el aprendizaje autónomo y el
        pensamiento crítico.
      </p>

      <div className="curso-grid">
        {cursos.map((curso) => (
          <Link
            key={curso.id}
            to={`/curso/${curso.id}`}
            className="curso-card link-card"
          >
            <h3>{curso.nombre}</h3>
            <p>{curso.descripcion}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
