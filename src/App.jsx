const areas = [
  ["Ansiedad", "Cuando el cuerpo vive en alerta constante, anticipando problemas y agotándose incluso cuando aparentemente todo está bien."],
  ["Adicciones", "Alcohol, consumo, juego, pornografía u otros hábitos que empezaron aliviando algo y acabaron ocupando demasiado espacio."],
  ["Autoestima e inseguridad", "Trabajar la forma en que te miras, dudas de ti o sientes que nunca eres suficiente."],
  ["Bloqueo vital", "Etapas donde sabes que algo tiene que cambiar, pero no encuentras dirección, energía o claridad."],
  ["Gestión emocional", "Aprender a relacionarte con emociones intensas sin reprimirlas ni dejar que controlen toda tu vida."],
  ["Identidad y dirección", "Explorar quién eres más allá de la ansiedad, el consumo, la culpa o las expectativas externas."],
]

const methods = [
  ["TCC", "Comprender la relación entre pensamientos, emociones, conducta y contexto."],
  ["ACT", "Acceptance and Commitment Therapy: trabajar aceptación, valores y acción comprometida."],
  ["Entrevista motivacional", "Acompañar la ambivalencia sin sermones, culpa ni presión inútil."],
  ["Análisis funcional", "Mirar qué función cumple cada conducta antes de intentar cambiarla."],
]

const process = [
  "Primera toma de contacto para valorar qué necesitas y si este espacio encaja contigo.",
  "Exploración de tu historia, contexto, patrones y objetivos.",
  "Trabajo conjunto sobre ansiedad, hábitos, evitación, consumo o bloqueo.",
  "Revisión de avances y construcción de alternativas más estables.",
]

