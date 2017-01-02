import React, {PropTypes} from 'react';

const EmailInput = ({name, label, value, placeholder, icon, helpText, error, onChange}) => {
  return (
    <div className="form-group">
      <label htmlFor="name" className="cols-sm-2 control-label">{label}</label>
      <div className="cols-sm-10">
        <div className="input-group">
          {icon &&
          <span className="input-group-addon">
            <i className={icon + " fa"} aria-hidden="true"></i>
          </span>
          }
          <input
            type="email"
            className="form-control"
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
};
EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  icon: PropTypes.string,
  helpText: PropTypes.string,
  error: PropTypes.string,

  placeholder: PropTypes.string
};

export default EmailInput;
