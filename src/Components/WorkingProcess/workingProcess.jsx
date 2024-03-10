
import React from 'react';
import './workingProcess.css'; // Import CSS file for styling

const WorkingProcess = () => {
  return (
    <div className="software-process-container">
      <h2>Software working process</h2>

      <div className="box-container">
        {/* Box 1 */}
        <div className="box">
          <h3>01</h3>
          <h4>Manage tasks</h4>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>

        {/* Box 2 */}
        <div className="box">
          <h3>02</h3>
          <h4>Automate tasks</h4>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>

        {/* Box 3 */}
        <div className="box">
          <h3>03</h3>
          <h4>Track results</h4>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>

        {/* Box 4 */}
        <div className="box">
          <h3>04</h3>
          <h4>Get support</h4>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
