import { useState } from "react"
import perfilImg from "./assets/carlos-ojeda.png"

const areas = [
  [
    "Ansiedad",
    "Cuando el cuerpo vive en alerta constante, anticipando problemas y agotándose incluso cuando aparentemente todo está bien.",
  ],
  [
    "Adicciones",
    "Alcohol, consumo, juego, pornografía u otros hábitos que empezaron aliviando algo y acabaron ocupando demasiado espacio.",
  ],
  [
    "Autoestima e inseguridad",
    "Trabajar la forma en que te miras, dudas de ti o sientes que nunca eres suficiente.",
  ],
  [
    "Bloqueo vital",
    "Etapas donde sabes que algo tiene que cambiar, pero no encuentras dirección, energía o claridad.",
  ],
  [
    "Gestión emocional",
    "Aprender a relacionarte con emociones intensas sin reprimirlas ni dejar que controlen toda tu vida.",
  ],
  [
    "Identidad y dirección",
    "Explorar quién eres más allá de la ansiedad, el consumo, la culpa o las expectativas externas.",
  ],
]

const methods = [
  [
    "TCC",
    "Comprender la relación entre pensamientos, emociones, conducta y contexto.",
  ],
  [
    "ACT",
    "Acceptance and Commitment Therapy: trabajar aceptación, valores y acción comprometida.",
  ],
  [
    "Entrevista motivacional",
    "Acompañar la ambivalencia sin sermones, culpa ni presión inútil.",
  ],
  [
    "Análisis funcional",
    "Mirar qué función cumple cada conducta antes de intentar cambiarla.",
  ],
]

const process = [
  "Primera toma de contacto para valorar qué necesitas y si este espacio encaja contigo.",
  "Exploración de tu historia, contexto, patrones y objetivos.",
  "Trabajo conjunto sobre ansiedad, hábitos, evitación, consumo o bloqueo.",
  "Revisión de avances y construcción de alternativas más estables.",
]

const navLinks = [
  ["Inicio", "#inicio"],
  ["Áreas", "#areas"],
  ["Enfoque", "#enfoque"],
  ["Proceso", "#proceso"],
  ["Contacto", "#contacto"],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const whatsappNumber = "34618430395"

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola Carlos, he visto tu web y me gustaría pedir información."
  )}`

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const nombre = formData.get("nombre") || ""
    const email = formData.get("email") || ""
    const mensaje = formData.get("mensaje") || ""

    const texto = `
Hola Carlos, he visto tu web y me gustaría pedir información.

