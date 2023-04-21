import "./Contact.css";
import { Formik } from "formik";
import { sendData } from "../api/api.js";
import Swal from "sweetalert2";



function Contact() {
  return (
    <div className="contact-container container-fluid" id="contact">
      <h2>Contact</h2>
      <Formik initialValues={{
        client:'',
        phone:'',
        emailClient: '',
        consulta:'',
      }}
      onSubmit={(values)=>{
        sendData(values)
        Swal.fire('correo enviado!','👍','success')
      }}>
        {({handleChange,handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <div className="form-container container">
              <div className="mb-3">
                
                <input
                  type="text" 
                  className="form-control"
                  name="client"
                  placeholder="Your name and lastname:"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input type="number" name="phone" placeholder="Your phone:" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <input type="email" name="emailClient" placeholder="Your Email:" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Consulta:"
                  name="consulta"
                  rows={3}
                  defaultValue={""}
                  onChange={handleChange}
                />
              </div>
              <div className="btn container">
                <button className="btn btn-primary" type="submit">Enviar</button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
