/** @format */

import React from "react";
import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour removeTour={removeTour} key={tour.id} {...tour}></Tour>;
        })}
      </div>
    </section>
  );
}
