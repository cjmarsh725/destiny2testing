import React from 'react';
import './GearCard.css';

const GearCard = props => {
  return (
    <div className="gearcard">
      {props.content}
    </div>
  );
}

export default GearCard;