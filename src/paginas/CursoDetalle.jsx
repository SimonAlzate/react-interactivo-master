import { useParams, Link } from "react-router-dom";
import "./cursoDetalle.css";

const infoCursos = {
  matematicas: {
    titulo: "Matemáticas",
    profesor: "Juan Valdez",
    descripcion:
      "Curso enfocado en el desarrollo del pensamiento lógico y la resolución de problemas numéricos. Incluye álgebra, geometría, trigonometría, cálculo y estadística aplicada.",
    objetivos: [
      "Desarrollar habilidades analíticas.",
      "Aplicar la lógica a la vida diaria.",
      "Resolver problemas con diferentes estrategias.",
    ],
    imagen:
      "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg",
  },
  ciencias: {
    titulo: "Ciencias Naturales",
    profesor: "Laura Gómez",
    descripcion:
      "Explora los fundamentos de la biología, la química y la física para comprender los fenómenos naturales. Incluye prácticas de laboratorio y experimentación.",
    objetivos: [
      "Fomentar la curiosidad científica.",
      "Aprender mediante la observación y la experimentación.",
      "Comprender el impacto del ser humano en el ambiente.",
    ],
    imagen:
      "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg",
  },
  lengua: {
    titulo: "Lengua Castellana",
    profesor: "Ana Ruiz",
    descripcion:
      "Mejora tus habilidades comunicativas a través de la lectura crítica, la escritura creativa y la comprensión de textos literarios.",
    objetivos: [
      "Desarrollar el pensamiento crítico.",
      "Fomentar la lectura comprensiva.",
      "Comunicar ideas de forma clara y efectiva.",
    ],
    imagen:
      "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg",
  },
  fisica: {
    titulo: "Educación Física",
    profesor: "Mario Martínez",
    descripcion:
      "Fortalece tu cuerpo y mente mediante actividades físicas, deportivas y recreativas que promueven el bienestar integral.",
    objetivos: [
      "Fomentar hábitos saludables.",
      "Desarrollar la coordinación motriz.",
      "Promover el trabajo en equipo.",
    ],
    imagen:
      "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg",
  },
  ingles: {
    titulo: "Inglés",
    profesor: "Carla Stevens",
    descripcion:
      "Aprende inglés de forma dinámica a través de situaciones cotidianas, videos, canciones y conversaciones prácticas.",
    objetivos: [
      "Desarrollar fluidez oral y escrita.",
      "Comprender diferentes acentos y contextos.",
      "Usar el idioma como herramienta cultural.",
    ],
    imagen:
      "https://images.pexels.com/photos/2564171/pexels-photo-2564171.jpeg",
  },
  tecnologia: {
    titulo: "Tecnología e Informática",
    profesor: "Angelo Ortega",
    descripcion:
      "Aprende los principios de la informática, diseño web y programación básica. Explora el impacto de la tecnología en la sociedad.",
    objetivos: [
      "Comprender los fundamentos de la programación.",
      "Usar herramientas tecnológicas de manera responsable.",
      "Diseñar proyectos innovadores con TIC.",
    ],
    imagen:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  },
};

export default function CursoDetalle() {
  const { id } = useParams();
  const curso = infoCursos[id];

  if (!curso) {
    return (
      <div className="curso-detalle">
        <h2>Curso no encontrado</h2>
        <Link to="/cursos" className="volver-btn">Volver a cursos</Link>
      </div>
    );
  }

  return (
    <div className="curso-detalle">
      <img src={curso.imagen} alt={curso.titulo} className="curso-img" />
      <div className="curso-info">
        <h2>{curso.titulo}</h2>
        <p><strong>Profesor:</strong> {curso.profesor}</p>
        <p>{curso.descripcion}</p>

        <h4>Objetivos del curso:</h4>
        <ul>
          {curso.objetivos.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>

        <Link to="/cursos" className="volver-btn">← Volver a cursos</Link>
      </div>
    </div>
  );
}
