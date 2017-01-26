import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      name:'router-course'
    }
  }
  render() {
    return (
      <div>
        <h1>hello!!! {this.state.name}</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    )
  }
}