import "./noticias.css";

export default function Noticias() {
  const noticias = [
    {
      id: 1,
      titulo: "Feria de Ciencias 2025",
      fecha: "25 de septiembre de 2025",
      descripcion:
        "Los estudiantes de todos los grados participaron con proyectos innovadores sobre energía solar, robótica, biología y reciclaje. El evento contó con jurados invitados de universidades locales y destacó la creatividad e innovación de nuestros alumnos. ¡Felicitaciones a todos los participantes y ganadores!",
      imagen: "https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg",
    },
    {
      id: 2,
      titulo: "Festival de Talentos MCE",
      fecha: "2 de octubre de 2025",
      descripcion:
        "Una jornada llena de música, teatro, danza y poesía. Más de 30 estudiantes participaron mostrando su talento frente a toda la comunidad educativa. El festival busca fomentar la expresión artística y fortalecer la confianza personal en cada uno de los alumnos.",
      imagen: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    },
    {
      id: 3,
      titulo: "Nuevo Laboratorio de Computación",
      fecha: "16 de octubre de 2025",
      descripcion:
        "Se inauguró el nuevo laboratorio con 20 equipos de última generación para clases de programación, diseño, robótica educativa y tecnología aplicada. Este espacio permitirá a los estudiantes practicar sus habilidades digitales en un entorno moderno y funcional.",
      imagen: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    },
    {
      id: 4,
      titulo: "Día del Deporte 2025",
      fecha: "10 de septiembre de 2025",
      descripcion:
        "Con actividades recreativas y competencias deportivas, celebramos el Día del Deporte. Hubo torneos de fútbol, baloncesto y atletismo, además de exhibiciones de gimnasia y baile. El objetivo fue promover hábitos saludables y el trabajo en equipo.",
      imagen: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
    },
    {
      id: 5,
      titulo: "Semana Ambiental",
      fecha: "1 al 5 de agosto de 2025",
      descripcion:
        "Durante la Semana Ambiental, los estudiantes realizaron campañas de reciclaje, charlas ecológicas y la siembra de más de 100 árboles en el colegio. Este proyecto busca crear conciencia sobre el cuidado del medio ambiente.",
      imagen: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
    },
    {
      id: 6,
      titulo: "Taller de Lectura y Escritura Creativa",
      fecha: "20 de junio de 2025",
      descripcion:
        "El área de Lengua Castellana organizó un taller literario para fortalecer la lectura crítica y la escritura creativa. Los participantes elaboraron cuentos y poemas que serán publicados en la revista estudiantil MCE.",
      imagen: "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg",
    },
    {
      id: 7,
      titulo: "Proyecto de Emprendimiento Escolar",
      fecha: "15 de mayo de 2025",
      descripcion:
        "Los estudiantes de los grados superiores presentaron proyectos de emprendimiento orientados a resolver problemas reales de la comunidad. Entre las propuestas destacaron la creación de una app educativa y una empresa de productos reciclados.",
      imagen: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    },
    {
      id: 8,
      titulo: "Día de la Familia MCE",
      fecha: "30 de abril de 2025",
      descripcion:
        "Una jornada para compartir entre estudiantes, docentes y padres de familia. Hubo presentaciones culturales, juegos tradicionales, comidas típicas y actividades recreativas. El evento fortaleció los lazos de unión dentro de la comunidad educativa.",
      imagen: "https://images.pexels.com/photos/164563/pexels-photo-164563.jpeg",
    },
  ];

  return (
    <div className="noticias-container">
      <h2>Noticias Institucionales</h2>
      <p className="intro">
        Mantente informado sobre los eventos, logros y actividades más recientes
        de nuestra comunidad educativa MCE.
      </p>

      <div className="noticias-grid">
        {noticias.map((n) => (
          <div key={n.id} className="noticia-card">
            <img src={n.imagen} alt={n.titulo} />
            <div className="noticia-content">
              <h3>{n.titulo}</h3>
              <span className="fecha">{n.fecha}</span>
              <p>{n.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
