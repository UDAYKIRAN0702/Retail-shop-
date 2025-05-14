import React from 'react';
import './Backup.css';

function Backup() {
  const handleBackup = () => {
    alert('Database backup...');
  };

  const handleNewSession = () => {
    alert('New session started.');
  };

  const handleExit = () => {
    alert('Exiting...');
  };

  return (
    <div className="overlay">
      <div className="panel">
        <button className="close-button" onClick={handleExit}>X</button>
        
        <h2>Database Back Up and New Session Start!</h2>
        <div className="button-row">
          <button className="btn green" onClick={handleBackup}>Back Up</button>
          <button className="btn green" onClick={handleNewSession}>Start New Session</button>
        </div>
        <button className="btn red" onClick={handleExit}>Exit</button>
      </div>
    </div>
  );
}

export default Backup;
