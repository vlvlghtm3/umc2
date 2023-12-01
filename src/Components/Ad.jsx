import React from 'react';

function Ad({ showAd }) {
  if (showAd) {
    return (
      <div>
        <img src="../img/Untitled.svg" alt="광고 배너" />
      </div>
    );
  } 
  else {
    return null; 
  }
}

export default Ad;
