import { useState } from "react"
import perfilImg from "./assets/carlos-ojeda.png"

const areas = [
  [
    "Ansiedad",
    "Si notas que vives en alerta, con exceso de preocupación, bloqueo o sensación de no poder parar, te acompañaré a entender qué la está manteniendo y cómo empezar a reducirla.",
  ],
  [
    "Adicciones y hábitos que se han descontrolado",
    "Si el alcohol, el consumo, el juego, la pornografía u otros hábitos han ido ocupando más espacio del que te gustaría, trabajaremos juntos para entender qué función cumplen y buscar alternativas más estables.",
  ],
  [
    "Autoestima e inseguridad",
    "Si te cuesta confiar en ti, te comparas demasiado o sientes que nunca eres suficiente, iremos revisando esa forma de mirarte para construir una relación más sana contigo.",
  ],
  [
    "Bloqueo vital",
    "Hay momentos en los que sabes que algo tiene que cambiar, pero no encuentras dirección, energía o claridad. En ese proceso, te ayudaré a ordenar lo que te está pasando y a encontrar un punto de apoyo.",
  ],
  [
    "Gestión emocional",
    "No se trata de reprimir lo que sientes, sino de aprender a relacionarte de otra manera con emociones intensas para que no acaben dirigiendo toda tu vida.",
  ],
  [
    "Identidad y dirección",
    "A veces toca parar y preguntarse quién eres, qué te está pesando y hacia dónde quieres ir. Ese trabajo también puede hacerse acompañado.",
  ],
]

const methods = [
  [
    "Terapia cognitivo-conductual (TCC)",
    "Trabajaremos sobre la relación entre lo que piensas, lo que sientes, lo que haces y el contexto en el que todo eso ocurre.",
  ],
  [
    "Terapia de aceptación y compromiso (ACT)",
    "Buscaremos que puedas relacionarte de una forma más flexible con el malestar, sin que eso te aleje de la vida que quieres construir.",
  ],
  [
    "Entrevista motivacional",
    "Si estás en duda o dividido entre cambiar y no cambiar, te ayudaré a aclarar esa ambivalencia sin juicios, sermones ni presión innecesaria.",
  ],
  [
    "Análisis funcional de la conducta",
    "Miraremos para qué está sirviendo cada patrón o conducta en tu vida, porque entender eso suele ser el primer paso para poder cambiarlo de verdad.",
  ],
]

const process = [
  "Empezaremos con una primera toma de contacto para entender qué te preocupa, qué te gustaría trabajar y si este espacio encaja contigo.",
  "Después iremos explorando tu historia, el contexto en el que estás, los patrones que se repiten y qué está manteniendo el malestar.",
  "A partir de ahí trabajaremos sobre objetivos concretos: ansiedad, hábitos, consumo, bloqueo, inseguridad o aquello que ahora mismo más te esté pesando.",
  "Revisaremos avances, dificultades y cambios reales para que el proceso tenga una base práctica y no se quede solo en hablar de lo que pasa.",
]

const navLinks = [
  ["Inicio", "#inicio"],
  ["Sobre mí", "#sobre-mi"],
  ["Áreas", "#areas"],
  ["Enfoque", "#enfoque"],
  ["Proceso", "#proceso"],
  ["Contacto", "#contacto"],
]

