import './Proyects.css'

function Proyects(){
    return(
        <div>
            <div className="container-proyects container-fluid" id='proyects'>
                <h1>Proyects</h1>
              
                <div className="proyects">
                    <div className="efect">
                        <div className='proyect'>
                            <img src="/proyecto-contable.png" alt="proyect1" />
                            <h5>Estudio contable web site</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, laborum.</p>
                            <a href="https://estudiocontable-arielrucci.up.railway.app/">
                                <button className='btn btn-primary'>VER</button>
                            </a>
                        </div>
                    </div>

                    <div className="efect">
                        <div className='proyect'>
                            <img src="/web-movies.png" alt="proyect1"/>
                            <h5>Web movies</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, laborum.</p>
                            <a href="">
                                <button className='btn btn-primary'>VER</button>
                            </a>
                        </div>
                    </div>

                    <div className="efect">
                        <div className='proyect'>
                            <img src="/proyecto-juridico.png" alt="proyect1" />
                            <h5>Estudio juridico web site</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, laborum.</p>
                            <a href="https://estudiojuridico-tw.web.app/">
                                <button className='btn btn-primary'>VER</button>
                            </a>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Proyects;