import { Link } from "react-router-dom";
import "./profesores.css";

export default function Profesores() {
  const profesores = [
    {
      id: "juan-valdez",
      nombre: "Juan Valdez",
      materia: "Matemáticas",
      imagen: "https://i.pravatar.cc/120?img=12",
      descripcion:
        "Especialista en pensamiento lógico y razonamiento numérico. Más de 10 años enseñando álgebra, geometría y cálculo de manera práctica y divertida.",
    },
    {
      id: "ana-ruiz",
      nombre: "Ana Ruiz",
      materia: "Lengua Castellana",
      imagen: "https://i.pravatar.cc/120?img=25",
      descripcion:
        "Apasionada por la literatura y la comunicación. Fomenta la lectura crítica y la escritura creativa entre los estudiantes.",
    },
    {
      id: "laura-gomez",
      nombre: "Laura Gómez",
      materia: "Ciencias Naturales",
      imagen: "https://i.pravatar.cc/120?img=30",
      descripcion:
        "Promueve el aprendizaje mediante la observación, el método científico y el respeto por el medio ambiente.",
    },
    {
      id: "mario-martinez",
      nombre: "Mario Martínez",
      materia: "Educación Física",
      imagen: "https://i.pravatar.cc/120?img=15",
      descripcion:
        "Motiva a los estudiantes a mantener una vida saludable a través del deporte, el trabajo en equipo y la disciplina.",
    },
    {
      id: "daniel-perez",
      nombre: "Daniel Pérez",
      materia: "Inglés",
      imagen: "https://i.pravatar.cc/120?img=18",
      descripcion:
        "Docente bilingüe con enfoque comunicativo. Usa recursos interactivos para mejorar la fluidez y comprensión del idioma.",
    },
    {
      id: "carolina-torres",
      nombre: "Carolina Torres",
      materia: "Tecnología e Informática",
      imagen: "https://i.pravatar.cc/120?img=35",
      descripcion:
        "Ingeniera de sistemas con experiencia en programación y herramientas digitales. Enseña a los estudiantes el uso responsable y creativo de la tecnología.",
    },
    {
      id: "andres-mejia",
      nombre: "Andrés Mejía",
      materia: "Ciencias Sociales",
      imagen: "https://i.pravatar.cc/120?img=50",
      descripcion:
        "Historiador y docente investigador. Promueve la reflexión crítica sobre los procesos sociales y culturales.",
    },
    {
      id: "juliana-herrera",
      nombre: "Juliana Herrera",
      materia: "Arte y Cultura",
      imagen: "https://i.pravatar.cc/120?img=45",
      descripcion:
        "Fomenta la creatividad a través de la pintura, la música y el teatro. Cree firmemente en el arte como medio de expresión y aprendizaje.",
    },
  ];

  return (
    <div className="profesores-container">
      <h2>Nuestros Profesores</h2>
      <p className="intro">
        Contamos con un equipo docente comprometido con la formación integral de los estudiantes.
        Cada profesor aporta su experiencia, conocimiento y pasión por la enseñanza.
      </p>

      <div className="profesores-grid">
        {profesores.map((p) => (
          <Link key={p.id} to={`/profesor/${p.id}`} className="profe-card link-card">
            <img src={p.imagen} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p className="materia">{p.materia}</p>
            <p className="desc">{p.descripcion}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
