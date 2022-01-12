const Input = (props) => {
  return (
    <>
      <label for={props.name} className="form-label">
        {props.placeholder}
      </label>
      <input
        type={props.type}
        name={props.name}
        className="form-control"
        id={props.name}
        placeholder={props.placeholder}
        onKeyUp={props.change(this)}
        required
      />
    </>
  )
}
export default Input;
