import React from 'react';

import "../style/App.scss";

import egg from'../egg.png';

export function HeadingTitle(props) {
  const date = new Date(props.date);

  return (
    <div className="heading">
      <img src={egg} alt={'egg'} />
      <div>
        <h1>{props.teamName}</h1>
        <h2>Sprint Planning</h2>
        <h3>{`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}</h3>
      </div>
      <img src={egg} alt={'egg'} />
    </div>
  )
}
