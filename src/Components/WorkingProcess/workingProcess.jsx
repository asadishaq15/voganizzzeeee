import React from 'react';
import './workingProcess.css'; // Import CSS file for styling

const WorkingProcess = () => {
  return (
    <div className="software-process-container">
      <h2 className="software-process-heading">Software working process</h2>

      <div className="box-container">
    
        <div className="boxp">
          <h1 className="box-number">01</h1>
          <h5 className="box-title">Manage tasks</h5>
          <p className="box-description">Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>

     
        <div className="boxp">
          <h1 className="box-number">02</h1>
          <h5 className="box-title">Automate tasks</h5>
          <p className="box-description">Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>


        <div className="boxp">
          <h1 className="box-number">03</h1>
          <h5 className="box-title">Track results</h5>
          <p className="box-description">Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>


        <div className="boxp">
          <h1 className="box-number">04</h1>
          <h5 className="box-title">Get support</h5>
          <p className="box-description">Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