function App() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#173537] antialiased">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#173537]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <a href="#inicio" className="text-[#f7efe4] font-semibold text-lg tracking-wide">
            Carlos Ojeda <span className="text-[#d7bd8d] font-normal ml-2">· Terapia</span>
          </a>

          <nav className="hidden md:flex gap-8 text-sm text-[#f7efe4]/80">
            <a href="#sobre-mi" className="hover:text-[#d7bd8d]">Sobre mí</a>
            <a href="#areas" className="hover:text-[#d7bd8d]">Áreas</a>
            <a href="#enfoque" className="hover:text-[#d7bd8d]">Enfoque</a>
            <a href="#contacto" className="hover:text-[#d7bd8d]">Contacto</a>
          </nav>

          <a href="#contacto" className="hidden sm:inline-block rounded-full bg-[#d7bd8d] px-5 py-2.5 text-sm font-medium text-[#173537] hover:bg-[#e4cca0] transition">
            Primera sesión
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-[#173537] pt-28 text-[#f7efe4]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#d7bd8d]/20 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-[#8a6d4d]/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-[#d7bd8d]/30 px-4 py-2 text-sm text-[#d7bd8d]">
              Terapia · Adicciones · Ansiedad · Cambio personal
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
              A veces no necesitas que te arreglen.
              <span className="block text-[#d7bd8d]">Necesitas entender qué te está pasando.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-8 md:leading-9 text-[#f7efe4]/80">
              Soy Carlos Ojeda, estudiante avanzado del Grado de Psicología y Experto Universitario en Drogodependencias y otras Adicciones por la Universitat de Barcelona. Mi interés por la ansiedad, las adicciones y los procesos de cambio nace también de haber conocido de cerca lo que implica pedir ayuda, sostener un tratamiento y reconstruirse con tiempo.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="rounded-full bg-[#d7bd8d] px-7 py-3 text-center font-medium text-[#173537] hover:bg-[#e4cca0] transition">
                Reservar primera sesión →
              </a>
              <a href="#enfoque" className="rounded-full border border-[#f7efe4]/25 px-7 py-3 text-center font-medium text-[#f7efe4] hover:bg-[#f7efe4]/10 transition">
                Conocer el enfoque
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#f7efe4]/15 bg-[#2d4b4b] shadow-2xl">
              <div className="relative flex h-full flex-col justify-end bg-[radial-gradient(circle_at_35%_20%,rgba(215,189,141,0.22),transparent_34%),linear-gradient(145deg,#294d4d,#102a2c)] p-8 md:p-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),transparent_45%)]" />

                <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-7 md:p-8 backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d7bd8d]">
                    Carlos Ojeda · Terapeuta
                  </p>
                  <h3 className="mt-5 text-3xl md:text-4xl font-semibold leading-tight">
                    Ansiedad, adicciones y cambio personal desde una mirada humana y basada en evidencia.
                  </h3>
                  <p className="mt-6 leading-8 text-[#f7efe4]/75">
                    Un espacio para entender patrones, salir del modo supervivencia y empezar a construir una vida más estable, consciente y coherente contigo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6d4d]">
              Sobre mí
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Una forma de acompañar que no necesita disfrazarse.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#394b49]">
            <p>
              Mi trabajo nace de una idea sencilla: las personas no suelen sufrir porque sean débiles, sino porque han aprendido a sobrevivir con las herramientas que tenían disponibles.
            </p>
            <p>
              Durante años conviví con ansiedad y con una relación problemática con el alcohol. Sé lo que es perder confianza en uno mismo, vivir atrapado en patrones que desde fuera parecen fáciles de cortar y descubrir que la fuerza de voluntad, por sí sola, no siempre basta.
            </p>
            <p>
              Pasar por un proceso terapéutico real me permitió entender algo importante: detrás de muchas conductas destructivas no suele haber falta de voluntad, sino dolor, evitación y maneras aprendidas de intentar sostenerse.
            </p>
            <p>
              Precisamente por eso decidí orientar mi camino hacia la Psicología y las adicciones. Porque sé el impacto que puede tener que alguien te mire sin reducirte a tu peor momento, sin sermones y sin etiquetas fáciles.
            </p>
          </div>
        </div>
      </section>

      {/* POR QUE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 rounded-[2rem] border border-[#d8c9b5] bg-white/55 p-8 md:p-10">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6d4d]">
              Por qué trabajo en esto
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              No elegí este camino desde la distancia.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#56605e]">
            <p>
              Durante mucho tiempo entendí las adicciones y la ansiedad desde dentro, no desde un libro. Sé lo que es vivir atrapado en dinámicas que prometen aliviar el dolor a corto plazo mientras poco a poco van reduciendo tu libertad.
            </p>
            <p>
              También sé lo difícil que puede ser pedir ayuda, confiar en alguien o sentir que todavía hay salida cuando llevas años funcionando en automático.
            </p>
            <p>
              Parte de mi forma de acompañar nace precisamente de ahí: de haber comprobado que el cambio real no suele aparecer a través de la culpa, los sermones o la fuerza de voluntad aislada, sino a través de comprensión, trabajo profundo y tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="bg-[#e8ddcf] px-6 lg:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6d4d]">
              En qué puedo ayudarte
            </p>
            <p className="mb-5 max-w-3xl text-lg leading-8 text-[#56605e]">
              Trabajo especialmente con ansiedad, adicciones, regulación emocional, autoestima y procesos de cambio personal. El objetivo no es juzgar a la persona por lo que hace, sino entender qué función cumple eso en su vida y cómo empezar a construir alternativas más sanas y estables.
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Áreas en las que acompaño desde una mirada humana, funcional y basada en evidencia.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {areas.map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-[#f7efe4]/85 p-7 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173537] text-2xl text-[#d7bd8d]">
                  ◌
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#56605e]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section id="enfoque" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6d4d]">
              Enfoque terapéutico
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Cada persona tiene una historia. Y cada conducta, una función.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#56605e]">
              Antes de intentar cambiar algo, conviene comprender qué lo mantiene. La terapia no va de aplicar técnicas como recetas, sino de construir una explicación útil y trabajar desde ahí.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {methods.map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white/60 p-7 shadow-sm">
                <div className="mb-5 text-2xl text-[#8a6d4d]">●</div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#56605e]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="relative overflow-hidden bg-[#173537] px-6 lg:px-10 py-28 text-[#f7efe4]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(215,189,141,0.22),transparent_35%)]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#d7bd8d]">
            Manifiesto
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            No se trata de convertirte en otra persona. Se trata de entender por qué llevas tanto tiempo sobreviviendo como puedes.
          </h2>
        </div>
      </section>

      {/* PROCESO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6d4d]">
              Proceso terapéutico
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Un proceso claro para que no tengas que venir adivinando qué toca hacer.
            </h2>
          </div>

          <div className="space-y-4">
            {process.map((item, index) => (
              <div key={item} className="flex gap-5 rounded-3xl bg-white/60 p-6 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#173537] text-sm font-semibold text-[#d7bd8d]">
                  {index + 1}
                </div>
                <p className="pt-1 text-lg leading-7 text-[#394b49]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTA LEGAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="rounded-[2rem] border border-[#d8c9b5] bg-white/55 p-8 md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6d4d]">
            Nota importante
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Un espacio de acompañamiento, no un sustituto de atención sanitaria.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#56605e]">
            Este espacio está orientado al acompañamiento, la orientación personal y el trabajo sobre hábitos, ansiedad, regulación emocional y procesos de cambio. No sustituye un tratamiento psicológico o psiquiátrico sanitario cuando existe un problema clínico que requiere intervención especializada, diagnóstico o seguimiento médico. En esos casos, se recomendará acudir al profesional sanitario correspondiente.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 rounded-[2rem] bg-[#173537] p-8 md:p-12 text-[#f7efe4]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d7bd8d]">
              Contacto
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Empezar no tiene que ser perfecto. Solo suficientemente honesto.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#f7efe4]/75">
              Puedes escribir para pedir una primera sesión, resolver dudas o valorar si este espacio encaja con tu momento actual.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://wa.me/" className="rounded-full bg-[#d7bd8d] px-7 py-3 text-[#173537] font-medium hover:bg-[#e4cca0] transition">
                ✉ WhatsApp
              </a>
              <a href="#" className="rounded-full border border-[#f7efe4]/25 px-7 py-3 text-[#f7efe4] hover:bg-[#f7efe4]/10 transition">
                Instagram
              </a>
            </div>
          </div>

          <form className="space-y-4 rounded-3xl bg-[#f7efe4] p-6 text-[#173537]">
            <input className="w-full rounded-2xl border border-[#d8c9b5] bg-white px-4 py-3 outline-none focus:border-[#8a6d4d]" placeholder="Nombre" />
            <input className="w-full rounded-2xl border border-[#d8c9b5] bg-white px-4 py-3 outline-none focus:border-[#8a6d4d]" placeholder="Email" />
            <textarea className="min-h-32 w-full rounded-2xl border border-[#d8c9b5] bg-white px-4 py-3 outline-none focus:border-[#8a6d4d]" placeholder="Cuéntame brevemente qué te gustaría trabajar" />
            <button className="w-full rounded-full bg-[#173537] py-4 text-[#f7efe4] hover:bg-[#24484a] transition">
              Enviar mensaje
            </button>
            <p className="text-xs leading-5 text-[#6b7371]">
              Este formulario es una maqueta. Para publicarlo habrá que conectarlo a un servicio real de contacto o reservas.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#d8c9b5] px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm text-[#56605e]">
          <p>© Carlos Ojeda · Terapia. Marca provisional.</p>
          <p>Terapia · Ansiedad · Adicciones · Procesos de cambio · Garraf / Vilanova / Sitges</p>
        </div>
      </footer>
    </main>
  )
}

export default App