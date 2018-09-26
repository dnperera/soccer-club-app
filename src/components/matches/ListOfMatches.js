import React, { Component } from "react";
import { getAllMatches } from "../../firebase";
import { getFilteredData, reverseData } from "../utils/firebaseMethods";
import MatchDetail from "./MatchDetail";
import Slide from "react-reveal/Slide";
class ListOfMatches extends Component {
  state = {
    matches: []
  };
  componentDidMount = () => {
    getAllMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = getFilteredData(snapshot);
        this.setState({
          matches: reverseData(matches)
        });
      });
  };

  showMatches = matches =>
    matches
      ? matches.map(match => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchDetail match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;
  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}
export default ListOfMatches;
