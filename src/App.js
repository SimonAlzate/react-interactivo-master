import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import InicioSesion from "./paginas/inicioSesion";
import Inicio from "./paginas/inicio";
import Cursos from "./paginas/cursos";
import Contacto from "./paginas/contacto";
import Profesores from "./paginas/profesores";
import Horario from "./paginas/horario";
import About from "./paginas/about";
import Noticias from "./paginas/noticias";
import CursoDetalle from "./paginas/CursoDetalle";
import ProfesorDetalle from "./paginas/ProfesorDetalle";
import Menu from "./componentes/menu";
import Footer from "./componentes/footer";
import "./App.css";

function Layout() {
  const location = useLocation();

  // 🔹 Oculta menú y footer solo en las rutas de login y registro
  const hideLayout =
    location.pathname === "/" || location.pathname === "/registro";

  return (
    <>
      {!hideLayout && <Menu />}
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso/:id" element={<CursoDetalle />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/profesores" element={<Profesores />} />
        <Route path="/profesor/:id" element={<ProfesorDetalle />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
