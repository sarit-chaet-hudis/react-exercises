import React from "react";
import axios from "axios";

class Avatars extends React.Component {
  state = { list: [] };

  async componentDidMount() {
    const promises = [];
    for (let i = 0; i < 20; i++) {
      promises.push(
        axios.get("https://randomuser.me/api/", {
          dataType: "json",
          success: function (data) {
            console.log(data);
          },
        })
      );
    }
    const users = await Promise.all(promises);

    console.log(users);
    //list.data.results[0].name.first);
  }

  renderAvatars() {
    console.log("rendeing avaatars");
  }

  render() {
    return <>{this.renderAvatars()}</>;
  }
}

export default Avatars;
