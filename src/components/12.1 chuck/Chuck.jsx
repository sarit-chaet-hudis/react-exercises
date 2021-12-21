import React from "react";
import axios from "axios";
import "./chuck.css";

class Chuck extends React.Component {
  state = {
    jokeDisplay: "joke.",
    catList: [],
  };

  async componentDidMount() {
    const list = await axios.get("https://api.chucknorris.io/jokes/categories");
    this.setState({ catList: list.data });
  }

  async getJoke() {
    const joke = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(joke.data.value);
    this.setState({ jokeDisplay: joke.data.value });
  }

  getCategoryJoke = async (e) => {
    console.log(`inside get cat joke. e.taret.key is ${e.target.textContent}`);
    const joke = await axios.get(
      "https://api.chucknorris.io/jokes/random?category=" + e.target.textContent
    );
    this.setState({ jokeDisplay: joke.data.value });
  };

  render() {
    return (
      <>
        <h3>Select category to show joke:</h3>
        {this.state.catList.map((cat) => {
          return (
            <button key={cat} onClick={(e) => this.getCategoryJoke(e)}>
              {cat}
            </button>
          );
        })}
        <h3>or..</h3>
        <button onClick={() => this.getJoke()}>Get Random Joke!</button>
        {this.catButtons}
        <p id="displayJoke">{this.state.jokeDisplay}</p>
      </>
    );
  }
}

export default Chuck;
