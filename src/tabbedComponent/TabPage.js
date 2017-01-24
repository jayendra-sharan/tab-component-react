import React, { Component } from 'react';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import MyProfile from '../pages/MyProfile';
import LogOut from '../pages/LogOut';

class TabPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderComp: this._getRenderComp(this.props.page)
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      renderComp: this._getRenderComp(nextProps.page)
    })
  }
/*
 *  Function to determine which react component will be rendered.
 *  @params { string } props received in this component.
 */

  _getRenderComp(page) {
    if (page === "Home") {
      return (<Home />);
    } else if (page === "Dashboard") {
      return (<Dashboard />);
    } else if (page === "My Profile") {
      return (<MyProfile />);
    } else if (page === "Log Out") {
      return (<LogOut />);
    }
  }
  render() {
    return (
      <div className="page">
        {this.state.renderComp}
      </div>
    )
  }
}
export default TabPage;
