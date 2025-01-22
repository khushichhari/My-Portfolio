import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined"; // Import the MenuBookOutlined icon
import "./styles/Header.css";

const Header = () => {

    const [active, setActive] = useState(false);

    const showMenu = () =>{
        setActive(!active);
    }


  return (
    <div className="header">
      <div className="header-logo">
        <h1>Khushi Chhari</h1>
      </div>

      <nav>
        <ul>
          <div className="closed">
            <CloseIcon className="close" onClick = {showMenu}/>
          </div>

          <li>
            <Link to="/"><b>Home</b></Link>
          </li>
          <li>
            <Link to="/about"><b>About</b></Link>
          </li>
          <li>
            <Link to="/portfolio"><b>Portfolio</b></Link>
          </li>
          <li>
            <Link to="/blogs"><b>Blogs</b></Link>
          </li>
          <li>
            <Link to="/contact"><b>Contact</b></Link>
          </li>
        </ul>
      </nav>

      <div className="changer">
        <MenuBookOutlined className="menu" onClick={showMenu}/>
      </div>
    </div>
  );
};

export default Header;


