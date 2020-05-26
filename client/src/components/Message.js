import React from 'react';
import '../App.scss';
import { HTTP } from '../config/axios';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeStamp: new Date().toISOString(),
      message: '',
      user: JSON.parse(localStorage.user)._id || '',
    };

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { timeStamp, message, user } = this.state;

    return HTTP.post('/messages', { timeStamp, message, user });
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  render() {
    const message = this.state.message;
    return (
      <div className='Message'>
        <div className='container'>
          <div className=' col-xs-12 col-sm-offset-1 col-sm-8 mr-auto ml-auto '>
            <div className='container panel panel-default  panel-google-plus'>
              <div className='panel-heading'>
                <h3>Robert McIntosh</h3>
              </div>
              <div className='container'>
                <div className='row'>
                  <textarea
                    onChange={(ev) => this.handleChangeField('message', ev)}
                    className='input-placeholder customTextArea mt-2 mb-2 w-100'
                    placeholder='Write a message ...'
                    value={message}
                  ></textarea>
                </div>
                <div className='row'>
                  <button
                    type='button'
                    className=' btn btn-default btn-custom ml-auto'
                    onClick={this.handleSubmit}
                  >
                    Submit
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

export default Message;
