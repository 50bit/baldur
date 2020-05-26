import React from 'react';
import '../App.scss';

function Message() {
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
                  className='input-placeholder customTextArea mt-2 mb-2 w-100'
                  placeholder='Write a message ...'
                ></textarea>
              </div>
              <div className='row'>
                <button
                  type='button'
                  className=' btn btn-default btn-custom ml-auto'
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

export default Message;
