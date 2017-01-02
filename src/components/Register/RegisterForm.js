import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';
import EmailInput from '../common/EmailInput';

const RegisterForm = ({user,errors,onSave,onChange}) => {
  //http://bootsnipp.com/snippets/featured/register-page
  return (
    <div className="main-login main-center">
      <form className="form-horizontal" method="post" action="#">
        <TextInput
          name="name"
          label="Your Name"
          placeholder="Enter Your Name"
          onChange={onChange}
          icon="fa-user"
          error={errors.name}
        />
        <EmailInput
          name="email"
          label="Your Email"
          placeholder="Enter Your Email"
          onChange={onChange}
          icon="fa-envelope"
          error={errors.email}
        />
        <PasswordInput
          name="password"
          label=" Password"
          placeholder="Enter Your Password"
          onChange={onChange}
          icon="fa-lock fa-lg"
          error={errors.password}
        />
        <PasswordInput
          name="password_confirm"
          label="Password Confirm"
          placeholder="Enter Your Password Again"
          onChange={onChange}
          icon="fa-lock fa-lg"
          error={errors.password_confirm}
        />
        <div className="form-group ">
          <button type="button"
                  className="btn btn-primary btn-lg btn-block login-button"
                  onClick={onSave}
          >Register</button>
        </div>
      </form>
    </div>
  )
};
RegisterForm.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};
export default RegisterForm;
