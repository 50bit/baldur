import React from 'react';
import '../App.scss';

function Login() {
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
                />
              </div>
              <div className='row'>
                <input
                  type='password'
                  placeholder='Password'
                  className='form-control mt-2 mb-2 w-100'
                />
              </div>
              <div className='row'>
                <button
                  type='button'
                  className=' btn btn-default btn-custom ml-auto'
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

export default Login;
