import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    // $.ajax({
    //   type: "POST",
    //   url: '/repos',
    //   data: term,
    //   success: (data) => {
    //     console.log('response data:', data)
    //   },
    //   error: (err) => {
    //     console.error('Error submitting search term', err);
    //   },
    // });
    axios.post('/repos', {
      term: term
    })
    .then((data) => {
      console.log('response', data)
    })
    .catch((err) => {
      console.error('Error submitting term', err)
    });



  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));