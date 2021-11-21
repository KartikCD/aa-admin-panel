import * as React from "react";
import './PlanTripListItem.css';

export const PlanTripListItem = React.memo(({ planTrip }) => {
  return (
    <div className="planTripContainer">
      <p class="name">
        <b>Kartik Chawda</b>
      </p>
      <p class="email">chawdakartik@gmail.com</p>
      <p class="phone">9987746997</p>
      <p class="country">Dubai</p>
      <p class="budget">Budget: 5000</p>
      <p class="occasion">Occasion: Honeymoon</p>
      <p class="adult">Adult: 4</p>
      <p class="children">Children: 2</p>
      <p class="infant">Infant: 1</p>
      <p class="duration">3 Days</p>
      <p class="dateOfDeparture">01/10/1999</p>
      <p class="place">Mumbai, Maharashtra</p>
      <p class="intrest">Intrest: Sky Diving</p>
      <p class="special">Gym required in hotel</p>
    </div>
  );
});
