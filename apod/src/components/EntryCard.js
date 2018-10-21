import React from 'react';


class EntryCard extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    return(
      <div className='entry-card'>
        {props.entry.url.includes('youtube') ?
        <iframe src={props.entry.url} height='400' width='400' /> :
       <img src={props.entry.url} alt={props.entry.title} />
        }
        <div className='entry-info'>
        {props.entry.copyright && <small>photo by {props.entry.copyright}</small>}
        <h3>{props.entry.title}</h3>
        <p>{props.entry.date}</p>
        <p>{props.entry.explanation}</p>
      </div>
      </div>
    )

  }
}
export default EntryCard;
