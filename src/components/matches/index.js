import React from "react";
import Label from "../utils/label";
import ListOfMatches from "./ListOfMatches";

const Matches = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Label bck="#0e1731" size="50px" color="#fff">
          {" "}
          Matches
        </Label>
        <ListOfMatches />
        <Label bck="#fff" size="30px" color="#0e1731" link="/matches">
          {" "}
          More Matches ...
        </Label>
      </div>
    </div>
  );
};
export default Matches;
