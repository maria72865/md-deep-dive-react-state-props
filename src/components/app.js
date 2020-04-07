import React, { Component } from "react";
import JournalList from "./journal/journal_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className = "header">
          <i className="fas fa-blog"></i>
          <h1>My Blah Blah Blog</h1>
        </div>

        <JournalList className="journal_list" heading="Blah" />

        <JournalList heading="Blah Blah" />
      </div>
    );
  }
}