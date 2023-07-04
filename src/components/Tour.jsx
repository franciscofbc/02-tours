import { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} className="img img-tour" />
      <span className="span-tour ">${price}</span>
      <div className="div-tour">
        <h4>{name}</h4>
        {readMore ? (
          <>
            <p className="info">{info}</p>
            <button
              className="btn btn-tour-read"
              onClick={() => setReadMore(false)}
            >
              show less
            </button>
          </>
        ) : (
          <>
            <p className="info">{`${info.slice(0, 199)} ... `}</p>
            <button
              className="btn btn-tour-read"
              onClick={() => setReadMore(true)}
            >
              read more
            </button>
          </>
        )}
        <button
          className="btn  btn-block btn-tour"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
