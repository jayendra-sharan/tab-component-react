import React, { Component } from 'react';

import TabPage from './TabPage';
import TabLinks from './TabLinks';

/*
 *  data is an array of {objects}.
 *  {object.tab} is the name of tab, this would appear in the tab title.
 *  {object.tab} is the string whose name should match with the name of component
 *  that needs to be displayed.
 *  e.g. "page" = "Home" A component with name Home will be displayed.
 *
 */


let data = [
  {
    "tab": "Home",
    "page": "Home"
  },
  {
    "tab": "Dashboard",
    "page": "This is dashboard."
  },
  {
    "tab": "My Profile",
    "page": "Profile Detail."
  },
  {
    "tab": "Log Out",
    "page": "You have logged Out."
  }
];

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [],
      page: ''
    };
    this.onClick = this.onClick.bind(this);
  }
  componentWillMount() {
    this.setState({
      data,
      tabs: this._createTabs(data),
      page: this._getHomePage(data)
    });

  }

/*
 *  Function to create an array of tabs.
 *  @params {Object} data - The root object
 *      holding the data of page plus tabs for the app.
 */

  _createTabs(data) {
    return data.reduce((acc, item) => {
      acc.push(item.tab);
      return acc;
    }, []);
  }

/*
 *  Function to get the home/default page that needs to be
 *  displayed when the app loads.
 *  @params {Object} data - The root object
 *      holding the data of page plus tabs for the app.
 */

  _getHomePage(data) {
    // debugger;
    const item = data.filter((item) => {
      return (item.tab === "Home");
    });
    return item[0].page;
  }

/*
 *  Function to change the tab content with appropriate
 *  page value.
 *  @params {event} event generated when the tab links are clicked.
 */
 
  onClick(event) {
    const tab = event.target.textContent;
    const item = this.state.data.filter((item) => {
      return (item.tab === tab);
    });
    this.setState({
      page: item[0].tab
    });
  }
  render() {
    return (
      <div>
        <TabLinks onClick={this.onClick} tabs={this.state.tabs} />
        <TabPage page={this.state.page} />
      </div>
    )
  }
}

export default Tab;
