import { useState } from 'react';

import Tour from '../components/Tour';

const Tours = ({ props }) => {
  const [tours, setTours] = useState(props);

  return (
    <main>
      <h2 className="title ">our tours</h2>
      <h2 className="title-underline"></h2>
      <section className="tours">
        {tours ? (
          tours.map((tour) => {
            return <Tour key={tour.id} {...tour} />;
          })
        ) : (
          <section>
            <h2 className="title">no tours left</h2>
            <button type="button">refresh</button>
          </section>
        )}
      </section>
    </main>
  );
};
export default Tours;
