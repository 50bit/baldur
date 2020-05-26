import React from 'react';
import '../App.scss';
import { HTTP } from '../config/axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit() {
    const { userName, password } = this.state;
    const user = await HTTP.post('/user/login', { userName, password });
    localStorage.setItem('user', JSON.stringify(user.data.data));
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  render() {
    const { userName, password } = this.state;

    return (
      <div className='Login'>
        <div className='container'>
          <div className=' col-xs-12 col-sm-offset-1 col-sm-8 mr-auto ml-auto '>
            <div className='container panel panel-default  panel-google-plus'>
              <div className='panel-heading text-center'>
                <h2>Login</h2>
              </div>
              <div className='container'>
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
                    Login
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

export default Login;
