import FormLayout from "./FormLayout";
import Input from "./Input";
import { useState } from "react";
const Birth = (props) => {
  const [formData, setFormData] = useState({
    Day: "",
    Month: "",
    Year: "",
  });

  const handleChange = () => (e) => {
    props.change("Birth", { ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <FormLayout title="¿Cúal es tu fecha de nacimiento?">
        <Input
          type="text"
          change={handleChange}
          name="Day"
          placeholder="Día"
        ></Input>
        <Input
          type="text"
          change={handleChange}
          name="Month"
          placeholder="Mes"
        ></Input>
        <Input
          type="text"
          change={handleChange}
          name="Year"
          placeholder="Año"
        ></Input>
      </FormLayout>
      {formData.Year && (
        <div className="form_footer">
          <p>
            {formData.Day ? formData.Day + " / " : ""}{" "}
            {formData.Month ? formData.Month + " / " : ""} {formData.Year}
          </p>
        </div>
      )}
    </div>
  );
};
export default Birth;
