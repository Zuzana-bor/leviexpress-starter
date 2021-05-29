import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = ({ fromCity, toCity, date, journeyId }) => {
  const [journey, setJourney] = useState(null);

  const onJourneyChange = ({ fromCity, toCity, date }) => {
    fetch(
      `https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((response) => response.json())
      .then((json) => setJourney(json.data));
  };

  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={onJourneyChange} />
      </main>

      {journey !== ' ' ? `<div>Nalezeno spojení s id ${journeyId}</div>` : ''}
    </>
  );
};
