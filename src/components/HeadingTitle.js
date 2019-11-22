import React from 'react';

import "../style/App.scss";

import egg from'../egg.png';

export function HeadingTitle(props) {
  return (
    <div className="heading">
      <img src={egg} alt={'egg'} />
      <div>
        <h1>{props.teamName}</h1>
        <h2>Sprint Planning</h2>
      </div>
      <img src={egg} alt={'egg'} />
    </div>
  )
}
