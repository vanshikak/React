import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    //console.log("Child Constructor");
  }

  async componentDidMount() {
    //console.log("Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/vanshikak");
    const json = await data.json();

    this.setState({
        userInfo : json,
    });

    console.log(json);
  }
  render() {
    //console.log("Child Render");
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h2>Contact: 6303508255 </h2>
      </div>
    );
  }
}

export default UserClass;
