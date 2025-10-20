import { useState } from "react";
import "./inicio.css";


export default function Inicio() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      autor: "Profe Valdez",
      tiempo: "Hace 1 hora",
      texto:
        "📢 ¡Felicidades a los estudiantes del Club de Robótica por su gran participación en la feria tecnológica! 🤖👏",
      imagen:
        "https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg",
      likes: 24,
      comentarios: [
        { autor: "Ana", texto: "¡Qué orgullo!👏" },
        { autor: "Luis", texto: "Excelente trabajo equipo 💪" },
      ],
    },
    {
      id: 2,
      autor: "Consejo Estudiantil",
      tiempo: "Ayer",
      texto:
        "📣 ¡Atención! Próxima semana realizaremos la encuesta estudiantil para elegir la temática de la Feria Cultural 2025. ¿Qué prefieres? 🎭 Música / 🎨 Arte / 🔬 Ciencia / 🎤 Teatro",
      likes: 45,
      comentarios: [{ autor: "Carla", texto: "¡Música por favor! 🎶" }],
    },
    {
      id: 3,
      autor: "María (4°B)",
      tiempo: "Hace 3 días",
      texto:
        "🎤 Ensayo general del coro estudiantil para el festival musical del próximo mes. ¡Todos invitados a participar!",
      imagen:
        "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
      likes: 76,
      comentarios: [{ autor: "Profe Ruiz", texto: "¡Gran trabajo, chicos!" }],
    },
  ]);

  const [nuevoPost, setNuevoPost] = useState("");

  const crearPost = () => {
    if (!nuevoPost.trim()) {
      alert("Escribe algo antes de publicar ✍️");
      return;
    }
    const nuevo = {
      id: Date.now(),
      autor: "Tú",
      tiempo: "Ahora",
      texto: nuevoPost,
      likes: 0,
      comentarios: [],
    };
    setPosts([nuevo, ...posts]);
    setNuevoPost("");
  };

  const agregarComentario = (postId, texto) => {
    if (!texto.trim()) return;
    setPosts(
      posts.map((p) =>
        p.id === postId
          ? { ...p, comentarios: [...p.comentarios, { autor: "Tú", texto }] }
          : p
      )
    );
  };

  const darLike = (postId) => {
    setPosts(
      posts.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  return (
    <section id="inicio" className="inicio-section">
      <div className="feed-col">
        {/* 🧠 Crear nueva publicación */}
        <div className="post-creator">
          <div className="creator-top">
            <img src="https://i.pravatar.cc/64?img=12" alt="usuario" />
            <input
              value={nuevoPost}
              onChange={(e) => setNuevoPost(e.target.value)}
              className="creator-input"
              placeholder="¿Qué quieres compartir con la comunidad?"
            />
          </div>
          <div className="creator-actions">
            <button className="btn" onClick={crearPost}>
              Publicar
            </button>
          </div>
        </div>

        {/* 📱 Feed de publicaciones */}
        <div id="feed">
          {posts.map((p) => (
            <article className="post" key={p.id}>
              <div className="post-header">
                <img
                  src={`https://i.pravatar.cc/50?img=${p.id % 30}`}
                  alt="perfil"
                />
                <div>
                  <div className="post-author">{p.autor}</div>
                  <div className="post-time">{p.tiempo}</div>
                </div>
              </div>

              <div className="post-body">{p.texto}</div>
              {p.imagen && (
                <div className="post-media">
                  <img src={p.imagen} alt="imagen del post" />
                </div>
              )}

              <div className="post-engage">
                <div className="engage-btn" onClick={() => darLike(p.id)}>
                  👍 <span className="likes">{p.likes}</span>
                </div>
                <div className="engage-btn">💬 {p.comentarios.length}</div>
              </div>

              <div className="comments">
                {p.comentarios.map((c, i) => (
                  <div key={i} className="comment">
                    <img src="https://i.pravatar.cc/32?img=16" alt="coment" />
                    <div className="comment-box">
                      <strong>{c.autor}</strong> {c.texto}
                    </div>
                  </div>
                ))}
              </div>

              <div className="comment-form">
                <img src="https://i.pravatar.cc/32?img=12" alt="yo" />
                <input
                  placeholder="Escribe un comentario..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      agregarComentario(p.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 🧭 Panel lateral */}
      <aside className="right-widgets">
        <div className="widget">
          <h3>Actividad reciente</h3>
          <div className="active-stats">
            <div className="stat">
              <strong>12</strong>
              <div>Publicaciones hoy</div>
            </div>
            <div className="stat">
              <strong>124</strong>
              <div>Comentarios</div>
            </div>
          </div>
        </div>

        <div className="widget">
          <h3>Eventos próximos</h3>
          <ul>
            <li>
              <strong>Feria de Ciencias</strong> — 25 Sept
            </li>
            <li>
              <strong>Festival Musical</strong> — 2 Oct
            </li>
            <li>
              <strong>Excursión Institucional</strong> — 16 Oct
            </li>
          </ul>
        </div>

        <div className="widget">
          <h3>Grupos estudiantiles</h3>
          <div className="tags">
            <span>Robótica</span>
            <span>Teatro</span>
            <span>Arte</span>
            <span>Deportes</span>
            <span>Coro</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
