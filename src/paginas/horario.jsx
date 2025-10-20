import "./horario.css";

export default function Horario() {
  return (
    <div className="horario-container">
      <h2>Horario Semanal</h2>
      <p className="intro">
        Consulta tus clases programadas para cada día de la semana. 
        Este horario está diseñado para equilibrar las áreas académicas, artísticas y deportivas.
      </p>

      <table className="horario-table">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7:00 - 8:00</td>
            <td>Matemáticas</td>
            <td>Lengua Castellana</td>
            <td>Ciencias Naturales</td>
            <td>Inglés</td>
            <td>Educación Física</td>
          </tr>
          <tr>
            <td>8:00 - 9:00</td>
            <td>Sociales</td>
            <td>Arte</td>
            <td>Tecnología e Informática</td>
            <td>Matemáticas</td>
            <td>Lengua Castellana</td>
          </tr>
          <tr className="recreo">
            <td>9:00 - 9:30</td>
            <td colSpan="5">🧃 Recreo</td>
          </tr>
          <tr>
            <td>9:30 - 10:30</td>
            <td>Ciencias Naturales</td>
            <td>Inglés</td>
            <td>Arte</td>
            <td>Educación Física</td>
            <td>Tecnología e Informática</td>
          </tr>
          <tr>
            <td>10:30 - 11:30</td>
            <td>Matemáticas</td>
            <td>Sociales</td>
            <td>Lengua Castellana</td>
            <td>Ciencias Naturales</td>
            <td>Inglés</td>
          </tr>
          <tr>
            <td>11:30 - 12:30</td>
            <td>Tutoría</td>
            <td>Proyecto Integrado</td>
            <td>Educación Física</td>
            <td>Sociales</td>
            <td>Arte</td>
          </tr>
        </tbody>
      </table>

      <p className="nota">
        🕓 *El horario puede variar según actividades institucionales o jornadas especiales.*
      </p>
    </div>
  );
}
