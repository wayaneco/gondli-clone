import React from 'react';
import './HeaderInput.scss';

const HeaderInput: React.FC = () => {
  return (
    <React.Fragment>
      <div className="headerInput">
        <img src="/images/home/SearchOutline.svg" alt="SearchOutline" />
        <input
          type="text"
          placeholder="Enter service, location, or therapist"
        />
        <button>Search</button>
      </div>
    </React.Fragment>
  );
};

export default HeaderInput;
