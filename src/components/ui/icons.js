import React from "react";
import { Link } from "react-router-dom";
import teamLogo from "../../images/logos/manchester_city_logo.png";

export const TeamLogo = props => {
  const logoTemplate = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${teamLogo}) no-repeat`
      }}
    />
  );
  if (props.link) {
    return <Link to={props.link}>{logoTemplate}</Link>;
  } else {
    return logoTemplate;
  }
};
