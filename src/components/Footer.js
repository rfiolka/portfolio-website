import React from "react";
import GithubIcon from '@material-ui/icons/GitHub'
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/rfiolka" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2022 Roksana Fiołka</p>
      <p>roksana.fiolka@icloud.com</p>
    </div>
  );
}

export default Footer;
