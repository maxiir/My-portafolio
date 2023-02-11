import './Cv.css'
import { useEffect } from 'react'
import Typed from 'typed.js'

function Cv() {
    useEffect(()=>{
        const typed = new Typed('#download', {
            strings:["Puedes descargar mi CV aqui:"],
            typeSpeed:100,
            cursorChar:'|',
            loop:true,
            
        });
        return ()=>{
            typed.destroy()
        }
    },[])

  return (
    <div className="container-cv">
        <div>
            <span id='download'></span>
        </div>
        <a href="/CV-Maximiliano_Rucci.pdf" download>
            <button className="btn btn-primary">Download CV</button>
        </a>
    </div>
  )
}

export default Cv