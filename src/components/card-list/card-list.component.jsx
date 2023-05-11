import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ technicians }) => (
  <div className='card-list'>
    {technicians.map((technician) => {
      return <Card key={technician.id} technician={technician} />;
    })}
  </div>
);

export default CardList;