import React from 'react';
import '../App.scss';
import { HTTP } from '../config/axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    HTTP.get('/messages').then((res) => {
      this.setState({
        messages: res.data.data,
      });
    });
  }
  render() {
    const messages = this.state.messages;
    return (
      <div className='Home'>
        <div className='container'>
          {messages.map((msg) => {
            return (
              <div className=' col-xs-12 col-sm-offset-1 col-sm-8 mr-auto ml-auto '>
                <div className='container panel panel-default  panel-google-plus'>
                  <div className='dropdown'>
                    <span
                      className='dropdown-toggle'
                      type='button'
                      data-toggle='dropdown'
                    >
                      <span className=' glyphicon glyphicon-chevron-down '></span>
                    </span>
                    <ul className='dropdown-menu' role='menu'>
                      <li role='presentation'>
                        <div className='menuItem'>
                          Edit
                          <span className='iconContainer edit'>
                            <i className='fa fa-edit'></i>
                          </span>
                        </div>
                      </li>
                      <li role='presentation'>
                        <div className='menuItem'>
                          Delete
                          <span className='iconContainer delete'>
                            <i className='fa fa-trash'></i>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className='panel-heading'>
                    <h3>{msg.user}</h3>
                    <h5>
                      <span>Shared publicly</span> -{' '}
                      <span>{msg.timeStamp}</span>{' '}
                    </h5>
                  </div>
                  <div className='panel-body'>
                    <p>{msg.message}</p>
                  </div>
                  <div className='container'>
                    <div className='panel-footer row'>
                      <div className='col-8'>
                        <textarea
                          className='input-placeholder'
                          placeholder='Reply to message ...'
                        ></textarea>
                      </div>
                      <div className='col-4'>
                        <button type='button' className=' btn btn-default '>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
