import "./Presentacion.css";
import { useEffect } from "react";
import typed from "typed.js";

function Presentacion() {
  useEffect(()=>{
    const Typed = new typed('#titlechange',{
      strings:['Hola! 🖐️','Soy Maxi','Te invito a que veas mi portafolio!'],
      cursorChar: '|',
      typeSpeed: 100,
      backSpeed:100,
      loop: true
    });
    return ()=>{
      Typed.destroy()
    }
  },[])
  return (
    <div className="container-fluid" id="mypresentacion">
      <div className="gradient container">
        <div className="presentacion container">
          <img className="img-perfil" src="/ImagenCV.jpg" alt="perfil" />

          <div className="container-description">
            {/* usar etiquetas span para el efecto no h1 */}
            <span id="titlechange"></span> 

            <div className="text">
              <p>
                Soy un programador web con experiencia en el desarrollo de
                aplicaciones utilizando el stack MERN (MongoDB, Express.js,
                React.js y Node.js). También tengo conocimientos en Git y en
                otras tecnologías relacionadas con el desarrollo web. Estoy
                comprometido con aprender y crecer en mi carrera, y siempre
                estoy buscando nuevos desafíos y oportunidades para mejorar mis
                habilidades. Estoy emocionado de poder aplicar mis conocimientos
                y experiencia para contribuir al éxito de un equipo y a la
                creación de soluciones innovadoras para los clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentacion;
