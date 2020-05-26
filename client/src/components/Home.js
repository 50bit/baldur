import React from 'react';
import '../App.scss';

function Home() {
  return (
    <div className='Home'>
      <div className='container'>
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
              <h3>Robert McIntosh</h3>
              <h5>
                <span>Shared publicly</span> - <span>Jun 27, 2014</span>{' '}
              </h5>
            </div>
            <div className='panel-body'>
              <p>
                Do people born in 2000 get to choose if they are Generation Y or
                Generation Z? How do you decide what generation you want to
                belong to?
              </p>
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
      </div>
    </div>
  );
}

export default Home;
