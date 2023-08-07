import "./form-input.styles.scss";
const formInput = ({label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      <label
        className={`${otherProps.value?.length? "shrink" : null} form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default formInput;
