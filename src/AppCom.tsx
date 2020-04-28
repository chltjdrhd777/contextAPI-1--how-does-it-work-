import React, { Component } from "react";
import AppPresenter from "./App";
import store from "./Store";

//Provider can give me an access to the storage
//I can change the stored value like that
//To get and use this value, I can use store.consume

//note, if I use constructor, It means that I want to replace state with new one without no redundant code
//contex API is dependent on constructor. If I want to realize some function, it must be stored in constructor

class App extends Component {
  _changeMessage: () => void;
  state: { message: string; check: () => void };

  constructor(props: Readonly<{}>) {
    super(props);

    this._changeMessage = () => {
      if (this.state.message === "OK") {
        this.setState({ message: "Bye" });
      } else {
        this.setState({ message: "OK" });
      }
    };
    this.state = { message: "OK", check: this._changeMessage };
  }

  render() {
    return (
      <store.Provider value={this.state}>
        <AppPresenter />
      </store.Provider>
    );
  }
}

export default App;
