import React from 'react';


class SearchForm extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <form>
        <input
          type='date'
          value={this.props.searchDate} />
      </form>
    )
  }
}
export default SearchForm;
