import React from 'react';

import RegisterForm from "./RegisterForm";
class RegisterPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
      },
      errors: {}
    }
    ;
    this.updateNewUserState = this.updateNewUserState.bind(this);
    this.saveNewUser = this.saveNewUser.bind(this);
  }

  registerFormIsValid() {
    let formIsValid = true;
    let errors = {};
    if (this.state.user.name.length < 5) {
      errors.name = 'Name must be at least 5 characters';
      formIsValid = false;
    }
    if (this.state.user.email.length < 5) {
      errors.email = 'Title must be at least 5 characters.';
      formIsValid = false;
    }
    if (this.state.user.password != this.state.user.password_confirm) {
      errors.password_confirm = errors.password = 'Passwords do not match';
      formIsValid = false;
    }
    if (this.state.user.password.length < 5) {
      errors.password = 'Password must be at least 5 characters';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  updateNewUserState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  saveNewUser(event) {
    event.preventDefault();

    if (false === this.registerFormIsValid()) {
      return;
    }
  }

  redirect() {
    this.setState();
    toastr.success('Registration Successful');
    this.context.router.push('/');
  }

  render() {
    return (
      <div className="col-lg-10">
        <h2>Registration</h2>
        <RegisterForm
          onChange={this.updateNewUserState}
          onSave={this.saveNewUser}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default RegisterPage;
