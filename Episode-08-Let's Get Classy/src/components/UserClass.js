import React from "react";
import ExtraInfo from "./ExtraInfo";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor()", props.name);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    console.log("Children componentDidMount()", this.props.name);
    const data = await fetch("https://api.github.com/users/kshitij14397");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount");
  }

  render() {
    console.log("Child render()", this.props.name);

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
