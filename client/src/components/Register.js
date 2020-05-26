import React from 'react';
import '../App.scss';
import { HTTP } from '../config/axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { firstName, lastName, userName, password } = this.state;

    return HTTP.post('/user/register', {
      firstName,
      lastName,
      userName,
      password,
    });
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  render() {
    const { firstName, lastName, userName, password } = this.state;

    return (
      <div className='Register'>
        <div className='container'>
          <div className=' col-xs-12 col-sm-offset-1 col-sm-8 mr-auto ml-auto '>
            <div className='container panel panel-default  panel-google-plus'>
              <div className='panel-heading text-center'>
                <h2>Register</h2>
              </div>
              <div className='container'>
                <div className='row'>
                  <input
                    type='text'
                    placeholder='First Name'
                    className='form-control mt-2 mb-2 w-100'
                    onChange={(ev) => this.handleChangeField('firstName', ev)}
                    value={firstName}
                  />
                </div>
                <div className='row'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    className='form-control mt-2 mb-2 w-100'
                    onChange={(ev) => this.handleChangeField('lastName', ev)}
                    value={lastName}
                  />
                </div>
                <div className='row'>
                  <input
                    type='text'
                    placeholder='User Name'
                    className='form-control mt-2 mb-2 w-100'
                    onChange={(ev) => this.handleChangeField('userName', ev)}
                    value={userName}
                  />
                </div>
                <div className='row'>
                  <input
                    type='password'
                    placeholder='Password'
                    className='form-control mt-2 mb-2 w-100'
                    onChange={(ev) => this.handleChangeField('password', ev)}
                    value={password}
                  />
                </div>
                <div className='row'>
                  <button
                    type='button'
                    className=' btn btn-default btn-custom ml-auto'
                    onClick={this.handleSubmit}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
