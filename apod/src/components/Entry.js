import React from 'react';
import Styled from 'styled-components'



const Entry = props => {
  const background = props.entry.url
  return (
  <div className='entry-card'>
    {/* <div className='image' style={{background: `url(${props.entry.hdurl})`}} /> */}

    {props.entry.url.includes('youtube') ?
    <iframe src={props.entry.url} height='400' width='400' />:
    <div className='image' style={{ backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'noRepeat'
    }}  />
    // {/* <img src={props.entry.url} alt={props.entry.title} /> */}
    }
    <div className='entry-info'>
    {props.entry.copyright && <small>photo by {props.entry.copyright}</small>}
    <h3>{props.entry.title}</h3>
    <p>{props.entry.date}</p>
  </div>
    {/* <p>{props.entry.explanation}</p> */}
  </div>
  )
}

export default Entry;
