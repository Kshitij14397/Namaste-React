import React from "react";
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor()");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount()");
  }

  render() {
    //console.log("Parent render()");
    return (
      <div>
        <h1>This is a Food Ordering App</h1>
        <div>
          <UserContext.Consumer>
            {(data) => (
              <h1 className="text-lg font-bold">{data.loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass
          name="Kshitij Pandey"
          city="Lucknow"
          mail_id="kshitij14397@gmail.com"
        />
      </div>
    );
  }
}

export default AboutUs;
