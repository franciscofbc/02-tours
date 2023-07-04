import { useState } from 'react';

const Tour = ({ id, name, info, image, price }) => {
  const [flagInfo, setFlagInfo] = useState(false);

  const infoReduce = (info) => {
    if (info.length > 199) {
      return `${info.slice(0, 199)} ... `;
    }
  };

  return (
    <article className="tour">
      <img src={image} alt={name} className="img img-tour" />
      <span className="span-tour ">${price}</span>
      <div className="div-tour">
        <h4>{name}</h4>
        {flagInfo ? (
          <>
            <p className="info">{info}</p>
            <button
              type="button"
              className="btn btn-tour-read"
              onClick={() => setFlagInfo(false)}
            >
              show less
            </button>
          </>
        ) : (
          <>
            <p className="info">{infoReduce(info)}</p>
            <button
              type="button"
              className="btn btn-tour-read"
              onClick={() => setFlagInfo(true)}
            >
              read more
            </button>
          </>
        )}
        <button type="button" className="btn  btn-block btn-tour">
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
