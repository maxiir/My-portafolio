import "./Proyects.css";

function Proyects() {
  return (
    <div>
      <div className="container-proyects container-fluid" id="proyects">
        <h1>Proyects</h1>

        <div className="proyects">
          <div className="efect">
            <div className="proyect">
              <h5>Estudio contable web site</h5>
              <img src="/proyecto-contable.png" alt="proyect1" />
              <p>
                El sitio web contable, fue desarrollado con la finalidad de que el cliente tenga una mejor presensia en linea y fue desarrollado con react y nodejs garantizando una solucion escalable y atractiva para los usuarios 
              </p>
              <a className="btn btn-primary" href="#">
                Ver
              </a>
            </div>
          </div>

          <div className="efect">
            <div className="proyect">
              <h5>Web movies</h5>
              <img src="/web-movies.png" alt="proyect1" />
              <p>
                La aplicación fue creada utilizando la tecnología React y Nodejs,
                brindando una experiencia de usuario atractiva y eficiente.
              </p>
              <a className="btn btn-primary" href="#">
                Ver
              </a>
            </div>
          </div>

          <div className="efect">
            <div className="proyect">
              <h5>Estudio juridico web site</h5>
              <img src="/proyecto-juridico.png" alt="proyect1" />
              <p>
                Desarrolle un sitio web para un estudio jurídico con el objetivo
                de ampliar su alcance y brindar una presencia en línea.
              </p>
              <a className="btn btn-primary" href="https://estudiojuridico-tw.web.app/">
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