function WhatsAppIcon({ className = "h-7 w-7" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.11 17.23c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.41.12-.54.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.48-.84-2.03-.22-.52-.44-.45-.61-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.98 2.64 1.11 2.82c.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z" />
      <path d="M16 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.25.59 4.45 1.71 6.4L3.2 28.8l6.56-1.68A12.75 12.75 0 0 0 16 28.8c7.06 0 12.8-5.74 12.8-12.8S23.06 3.2 16 3.2Zm0 23.39c-1.94 0-3.84-.52-5.5-1.5l-.39-.23-3.89.99 1.04-3.79-.25-.39A10.56 10.56 0 0 1 5.41 16c0-5.84 4.75-10.59 10.59-10.59 2.83 0 5.48 1.1 7.47 3.1A10.5 10.5 0 0 1 26.59 16c0 5.84-4.75 10.59-10.59 10.59Z" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const whatsappNumber = "34618430395"

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola Carlos, he visto tu web y me gustaría pedir información."
  )}`

  const closeMenu = () => setMenuOpen(false)

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4efe7]/90 backdrop-blur-xl border-b border-[#d8c9b5]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <a
            href="#inicio"
            className="text-[#173537] font-semibold text-lg tracking-wide"
          >
            Carlos Ojeda
            <span className="text-[#8a6d4d] font-normal ml-2">
              · Mentoría terapéutica
            </span>
          </a>

          <nav className="hidden md:flex gap-8 text-sm text-[#173537]/80">
            {navLinks.slice(1).map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="hover:text-[#8a6d4d] transition"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="ml-6 rounded-full border border-[#8a6d4d]/30 px-4 py-2 text-sm font-medium text-[#173537] hover:bg-[#173537]/5 transition"
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
              <h2 className="mt-2 text-2xl font-semibold">Carlos Ojeda</h2>
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
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#d7bd8d] px-5 py-4 font-semibold text-[#173537] hover:bg-[#e4cca0] transition"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>

            <p className="text-xs leading-5 text-[#f7efe4]/55">
              Un acceso rápido para que la web no se convierta en una excursión vertical infinita.
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
        className="relative overflow-hidden bg-[#f4efe7] pt-28 text-[#173537]"
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#d7bd8d]/30 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#8a6d4d]/15 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-[1.08fr_0.92fr] gap-14 items-center">
          <div>
            <div className="mb-6 inline-flex flex-col rounded-[28px] border border-[#d8c9b5] bg-white/70 px-5 py-4 shadow-sm">
              <span className="text-xs uppercase tracking-[0.28em] text-[#8a6d4d]">
                Marca personal
              </span>
              <span className="mt-2 text-xl md:text-2xl font-semibold text-[#173537]">
                Carlos Ojeda · Mentoría terapéutica
              </span>
            </div>

            <p className="mb-6 inline-flex rounded-full border border-[#8a6d4d]/20 px-4 py-2 text-sm text-[#8a6d4d] bg-white/60">
              Acompañamiento · Adicciones · Ansiedad · Cambio personal
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
              A veces no necesitas aparentar estar bien.
              <span className="block text-[#8a6d4d]">
                Necesitas un espacio donde empezar a entenderte.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-8 md:leading-9 text-[#425756]">
              Soy Carlos Ojeda. Te acompaño en procesos relacionados con ansiedad, adicciones, inseguridad y cambios importantes de vida. Mi idea no es darte frases bonitas ni soluciones rápidas, sino ayudarte a entender qué te está pasando, qué lo mantiene y cómo empezar a trabajarlo contigo de una forma más clara y más útil.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#173537] px-7 py-3 text-center font-medium text-[#f7efe4] hover:bg-[#24484a] transition"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Primera toma de contacto
              </a>

              <a
                href="#sobre-mi"
                className="rounded-full border border-[#173537]/15 px-7 py-3 text-center font-medium text-[#173537] hover:bg-white/70 transition"
              >
                Conocer mi enfoque
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-[#d8b98a]/20 blur-3xl rounded-[40px]"></div>

            <img
              src={perfilImg}
              alt="Carlos Ojeda"
              className="relative w-full max-w-[500px] rounded-[36px] object-cover shadow-2xl border border-[#d8c9b5]/50"
            />
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="px-6 lg:px-10 py-24 bg-[#f4efe7]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6d4d]">
              Sobre mí
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.03] tracking-tight text-[#173537]">
              Una forma de acompañar que no necesita disfrazarse.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-9 text-[#425756]">
            <p>
              Mi trabajo parte de una idea sencilla: muchas veces no sufrimos porque seamos débiles, sino porque hemos aprendido a sobrevivir como hemos podido. Y cuando algo que antes servía empieza a pesar demasiado, a veces lo que hace falta no es más exigencia, sino un espacio donde poder mirarlo bien.
            </p>

            <p>
              También hay una parte personal en mi forma de acompañar: durante años conviví con ansiedad y problemas con el alcohol. Después de vivir un proceso de tratamiento y recuperación, pude reconstruir mi vida con más claridad, estabilidad y sentido. Por eso no miro estos procesos desde fuera ni desde una superioridad absurda, sino desde una comprensión real de lo que cuesta pedir ayuda, cambiar hábitos y volver a confiar en uno mismo.
            </p>

            <p>
              Actualmente estoy en una fase avanzada del Grado de Psicología y continúo ampliando mi formación en adicciones, entrevista motivacional, análisis funcional y terapias contextuales. Además, soy Experto Universitario en Drogodependencias y otras Adicciones por la Universitat de Barcelona.
            </p>

            <p>
              Mi forma de trabajar busca que te sientas acompañado de verdad. No planteo este espacio como una colección de frases bonitas, sino como un lugar donde tú y yo podamos entender qué está ocurriendo, para qué ha servido cada patrón y qué cambios tendría sentido empezar a construir en tu caso.
            </p>

            <p>
              Si decides dar el paso, trabajaremos sobre lo que te está costando sostener: ansiedad, consumo, inseguridad, bloqueo o hábitos que se han desordenado. La idea es que podamos ir encontrando respuestas más estables, más realistas y más coherentes con la vida que quieres vivir.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section
        id="areas"
        className="px-6 lg:px-10 py-24 bg-[#173537] text-[#f7efe4]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d7bd8d]">
              Áreas de trabajo
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#f7efe4] leading-tight">
              Lo importante no es solo el síntoma.
              <span className="block text-[#d7bd8d]">
                También lo es entender qué hay detrás.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {areas.map(([title, desc]) => (
              <article
                key={title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-sm hover:-translate-y-1 transition"
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

      {/* ENFOQUE */}
      <section
        id="enfoque"
        className="bg-[#f4efe7] px-6 lg:px-10 py-24 text-[#173537]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6d4d]">
              Enfoque de trabajo
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Un enfoque claro.
              <span className="block text-[#8a6d4d]">
                Sin humo, sin palabras vacías y sin tecnicismos innecesarios.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#425756]">
              No hace falta que te sepas las siglas para empezar a trabajar en ti. Mi papel es traducir lo útil de la psicología a un lenguaje que tenga sentido para ti y aplicarlo a tu caso de una manera cercana y práctica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {methods.map(([title, desc]) => (
              <article
                key={title}
                className="rounded-[30px] border border-[#d8c9b5] bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#173537]">
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

      {/* PROCESO */}
      <section id="proceso" className="px-6 lg:px-10 py-24 bg-[#e8dfd2]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6d4d]">
              Cómo trabajaremos
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#173537]">
              Un proceso para entender lo que te pasa y empezar a moverlo.
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
      <section
        id="contacto"
        className="bg-[#173537] px-6 lg:px-10 py-24 text-[#f7efe4]"
      >
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d7bd8d]">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#f7efe4]">
              Si has llegado hasta aquí, quizá ya notes que algo necesita atención.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#f7efe4]/75">
              Puedes escribirme y contarme brevemente qué te gustaría trabajar. A partir de ahí veremos juntos si este espacio encaja contigo.
            </p>

            <div className="mt-10 space-y-4 text-[#f7efe4]">
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
              placeholder="Cuéntame brevemente qué te gustaría trabajar"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#173537] py-4 text-[#f7efe4] hover:bg-[#24484a] transition"
            >
              Enviar por WhatsApp
            </button>

            <p className="text-xs leading-5 text-[#6b7371]">
              Al enviar, se abrirá WhatsApp con el mensaje ya preparado. Esta página no almacena los datos.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d8c9b5] px-6 lg:px-10 py-10 bg-[#f4efe7]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm text-[#56605e]">
          <p>© Carlos Ojeda · Mentoría terapéutica</p>

          <p>Ansiedad · Adicciones · Procesos de cambio · Garraf</p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 transition"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </main>
  )
}

export default App