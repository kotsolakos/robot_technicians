import './card.styles.css';

const Card = ({ technician }) => {
  const { id, name, email } = technician;

  return (
    <div className='card-container'>
      <img
        alt={`technician ${name}`}
        src={`https://robohash.org/${id}?set=set5&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;