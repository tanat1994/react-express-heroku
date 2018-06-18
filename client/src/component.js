import React, { Component } from 'react';

class Generate extends Component {

  constructor () {
    super();
    this.state = {
      data: []
     };
  }

  componentDidMount () {
    this.getFetchData();
  }

  getFetchData = () => {
    fetch('/api/generate')
      .then(res => res.json())
      .then(data => this.setState({ data }, () => console.log('data fetched ....', data)));
  };

  render () {
    const { data } = this.state;
    return (
      <div>
        <ul>
          { data.map((data) =>
            <li key={data.id}>
              {data.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
};

export default Generate;
