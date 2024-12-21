/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './Preloader.css';

const Preloader = ({ progress }) => {
  return (
    <div className="preloader">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-text">{progress}%</div>
    </div>
  );
};
Preloader.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Preloader;
