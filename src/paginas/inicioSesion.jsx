import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./inicioSesion.css";

export default function InicioSesion() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();
    if (!usuario || !contraseña) {
      alert("Por favor ingresa usuario y contraseña.");
      return;
    }

    // 🔹 Aquí puedes agregar lógica de autenticación real más adelante
    navigate("/inicio");
  };

  return (
    <div className="auth-screen">
      <div className="auth-box">
        {/* 🔹 Logo institucional */}
        <div className="logo-box">
          <img src="/logo.png" alt="Logo MCE" className="logo" />
          <h1>Medios de Comunicación Estudiantil</h1>
          <p className="slogan">Conectando talento, ideas y aprendizaje</p>
        </div>

        {/* 🔹 Formulario */}
        <h2>Iniciar Sesión</h2>
        <form onSubmit={manejarLogin} className="login-form">
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>

        <p className="small">
          ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}
