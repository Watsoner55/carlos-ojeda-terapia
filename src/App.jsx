function App() {
  return (
    <main className="bg-[#0f2f31] text-[#f3eee7] min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#d8b98a] tracking-[0.35em] text-sm mb-8 uppercase">
            Carlos Ojeda · Terapia
          </p>

          <h1 className="text-6xl md:text-7xl font-semibold leading-[0.95] mb-10">
            A veces no necesitas que te arreglen.
            <br />
            <span className="text-[#d8b98a]">
              Necesitas entender qué te está pasando.
            </span>
          </h1>

          <p className="text-xl leading-9 text-[#d7d2ca] max-w-2xl mb-12">
            Espacio terapéutico centrado en ansiedad, adicciones,
            inseguridad emocional y procesos de cambio personal desde una
            mirada humana, funcional y basada en evidencia.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="bg-[#d8b98a] text-[#173537] px-8 py-4 rounded-full font-medium hover:scale-105 transition duration-300">
              Reservar primera sesión
            </button>

            <button className="border border-[#3f5b5d] px-8 py-4 rounded-full hover:bg-[#173537] transition duration-300">
              Conocer el enfoque
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[40px] border border-[#345355] bg-gradient-to-br from-[#28494b] to-[#173537] p-10 backdrop-blur-xl shadow-2xl">
            <div className="aspect-[4/5] rounded-[30px] bg-[#264446] flex items-center justify-center text-[#d8b98a] text-lg">
              FOTO PROFESIONAL
            </div>

            <div className="mt-8 space-y-4">
              <div className="bg-[#294547] rounded-3xl p-6">
                <p className="text-[#d8b98a] uppercase tracking-[0.25em] text-xs mb-3">
                  Enfoque
                </p>

                <h3 className="text-3xl leading-tight font-semibold">
                  Mirar la conducta sin juicio para entender qué función
                  cumple.
                </h3>

                <p className="mt-5 text-[#d7d2ca] leading-8">
                  TCC · ACT · Entrevista motivacional · Análisis funcional
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1f3c3e] rounded-2xl p-5 text-sm text-[#d7d2ca]">
                  Formación en drogodependencias
                </div>

                <div className="bg-[#1f3c3e] rounded-2xl p-5 text-sm text-[#d7d2ca]">
                  Trabajo basado en evidencia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="bg-[#efe6da] text-[#173537] py-28 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <p className="tracking-[0.35em] uppercase text-sm text-[#8f7350] mb-6">
              Sobre mí
            </p>

            <h2 className="text-6xl leading-[1] font-semibold">
              Una forma de acompañar que no necesita disfrazarse.
            </h2>
          </div>

          <div className="space-y-10 text-xl leading-10">
            <p>
              Mi trabajo nace de una idea sencilla: las personas no suelen
              sufrir porque sean débiles, sino porque han aprendido a
              sobrevivir con las herramientas que tenían disponibles.
            </p>

            <p>
              Durante años conviví con ansiedad y con una relación
              problemática con el alcohol. Pasar por un proceso terapéutico
              real me permitió entender algo importante: detrás de muchas
              conductas destructivas no suele haber falta de voluntad, sino
              dolor, evitación y maneras aprendidas de intentar sostenerse.
            </p>

            <p>
              Esa experiencia es una de las razones por las que decidí
              dedicarme a acompañar a otras personas. No hablo desde una
              posición de perfección, sino desde haber conocido de cerca lo
              que significa perderse, pedir ayuda y reconstruirse poco a
              poco.
            </p>

            <p>
              Actualmente finalizo el Grado de Psicología y soy Experto
              Universitario en Drogodependencias y otras Adicciones por la
              Universitat de Barcelona. Continúo formándome en terapias
              contextuales, entrevista motivacional y análisis funcional de
              la conducta.
            </p>

            <p>
              No entiendo la terapia como frases bonitas ni soluciones
              rápidas. La entiendo como un espacio seguro para mirar con
              honestidad lo que ocurre, comprender para qué ha servido cada
              patrón y construir respuestas más libres y coherentes con la
              vida que quieres llevar.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="bg-[#e7ddd0] text-[#173537] py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl leading-tight font-semibold mb-20 max-w-4xl">
            Problemas humanos, no etiquetas para llevar pegadas en la frente.
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Ansiedad",
                text: "Cuando el cuerpo vive en alerta constante y descansar empieza a sentirse imposible incluso en momentos tranquilos.",
              },
              {
                title: "Adicciones",
                text: "Alcohol, consumo, dependencia emocional o hábitos que empezaron ayudando pero acaban ocupando demasiado espacio en tu vida.",
              },
              {
                title: "Autoestima e inseguridad",
                text: "Entender cómo se construyó esa forma de mirarte y por qué a veces sientes que nunca eres suficiente.",
              },
              {
                title: "Bloqueo vital",
                text: "Momentos en los que sabes que algo tiene que cambiar, pero no encuentras energía ni dirección para empezar.",
              },
              {
                title: "Gestión emocional",
                text: "Aprender a relacionarte con lo que sientes sin obedecerlo todo ni vivir permanentemente en guerra contigo.",
              },
              {
                title: "Identidad y dirección",
                text: "Explorar qué quieres construir cuando ya no quieres seguir funcionando solo en modo supervivencia.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#f2ebe1] rounded-[32px] p-10 shadow-sm hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-3xl font-semibold mb-6">
                  {item.title}
                </h3>

                <p className="text-lg leading-9 text-[#4f5d5f]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-[#173537] py-16 px-8">
        <div className="max-w-5xl mx-auto border border-[#345355] rounded-[30px] p-10 text-[#d7d2ca]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8b98a] mb-4">
            Importante
          </p>

          <p className="text-lg leading-8">
            Este espacio no sustituye atención psicológica sanitaria ni
            tratamiento médico especializado. Actualmente el proyecto se
            encuentra en desarrollo profesional y orientado a acompañamiento,
            divulgación y trabajo terapéutico desde un enfoque humano y
            basado en evidencia.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#102729] text-[#d7d2ca] py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="tracking-[0.3em] uppercase text-[#d8b98a] text-sm mb-3">
              Carlos Ojeda · Terapia
            </p>

            <p className="text-sm text-[#8ea0a1]">
              Psicología · Adicciones · Cambio personal
            </p>
          </div>

          <div className="text-sm text-[#8ea0a1]">
            Sitges · Garraf · Terapia online próximamente
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App