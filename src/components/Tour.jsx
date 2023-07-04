const Tour = ({ id, name, info, image, price }) => {
  return (
    <article className="tour">
      <img src={image} alt={name} className="img img-tour" />
      <span className="span-tour ">${price}</span>
      <div className="div-tour">
        <h4>{name}</h4>
        <p className="info">{info}</p>
        {/* 203 with space + ... */}
        <button type="button" className="btn btn-tour-read">
          read more
        </button>
        <button type="button" className="btn  btn-block btn-tour">
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
