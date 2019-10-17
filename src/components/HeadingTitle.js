import React from 'react';

import "../style/App.scss";

import bacon1 from'../bacon1.png';
import bacon2 from'../bacon2.png';

export function HeadingTitle() {
  return (
    <div className="heading">
      <img src={bacon1} alt={'bacon'} />
      <div>
        <h1>New Bacon Monster</h1>
        <h2>Sprint Planning</h2>
      </div>
      <img src={bacon2} alt={'bacon'} />
    </div>
  )
}
