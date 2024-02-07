import React from "react";
class ExtraInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log("Grant Child constructor()", props.info);
  }

  componentDidMount() {
    console.log("Grant Child componentDidMount()", this.props.info);
  }

  render() {
    console.log("Grant Child render()", this.props.info);
    return (
      <div>
        <h3>Family Members</h3>
        <p>Amar Akbar Anthony</p>
      </div>
    );
  }
}

export default ExtraInfo;
