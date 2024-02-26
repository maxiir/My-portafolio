import "./Proyects.css";

function Proyects() {
  return (
    <div>
      <div className="container-proyects container-fluid" id="proyects">
        <h1>Proyects</h1>

        <div className="proyects">
          <div className="efect">
            <div className="proyect">
              <h5>Sistema ecommerce para emprendimiento</h5>
              <img src="/proyecto-ecommerce.png" alt="proyect1" />
              <p>
                El sitio web ecommerce, fue desarrollado con la finalidad de que el emprendimiento tenga un mayor numero de ventas en linea y fue desarrollado con react y nodejs garantizando una solucion escalable y atractiva para los usuarios 
              </p>
              <a className="btn btn-primary" href="https://www.nordicasocks.shop/">
                Ver
              </a>
            </div>
          </div>

          <div className="efect">
            <div className="proyect">
              <h5>Single page para estudio contable</h5>
              <img src="/proyecto-contable.png" alt="proyect1" />
              <p>
                Desarrolle un sitio web para un estudio jurídico con el objetivo
                de ampliar su alcance y brindar una presencia en línea.
              </p>
              <a className="btn btn-primary" href="https://estudiocontablecontable.vercel.app/">
                Ver
              </a>
            </div>
          </div>

          <div className="efect">
            <div className="proyect">
              <h5>Proyecto WordPress</h5>
              <img src="/proyecto-wordpress.png" alt="proyect1" />
              <p>
                Actualice y mejore el sitio web utilizando WordPress. Implementando nuevas funcionalidades y características, mejorando su accesibilidad. Además, trabajé en la actualización del diseño y la estructura del contenido para reflejar de manera más efectiva la identidad de la institución y cumplir con los objetivos establecidos.
              </p>
              <a className="btn btn-primary" href="https://www.sectw.com.ar/">
                Ver
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
