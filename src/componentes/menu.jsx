import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import "./menu.css";

export default function Menu() {
  const [abierto, setAbierto] = useState(true);
  const location = useLocation();

  // 🔹 Si estás en la página de inicio de sesión, no renderiza el menú
  if (location.pathname === "/") return null;

  const toggleMenu = () => {
    setAbierto(!abierto);
  };

  return (
    <>
      {/* Botón hamburguesa */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {abierto ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Fondo oscuro en móvil */}
      {abierto && window.innerWidth <= 1024 && (
        <div className="overlay" onClick={toggleMenu}></div>
      )}

      {/* Sidebar */}
      <nav className={`sidebar ${abierto ? "open" : "closed"}`}>
        <div className="logo-box">
          <Link to="/inicio" onClick={() => window.innerWidth <= 1024 && toggleMenu()}>
            <img src="/logo.png" alt="Logo MCE" className="logo" />
          </Link>
          <h3>Medios Estudiantiles</h3>
        </div>

        <Link to="/inicio" onClick={() => window.innerWidth <= 1024 && toggleMenu()}>
          Inicio
        </Link>
        <Link to="/noticias" onClick={() => window.innerWidth <= 1024 && toggleMenu()}>
          Noticias
        </Link>
        <Link to="/cursos" onClick={() => window.innerWidth <= 1024 && toggleMenu()}>
          Cursos
        </Link>
        <Link to="/profesores" onClick={() => window.innerWidth <= 1024 && toggleMenu()}>
          Profesores
        </Link>
        <Link to="/horario" onClick={() => window.innerWidth <= 1024 && toggleMenu()}>
          Horario
        </Link>
        <Link to="/contacto" onClick={() => window.innerWidth <= 1024 && toggleMenu()}>
          Contacto
        </Link>
        <Link to="/about" onClick={() => window.innerWidth <= 1024 && toggleMenu()}>
          Acerca de
        </Link>
      </nav>
    </>
  );
}
