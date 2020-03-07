import React from "react";
import "./styles.css";
import BookMgmt from "./BookMgmt";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import Books from "./components/bookList";
import { string } from "prop-types";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  handleToggle = () => {
    const currToggle = this.state.toggle === false ? true : true;
    this.setState({
      toggle: currToggle
    });
  };

  updateCards = () => {
    let cards = ["eftpos", "asfdsdg"];
    const cardName = "eftpos";
    const foundCards = cards.filter(card => String(card).startsWith(cardName));
    if (foundCards && foundCards[0]) {
      const index = cards.indexOf(foundCards[0]);
      //cards[index] = cardName + " - savings";
      // cards.splice(index, 1);
    }

    return cards;
  };

  render() {
    return (
      <Router>
        <div className="container">
          <h1>Welcome to Ezhil Library {this.updateCards()}</h1>
          <button id="manageBooks" onClick={this.handleToggle}>
            Manage Books
          </button>
          <div>{this.state.toggle ? <BookMgmt /> : ""}</div>

          <Switch>
            <Route exact path="/create" component={AddBook} />
            <Route exact path="/edit/:bookId" component={EditBook} />
            <Route exact path="/all" component={Books} />
          </Switch>
        </div>
      </Router>
    );
  }
}
