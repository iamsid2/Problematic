import React, {Component} from 'react';
import './problem.css';

class Problem extends Component {
  render(){
    return(
        <div className = "card problem">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.description}</p>
          <h2 className="card-text">{this.props.name}</h2>
        </div>
    );
  }
}

export default Problem;
