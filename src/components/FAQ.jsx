import { useState } from "react";
import { motion } from "framer-motion";


const FAQData = [
  {
    question: "¿Qué tipo de sitios web desarrollas?",
    answer:
      "Desarrollo todo tipo de sitios web, desde páginas informativas (landing pages) hasta tiendas online (ecommerce) y plataformas más complejas. Cada proyecto es totalmente personalizado según tus necesidades y objetivos.",
  },
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer:
      "El tiempo de desarrollo varía según el tamaño y la complejidad del proyecto. Un sitio web básico puede tardar entre 1 a 2 semanas, mientras que proyectos más avanzados pueden llevar más tiempo. Te proporcionaré un plazo estimado antes de comenzar.",
  },
  {
    question: "¿El sitio web será compatible con móviles y tabletas?",
    answer:
      "Sí, todos los sitios que desarrollo son responsivos, lo que significa que se ven y funcionan perfectamente en dispositivos móviles, tabletas y ordenadores. Me aseguro de que tu web esté optimizada para cualquier pantalla.",
  },
  {
    question: "¿Ofreces mantenimiento después de entregar el sitio web?",
    answer:
      "Sí, ofrezco un servicio opcional de mantenimiento mensual que incluye actualizaciones, soporte técnico, y ajustes menores para asegurar que tu sitio web siga funcionando de manera óptima y segura.",
  },
  {
    question: "¿Que es un Dominio y un Hosting?",
    answer:
      "Para que tu sitio web este visible en internet, necesitas un dominio y un hosting. El dominio es el nombre de la direccion de tu sitio web por el que te encontraran tus clientes y el hosting es el espacio en internet donde estara alojado tu sitio web ¡Con ambos tu sitio estara listo para verse en linea!",
  },
];

export const FAQ = () => (
  <section className="relative mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">¿Tiene alguna duda?</p>
          <h2 className="mb-16 block-big-title text-center">
            Consulta las Preguntas frecuentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#3482F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
