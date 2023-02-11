import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container container-fluid" id="contact">
        <h2>contact</h2>
        <div className="form-container container">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
                </label>
                <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Consulta
                </label>
                <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
                />

            </div>
            <div className="btn container">
              <button className="btn btn-primary">Enviar</button>
            </div>


        </div>
    </div>
  );
}

export default Contact;
