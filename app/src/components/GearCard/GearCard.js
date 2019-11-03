import React from 'react';
import './GearCard.css';

export default GearCard = props => {
  return (
    <div className="gearcard">
      {props.content}
    </div>
  );
}