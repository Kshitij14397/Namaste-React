import React from "react";
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
