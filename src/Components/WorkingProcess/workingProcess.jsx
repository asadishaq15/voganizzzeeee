import React from 'react';
import './workingProcess.css'; // Import CSS file for styling

const WorkingProcess = () => {
  return (
    <div className="software-process-container">
      <h2 className="software-process-heading">Software working process</h2>

      <div className="box-container">
        {/* Box 1 */}
        <div className="box box1">
          <h3 className="box-number">01</h3>
          <h4 className="box-title">Manage tasks</h4>
          <p className="box-description">Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>

        {/* Box 2 */}
        <div className="box box2">
          <h3 className="box-number">02</h3>
          <h4 className="box-title">Automate tasks</h4>
          <p className="box-description">Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>

        {/* Box 3 */}
        <div className="box box3">
          <h3 className="box-number">03</h3>
          <h4 className="box-title">Track results</h4>
          <p className="box-description">Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>

        {/* Box 4 */}
        <div className="box box4">
          <h3 className="box-number">04</h3>
          <h4 className="box-title">Get support</h4>
          <p className="box-description">Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
