import { useParams, Link } from "react-router-dom";
import "./profesorDetalle.css";

const infoProfesores = {
  "juan-valdez": {
    nombre: "Juan Valdez",
    materia: "Matemáticas",
    titulo: "Licenciado en Matemáticas Aplicadas",
    experiencia: "10 años de docencia en educación secundaria y universitaria.",
    correo: "juan.valdez@mce.edu.co",
    telefono: "(+57) 300 456 7890",
    biografia:
      "Apasionado por la enseñanza y la resolución de problemas. Ha liderado proyectos de robótica matemática y asesorado a estudiantes en olimpiadas de cálculo y lógica.",
    imagen: "https://i.pravatar.cc/250?img=12",
  },
  "ana-ruiz": {
    nombre: "Ana Ruiz",
    materia: "Lengua Castellana",
    titulo: "Magíster en Literatura y Comunicación",
    experiencia: "8 años enseñando lectura crítica y escritura creativa.",
    correo: "ana.ruiz@mce.edu.co",
    telefono: "(+57) 312 234 9876",
    biografia:
      "Defensora de la lectura como herramienta de transformación. Ha impulsado talleres de redacción y análisis literario en diferentes colegios y universidades.",
    imagen: "https://i.pravatar.cc/250?img=25",
  },
  "laura-gomez": {
    nombre: "Laura Gómez",
    materia: "Ciencias Naturales",
    titulo: "Licenciada en Biología",
    experiencia: "12 años enseñando ciencias experimentales.",
    correo: "laura.gomez@mce.edu.co",
    telefono: "(+57) 311 567 1234",
    biografia:
      "Combina la teoría con la práctica para enseñar el método científico. Dirige el grupo ecológico escolar y coordina proyectos de investigación ambiental.",
    imagen: "https://i.pravatar.cc/250?img=30",
  },
  "mario-martinez": {
    nombre: "Mario Martínez",
    materia: "Educación Física",
    titulo: "Licenciado en Educación Física y Deporte",
    experiencia: "15 años promoviendo hábitos saludables y disciplina deportiva.",
    correo: "mario.martinez@mce.edu.co",
    telefono: "(+57) 300 998 1122",
    biografia:
      "Entrenador y docente apasionado por el bienestar físico y mental. Organiza torneos internos y representa a la institución en competencias intercolegiales.",
    imagen: "https://i.pravatar.cc/250?img=15",
  },
  "daniel-perez": {
    nombre: "Daniel Pérez",
    materia: "Inglés",
    titulo: "Licenciado en Lenguas Extranjeras",
    experiencia: "7 años enseñando inglés en instituciones públicas y privadas.",
    correo: "daniel.perez@mce.edu.co",
    telefono: "(+57) 310 999 2233",
    biografia:
      "Docente bilingüe enfocado en la práctica comunicativa. Implementa actividades interactivas y dinámicas para mejorar la fluidez en inglés.",
    imagen: "https://i.pravatar.cc/250?img=18",
  },
  "carolina-torres": {
    nombre: "Carolina Torres",
    materia: "Tecnología e Informática",
    titulo: "Ingeniera de Sistemas",
    experiencia: "9 años enseñando informática y programación básica.",
    correo: "carolina.torres@mce.edu.co",
    telefono: "(+57) 320 222 4455",
    biografia:
      "Experta en herramientas digitales, promueve el uso responsable de la tecnología y fomenta la innovación a través de proyectos tecnológicos.",
    imagen: "https://i.pravatar.cc/250?img=35",
  },
  "andres-mejia": {
    nombre: "Andrés Mejía",
    materia: "Ciencias Sociales",
    titulo: "Historiador y Docente Investigador",
    experiencia: "11 años de docencia en historia y geografía.",
    correo: "andres.mejia@mce.edu.co",
    telefono: "(+57) 313 777 8877",
    biografia:
      "Cree en el análisis crítico de los procesos históricos y sociales como base para formar ciudadanos responsables y conscientes del entorno.",
    imagen: "https://i.pravatar.cc/250?img=50",
  },
  "juliana-herrera": {
    nombre: "Juliana Herrera",
    materia: "Arte y Cultura",
    titulo: "Licenciada en Artes Visuales",
    experiencia: "6 años enseñando arte, música y teatro.",
    correo: "juliana.herrera@mce.edu.co",
    telefono: "(+57) 319 111 6677",
    biografia:
      "Artista y docente que motiva a los estudiantes a expresarse a través del arte. Dirige el grupo de teatro y coordina las exposiciones artísticas del colegio.",
    imagen: "https://i.pravatar.cc/250?img=45",
  },
};

export default function ProfesorDetalle() {
  const { id } = useParams();
  const profe = infoProfesores[id];

  if (!profe) {
    return (
      <div className="profesor-detalle">
        <h2>Profesor no encontrado</h2>
        <Link to="/profesores" className="volver-btn">Volver</Link>
      </div>
    );
  }

  return (
    <div className="profesor-detalle">
      <img src={profe.imagen} alt={profe.nombre} className="profe-img" />
      <div className="profe-info">
        <h2>{profe.nombre}</h2>
        <p className="materia">{profe.materia}</p>
        <p><strong>Título:</strong> {profe.titulo}</p>
        <p><strong>Experiencia:</strong> {profe.experiencia}</p>
        <p><strong>Correo:</strong> {profe.correo}</p>
        <p><strong>Teléfono:</strong> {profe.telefono}</p>
        <p className="bio">{profe.biografia}</p>
        <Link to="/profesores" className="volver-btn">← Volver a Profesores</Link>
      </div>
    </div>
  );
}
