function CustomInput(props) {
    return (
      <div className="form-group mb-3">
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    );
  }
  
  export default CustomInput;
  