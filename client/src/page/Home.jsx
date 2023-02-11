import Nav from "../components/Nav";
import Presentacion from "../components/Presentacion";
import Skills from "../components/Skills";
import Proyects from "../components/Proyects";
import Contact from "../components/Contact";
import Cv from "../components/Cv";
import Footer from "../components/Footer";
import './Home.css'

function Home() {
  return (
    <div>
      <Nav />
      <Presentacion />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(88, 31, 185)"
          fillOpacity="1"
          d="M0,128L80,138.7C160,149,320,171,480,160C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <Skills />
      <div className="wave">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
            fill="rgb(88, 31, 185)"
            fillOpacity="1"
            d="M0,128L80,138.7C160,149,320,171,480,160C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
        </svg>
      </div>
      <Proyects />
      <Contact />
      <Cv/>
      <Footer />
    </div>
  );
}

export default Home;