Nombre: ${nombre}
Correo: ${email}
Motivo: ${mensaje}
    `.trim()

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`,
      "_blank"
    )
  }

  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#173537] antialiased">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#173537]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <a
            href="#inicio"
            className="text-[#f7efe4] font-semibold text-lg tracking-wide"
          >
            Carlos Ojeda
            <span className="text-[#d7bd8d] font-normal ml-2">
              · Mentoría terapéutica
            </span>
          </a>

          <nav className="hidden md:flex gap-8 text-sm text-[#f7efe4]/80">
            {navLinks.slice(1).map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="hover:text-[#d7bd8d] transition"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="ml-6 rounded-full border border-[#d7bd8d]/40 px-4 py-2 text-sm font-medium text-[#f7efe4] hover:bg-white/10 transition"
          >
            ☰ Menú
          </button>
        </div>
      </header>

      {/* MENÚ LATERAL */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[320px] max-w-[85vw] bg-[#173537] text-[#f7efe4] shadow-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-7 py-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#d7bd8d]">
                Navegación
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Carlos Ojeda
              </h2>
            </div>

            <button
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-2xl hover:bg-white/10 transition"
            >
              ×
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-2">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-4 text-lg text-[#f7efe4]/85 hover:bg-white/10 hover:text-[#d7bd8d] transition"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-[#d7bd8d] px-5 py-4 font-semibold text-[#173537] hover:bg-[#e4cca0] transition"
            >
              WhatsApp
            </a>

            <p className="text-xs leading-5 text-[#f7efe4]/55">
              Un menú lateral, porque perderse haciendo scroll por una web de ayuda psicológica sería bastante irónico.
            </p>
          </div>
        </div>
      </aside>

      {menuOpen && (
        <button
          onClick={closeMenu}
          className="fixed inset-0 z-[60] bg-black/45"
          aria-label="Cerrar menú"
        />
      )}

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-[#173537] pt-28 text-[#f7efe4]"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#d7bd8d]/20 blur-3xl"></div>
          <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-[#8a6d4d]/20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-[#d7bd8d]/30 px-4 py-2 text-sm text-[#d7bd8d]">
              Acompañamiento · Adicciones · Ansiedad · Cambio personal
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
              No todo lo que te duele se ve desde fuera.
              <span className="block text-[#d7bd8d]">
                Y aun así merece ser escuchado.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-8 md:leading-9 text-[#f7efe4]/80">
              Soy Carlos Ojeda, estudiante avanzado del Grado de Psicología y Experto Universitario en Drogodependencias y otras Adicciones por la Universitat de Barcelona. Acompaño procesos relacionados con ansiedad, adicciones, inseguridad y cambio personal desde una mirada humana, funcional y basada en evidencia.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#d7bd8d] px-7 py-3 text-center font-medium text-[#173537] hover:bg-[#e4cca0] transition"
              >
                Primera toma de contacto
              </a>

              <a
                href="#enfoque"
                className="rounded-full border border-[#f7efe4]/25 px-7 py-3 text-center font-medium text-[#f7efe4] hover:bg-white/10 transition"
              >
                Conocer el enfoque
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-[#d8b98a]/20 blur-3xl rounded-[40px]"></div>

            <img
              src={perfilImg}
              alt="Carlos Ojeda"
              className="relative w-full max-w-[500px] rounded-[36px] object-cover shadow-2xl border border-[#d8c9b5]/20"
            />
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="px-6 lg:px-10 py-24 bg-[#f4efe7]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6d4d]">
              Áreas de trabajo
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#173537]">
              Problemas que suelen esconder algo más profundo.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {areas.map(([title, desc]) => (
              <article
                key={title}
                className="rounded-[32px] border border-[#d8c9b5] bg-white p-8 shadow-sm hover:-translate-y-1 transition"
              >
                <h3 className="text-2xl font-semibold text-[#173537]">
                  {title}
                </h3>

                <p className="mt-5 leading-8 text-[#425756]">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section
        id="enfoque"
        className="bg-[#173537] px-6 lg:px-10 py-24 text-[#f7efe4]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d7bd8d]">
              Enfoque terapéutico
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Sin humo motivacional.
              <span className="block text-[#d7bd8d]">
                Mirar la conducta con honestidad.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#f7efe4]/75">
              El objetivo no es convertirte en alguien perfecto, sino entender qué mantiene el sufrimiento y construir alternativas más útiles y sostenibles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {methods.map(([title, desc]) => (
              <article
                key={title}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-md"
              >
                <h3 className="text-2xl font-semibold text-[#d7bd8d]">
                  {title}
                </h3>

                <p className="mt-5 leading-8 text-[#f7efe4]/80">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="px-6 lg:px-10 py-24 bg-[#f4efe7]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6d4d]">
              Cómo sería el proceso
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#173537]">
              Un espacio para entender patrones y empezar a moverlos.
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-[28px] border border-[#d8c9b5] bg-white p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#173537] text-[#f7efe4] font-semibold">
                  {index + 1}
                </div>

                <p className="flex-1 text-lg leading-8 text-[#425756]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-[#e8dfd2] px-6 lg:px-10 py-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6d4d]">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#173537]">
              Si has llegado hasta aquí, probablemente ya sabes que algo necesita cambiar.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#425756]">
              Primera toma de contacto sin compromiso para valorar si este espacio puede ayudarte.
            </p>

            <div className="mt-10 space-y-4 text-[#173537]">
              <p>📍 Garraf · Sitges · Vilanova</p>
              <p>💻 Acompañamiento online próximamente</p>
              <p>📱 WhatsApp: 618 430 395</p>
              <p>📧 contacto@carlosojedaterapia.com</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-[32px] bg-[#f7efe4] p-6 text-[#173537]"
          >
            <input
              name="nombre"
              className="w-full rounded-2xl border border-[#d8c9b5] bg-white px-4 py-3 outline-none focus:border-[#8a6d4d]"
              placeholder="Nombre"
            />

            <input
              name="email"
              type="email"
              className="w-full rounded-2xl border border-[#d8c9b5] bg-white px-4 py-3 outline-none focus:border-[#8a6d4d]"
              placeholder="Correo electrónico"
            />

            <textarea
              name="mensaje"
              className="min-h-32 w-full rounded-2xl border border-[#d8c9b5] bg-white px-4 py-3 outline-none focus:border-[#8a6d4d]"
              placeholder="¿Qué te gustaría trabajar?"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#173537] py-4 text-[#f7efe4] hover:bg-[#24484a] transition"
            >
              Enviar por WhatsApp
            </button>

            <p className="text-xs leading-5 text-[#6b7371]">
              Al enviar, se abrirá WhatsApp con tu mensaje preparado. No se almacena ningún dato desde esta página.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d8c9b5] px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm text-[#56605e]">
          <p>© Carlos Ojeda · Mentoría terapéutica</p>

          <p>
            Ansiedad · Adicciones · Procesos de cambio · Garraf
          </p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl hover:scale-105 transition"
        aria-label="Contactar por WhatsApp"
      >
        ☎
      </a>
    </main>
  )
}

export default App