import Tour from '../components/Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <h2 className="title ">our tours</h2>
      <h2 className="title-underline"></h2>
      <section className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </section>
    </section>
  );
};
export default Tours;
