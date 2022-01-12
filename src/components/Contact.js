import FormLayout from "./FormLayout";
import Input from "./Input";
import { useState } from "react";
const Contact = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const handleChange = () => (e) => {
    props.change("Contact", { ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <FormLayout title="¿Cúal es tu nombre?">
        <Input
          type="email"
          change={handleChange}
          name="email"
          placeholder="Correo electrónico"
        ></Input>
        <Input
          type="text"
          change={handleChange}
          name="phone"
          placeholder="Teléfono"
        ></Input>
      </FormLayout>
      {formData.phone && (
        <div className="form_footer">
          <p>
            Correo electrónico: {formData.email}
            <br />
            Teléfono: {formData.phone}
            <br />
          </p>
        </div>
      )}
    </div>
  );
};
export default Contact;
