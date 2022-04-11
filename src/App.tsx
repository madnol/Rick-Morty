import CardGrid from 'components/pages/card-grid';
import { ChangeEvent, useState } from 'react';

import SearchBar from 'components/organisms/search-bar';

import './App.scss';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    return setSearchValue(e.target.value);
  };

  return (
    <div className="App">
      <SearchBar value={searchValue} setValue={handleSearchValue} />
      <CardGrid searchValue={searchValue} />
    </div>
  );
};

export default App;
