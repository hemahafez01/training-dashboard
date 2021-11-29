// import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './component/navbar'
import Sidebar from './component/sidebar'
import Chart from './component/chart'
import Terms from './component/terms'


function App() {
  return(
    <React.Fragment>
      <Navbar/>
      <div className = 'row' >
        <div className = 'col-1' >
          <Sidebar/>
        </div>

        <div className = ' col-10 flex-column p-3 mb-2 bg-secondary' >
        <div>
          <div className='row'>
            <span className = 'col-sm-6'>lorem ipsum</span>
            <span className = 'col-sm-6'>progress bar</span>
          </div>
          <div className = 'col-10 flex-column col row p-3 mb-2 bg-white text-dark' >
          <div className = 'col row' >
            <div className = 'col-sm-4'>
            <Chart/>
            </div>
            <div className = 'col-sm-4'>
            <Chart/>
            </div>
            <div className = 'col-sm-2'>
            <Terms/>
            </div>
          </div>
          <div className = 'col row' >
            <h1 className = 'col' > hello world hello world hello world hello world hello world hello world </h1>
            <h1 className = 'col' > hello world hello world hello world hello world hello world hello world </h1>
          </div>
        </div>
        </div>
        </div>
        
      </div>
    </React.Fragment>
  );
}

export default App;
