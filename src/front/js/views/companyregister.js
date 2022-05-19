import React from "react";
import "../../styles/login.css";
import { Link } from "react-router-dom";

export const CompanyRegister = () => {
  return (

    <div className="container"> 

        <form className="row g-3 needs-validation" noValidate=""> 

        <div className="col-md-6 position-relative">
            <label htmlFor="inputNombreempresa4" className="form-label">
              Nombre Empresa
            </label>
            <input type="nombreempresa" className="form-control" id="inputNombreempresa4" />
            <div className="valid-feedback">¡Campo válido!</div>
            <div className="invalid-tooltip">Debe completar los datos.</div>    
          </div>
         
          <div className="col-md-6 position-relative">
            <label htmlFor="inputRutempresa4" className="form-label">
              Rut Empresa
            </label>
            <input type="rutempresa" className="form-control" id="inputRutempresa4" />
            <div className="valid-tooltip">¡Campo válido!</div>
            <div className="invalid-tooltip">Debe completar los datos.</div>    
          </div>

          <div className="col-12 position-relative">
            <label htmlFor="inputContact" className="form-label">
              Nombre Contacto
            </label>
            <input
              type="text"
              className="form-control"
              id="inputContact2"
            />
            <div className="valid-tooltip">¡Campo válido!</div>
            <div className="invalid-tooltip">Debe completar los datos.</div>    
          </div>

          <div className="col-md-6 position-relative">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
            <div className="valid-tooltip">¡Campo válido!</div>
          <div className="invalid-tooltip">Debe completar los datos.</div>    
          </div>
         
          <div className="col-md-6 position-relative">
            <label htmlFor="inputPassword4" className="form-label">
              Contraseña
            </label>
            <input type="password" className="form-control" id="inputPassword4" />
            <div className="valid-tooltip">¡Campo válido!</div>
          <div className="invalid-tooltip">Debe completar los datos.</div>    
          </div>

          <div className="col-12 position-relative">
            <label htmlFor="inputAddress" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Dirección de la Oficina Central"
            />
            <div className="valid-tooltip">¡Campo válido!</div>
            <div className="invalid-tooltip">Debe completar los datos.</div>    
          </div>

          <div className="col-md-6 position-relative">
            <label htmlFor="inputCity" className="form-label">
              Ciudad
            </label>
            <input type="text" className="form-control" id="inputCity" />
            <div className="valid-tooltip">¡Campo válido!</div>
            <div className="invalid-tooltip">Debe completar los datos.</div>    
          </div>

          <div className="col-md-4 position-relative">
            <label htmlFor="inputState" className="form-label">
              Comuna
            </label>
            <input type="text" className="form-control" id="inputState" />

            <div className="valid-tooltip">¡Campo válido!</div>
            <div className="invalid-tooltip">Debe completar los datos.</div>    
          </div>

          <div className="col-md-2 position-relative">
            <label htmlFor="inputZip" className="form-label">
              Número
            </label>
            <input type="text" className="form-control" id="inputZip" />
            <div className="valid-tooltip">¡Campo válido!</div>
            <div className="invalid-tooltip">Debe completar los datos.</div>    
          </div>

          <div className="col-12 position-relative">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12 ">
            <button className="btn btn-warning fw-bold float-end" type="submit">
              submit
            </button>
          </div>
        </form>


    </div>    
  

    
  );
};

export default CompanyRegister;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
