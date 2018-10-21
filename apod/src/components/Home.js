import React from 'react';
import Today from './Today.js';
import EntryList from './EntryList';



const Home = props => {
  return(
    <div className='main-container'>
      <Today entry={props.today} />
      <EntryList />
  </div>
  )
}
export default Home;
