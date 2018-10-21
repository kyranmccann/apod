import React from 'react';



const Entry = props => {

  return (
  <div className='entry-card'>
    {/* <div className='image' style={{background: `url(${props.entry.hdurl})`}} /> */}
    <img src={props.entry.url} alt={props.entry.title} />
    {props.entry.copyright && <small>photo by {props.entry.copyright}</small>}
    <h2>{props.entry.title}</h2>
    <p>{props.entry.date}</p>
    {/* <p>{props.entry.explanation}</p> */}
  </div>
  )
}

export default Entry;
