"use client";

import React from "react";

const Cards= () => {
  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h2>Induction Target</h2>
            {/* <BsFillArchiveFill className='card_icon'/> */}
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h2>Total Inducted</h2>
            {/* <BsFillGrid3X3GapFill className='card_icon'/> */}
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h2>To Mobilize</h2>
            {/* <BsPeopleFill className='card_icon'/> */}
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h2>Total Mobilized</h2>
            {/* <BsFillBellFill className='card_icon'/> */}
          </div>
          <h1>42</h1>
        </div>
      </div>
    </main>
  );
};

export default Cards;
