import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);

  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });

  }

  search(e) {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  }


  render() {
    return (<div>
      <h4>Add more repos!</h4>
      <form>
      Enter a github username: <input type="text" onChange={this.onChange} value={this.state.terms}/>
      <button onClick={this.search}> Add Repos </button>
      </form>
    </div>)
  }
}

export default Search;