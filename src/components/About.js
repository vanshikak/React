import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent ComponentDidMount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste React web series</h2>
        <UserClass name={"Vanshika (class)"} location={"Bangalore (class)"} />
      </div>
    );
  }
}

export default About;
