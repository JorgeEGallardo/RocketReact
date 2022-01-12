import { useState } from "react";
import Birth from "./Birth";
import Contact from "./Contact";
import FormLayout from "./FormLayout";
import Name from "./Name";
import { useMutation } from "@apollo/react-hooks";
import mutation from "./Services/Apollo.js";

const Form = ({ title }) => {

  const [addPerson, {resolve}] = useMutation(mutation);

  const [formData, setFormData] = useState({
    Name: "",
    Birth: "",
    Contact: "",
  });

  const handleChange = (element, data) => {
    setFormData({ ...formData, [element]: data });
    console.log(formData.Name);
  };

  const handleClick = (e) => {
    try {
      e.preventDefault();
    const Birthday =
      (formData.Birth.Day ? formData.Birth.Day + " / " : "") +
      (formData.Birth.Month ? formData.Birth.Month + " / " : "") +
      formData.Birth.Year;
    sessionStorage.clear();
    sessionStorage.setItem(
      "formData",
      JSON.stringify({ ...formData.Name, ...formData.Contact, Birthday })
    );
    const data = JSON.parse(sessionStorage.getItem("formData"));
    addPerson({
      variables: {
        firstName: data.FrsName,
        secondName: data.ScnName,
        fatherLastName: data.FLstName,
        motherLastName: data.SLstName,
        birthday: data.Birthday,
        email: data.email,
        phone: data.phone,
      },
    });
    } catch (error) {
      alert("Ocurrio un error")
    } finally {
      alert(`Se ha agregado exitosamente.`)
    }
    
    
  };

  return (
    <div className="container rounded mw">
      <div className="card">
        <div className="bg">
          <div className="row w-100">
            <div className="col-8">
              <h1>{title}</h1>
              <h6>En solo 5 Minutos</h6>
            </div>
            <div className="col-4">
              <img src="/formas.png" alt="formulario" className="w-100"></img>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div>
            <Name change={handleChange}></Name>
            <Birth change={handleChange}></Birth>
            <Contact change={handleChange}></Contact>
            <FormLayout>
              <p>Sí tus datos son correctos, por favor continuemos.</p>
            </FormLayout>
          </div>
          <div className="w-100">
            <button className="btn btn-danger form_btn" onClick={handleClick}>
              {" "}
              Iniciar
            </button>{" "}
          </div>

          <div className="form_footer">
            <p>
              Primer nombre: {formData.Name.FrsName}
              <br />
              Segundo nombre: {formData.Name.ScnName}
              <br />
              Apellido paterno: {formData.Name.FLstName}
              <br />
              Apellido materno: {formData.Name.SLstName}
              <br />
            </p>
            <p>
              {formData.Birth.Day ? formData.Birth.Day + " / " : ""}{" "}
              {formData.Birth.Month ? formData.Birth.Month + " / " : ""}{" "}
              {formData.Birth.Year}
            </p>
            <p>
              Correo electrónico: {formData.Contact.email}
              <br />
              Teléfono: {formData.Contact.phone}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
