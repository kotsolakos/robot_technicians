import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [technicians, setTechnicians] = useState([]);
  const [filteredTechnicians, setFilterTechnicians] = useState(technicians);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setTechnicians(users));
  }, []);

  useEffect(() => {
    const newFilteredTechnicians = technicians.filter((technician) => {
      return technician.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterTechnicians(newFilteredTechnicians);
  }, [technicians, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Robot Technicians</h1>

      <SearchBox
        className='technicians-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Technicians...'
      />
      <CardList technicians={filteredTechnicians} />
    </div>
  );
};

export default App;