const FormLayout = (props) => {
  return (
    <div className="mb-4">
      <div className="row ">
        <div className="col-4">
          <img
            className="avatar"
            alt="avatar"
            src="https://randomuser.me/api/portraits/women/44.jpg"
          ></img>
        </div>
        <div className="col form_body">
          <h3 className="w-100 form_title"> {props.title} </h3>
          <form>{props.children}</form>
        </div>
      </div>
    </div>
  );
};
export default FormLayout;
