# tab-component-react
A custom tabbed component to without using react-router.

# Installation
Clone this repository by
```
git clone https://github.com/jayendra-shara/react-tab-component.git
cd react-tab-component
npm install
```

Build Code: ```npm run build```

This app has been created with create-react-app, for more information about code building and all please check:

```https://github.com/facebookincubator/create-react-app```

# Usage Instructions
It is important to note that this component does not use react-router. Hence the logic for displaying appropriate page (react-component) when a tab is clicked should be written explicitly.

e.g.
```
//...other imports
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import MyProfile from '../pages/MyProfile';
import LogOut from '../pages/LogOut';

//..inside component give the logic
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
//...rest of the code
```
# Result
When the app loads
![alt tag](./screenshot.home.png??raw=true "Home")

When clicked on Dashboard
![alt tag](./screenshot.dashboard.png??raw=true "Home")

# Note
This code base is not a replacement for react router. However it can be fully customized and used in place of react router.
