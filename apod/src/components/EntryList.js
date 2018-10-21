import React from 'react';
import axios from 'axios';
import Entry from './Entry';
import { tempData } from './tempData';

class EntryList extends React.Component {
  constructor(props){
    super(props);
    const API_KEY = process.env.REACT_APP_APOD_API_KEY;
    // this.url =`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`
    // this.state = {
    //   entries: [],
    // }
    //temporary data store for developing css
    this.state = {
      entries: tempData,
    }
  }

  // componentDidMount(){
  //   axios
  //     .get(this.url)
  //     .then(response => {
  //       this.setState(() => ({
  //         entries: response.data
  //       }));
  //     })
  //     .catch(error => {
  //       console.error('Sorry ', error);
  //     })
  // }

  render(){
    return(
      <div className='entry-list'>
        {this.state.entries.map(entry => (
          <Entry key={entry.date} entry={entry}/>
        ))}
      </div>
    )
  }

}
export default EntryList;
