
import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const plan1 = [
  "1 página",
  "Accesos directos a redes sociales",
  "Información de contacto",
  "Botón de acceso directo a WhatsApp",
  "Diseño adaptable a todos los dispositivos",
]
const plan2 = [
  "De 3 a 5 página",
  "Funcionalidades personalizadas",
  "Accesos directos a redes sociales",
  "Formulario de contacto",
  "Integración con base de datos",
  "Diseño adaptable a todos los dispositivos",
]
const plan3 = [
  "Número de páginas a elección",
  "Administración de stock de productos",
  "Visualización de ventas y órdenes",
  "Modo de mantenimiento",
  "Notificaciones automáticas por email",
  "Acceso directo a redes sociales",
  "Integración con base de datos",
  "Diseño adaptable a todos los dispositivos"
]

export const Pricing = () => {
  

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="mx-5 mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
              Elige el Plan que Mejor se adapte a tu Negocio
              </h2>
              <p className="mx-5 text-center text-white block-subtitle">Ofrezco planes de pago único, sin costos ocultos, para que tengas total control y seguridad en tu inversión</p>
            </div>
            <div className="flex flex-wrap flex-col items-center lg:flex-row -mx-4 lg:items-stretch mt-20">
              <div className="w-[400px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Plan Básico
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      <p>$250 <span className="text-xl">USD</span></p>
                    </div>
                    
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 text-left">
                    Ideal para presentar tus productos o servicios de manera profesional y efectiva
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {plan1.map((item, index) => (
                      <li className="mb-4 flex" key={index}>
                        <CheckArrowIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 mt-10 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose lg:mt-52"
                    aria-label="Get started"
                  >
                    <a href='https://wa.me/+542804658107?text=Hola! Estoy interesado en el Plan Básico. ¿Podrías darme más información, por favor?'>Obtener</a>
                  </button>
                </div>
              </div>
              <div className="w-[400px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-bgDark3 rounded-3xl">
                  <h3 className="2xl:mb-4 text-2xl font-bold font-heading text-primaryText text-left">
                    Plan personalizado
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-2 mr-2">
                      <p className="text-sm text-slate-300 mb-2">Desde</p>
                      <p>$500 <span className="text-xl">USD</span></p>
                    </div>
                    
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 text-left">
                    Un plan completo y flexible, diseñado con características exclusivas que se adaptan a las necesidades únicas de tu negocio 
                  </p>
                  <ul className="text-primaryText">
                    {plan2.map((item, index) => (
                      <li className="mb-3 flex" key={index}>
                        <CheckArrowIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 mt-10 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose lg:mt-32"
                    aria-label="Get started"
                  >
                    <a href='https://wa.me/+542804658107?text=Hola! Estoy interesado en el Plan Personalizado. ¿Podrías darme más información, por favor?'>Obtener</a>
                  </button>
                </div>
              </div>
              <div className="w-[400px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    E-commerce
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      <p>$800 <span className="text-xl">USD</span></p>
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 text-left">
                    El plan ideal para lanzar tu tienda en línea y empezar a vender tus productos de inmediato
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {plan3.map((item, index) => (
                      <li className="mb-4 flex" key={index}>
                        <CheckArrowIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 mt-10 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose lg:mt-16"
                    aria-label="Get started"
                  >
                    <a href='https://wa.me/+542804658107?text=Hola! Estoy interesado en el Plan E-commerce. ¿Podrías darme más información, por favor?'>Obtener</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};
