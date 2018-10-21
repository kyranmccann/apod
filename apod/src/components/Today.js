import React from 'react';
import axios from 'axios';

class Today extends React.Component {
  constructor(){
    super();
        const API_KEY = process.env.REACT_APP_APOD_API_KEY;
        this.url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    this.state = {
      today: null,
    }
  }

    componentDidMount(){
      console.log('sup');
      axios
        .get(this.url)
        .then(response => {
          this.setState(() => ({
            today: response.data,
          }))
        })
        .catch(error => {
          console.error('Sorry ', error);
        })
    }

    render() {
        return(
          <div className='today'>
              {!this.state.today ? <h3>Loading....</h3> :
                <div className='today-card'>
              <img src={this.state.today.hdurl} alt={this.state.today.title} />
              <div className='today-info'>
              {this.state.today.copyright && <small>photo by {this.state.today.copyright}</small>}
              <h3>{this.state.today.title}</h3>
              <p>{this.state.today.date}</p>
              <p>{this.state.today.explanation}</p>
            </div>
            </div>}
          </div>
        )
    }

}

export default Today;
