import React, { Component } from "react";
import { getAllMatches } from "../../firebase";
class Matches extends Component {
  state = {
    matches: []
  };
  showMatches = () => <div> List of Matches...</div>;
  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}
export default Matches;
