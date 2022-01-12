import FormLayout from "./FormLayout";
import Input from "./Input";
import { useState } from "react";
const Name = (props) => {
  const [formData, setFormData] = useState({
    FrsName: "",
    ScnName: "",
    FLstName: "",
    SLstName: "",
  });

  const handleChange = () => (e) => {
    props.change("Name", { ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <FormLayout title="¿Cúal es tu nombre?">
        <Input
          type="text"
          change={handleChange}
          name="FrsName"
          placeholder="Primer nombre"
        ></Input>
        <Input
          type="text"
          change={handleChange}
          name="ScnName"
          placeholder="Segundo nombre"
        ></Input>
        <Input
          type="text"
          change={handleChange}
          name="FLstName"
          placeholder="Apellido paterno"
        ></Input>
        <Input
          type="text"
          change={handleChange}
          name="SLstName"
          placeholder="Apellido materno"
        ></Input>
      </FormLayout>
      {formData.SLstName && (
        <div className="form_footer">
          <p>
            Primer nombre: {formData.FrsName}
            <br />
            Segundo nombre: {formData.ScnName}
            <br />
            Apellido paterno: {formData.FLstName}
            <br />
            Apellido materno: {formData.SLstName}
            <br />
          </p>
        </div>
      )}
    </div>
  );
};
export default Name;
