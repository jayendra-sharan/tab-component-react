import React, { Component } from 'react';
import './tab.css';

class TabLinks extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      activeTab: 0
    }
  }
/*
 *  Function to change the active class for the tabs and
 *  also call the onClick function of parent component.
 *  @params {event} event generated when the tab links are clicked.
 */

  onClick(event) {
    event.preventDefault();
    this.props.onClick(event);
    this.setState({
      activeTab: parseInt(event.target.id, 10)
    });
  }
  render () {
    return (
      <ul className="tabs">
        {this.props.tabs.map((key, value) => {
          return (
            <li
              className={ value === this.state.activeTab ? 'active': ''}
              key={value}
              id={value}
              onClick={this.onClick}
            >
              {key}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default TabLinks;
