import "./contacto.css";

export default function Contacto() {
  return (
    <div className="contacto-container">
      <h2>Contáctanos</h2>

      <form className="contacto-form">
        <label>Nombre</label>
        <input type="text" placeholder="Tu nombre" />

        <label>Correo electrónico</label>
        <input type="email" placeholder="tuemail@ejemplo.com" />

        <label>Mensaje</label>
        <textarea rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>

        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}
