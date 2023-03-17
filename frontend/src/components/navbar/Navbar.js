import * as React from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import StorageIcon from "@mui/icons-material/Storage";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/">
            <img
              className="logo"
              src="https://i.ibb.co/WxgK00c/eylg-removebg-preview.png"
              alt="Logo"
            />
          </Link>

          <Link to="maintenance">
            <div className="topbarIconsContainer leftIconsNav">
              <EngineeringIcon className="uiIcon" /> Maintenance
            </div>
          </Link>
          <Link to="climat">
            <div
              className="topbarIconsContainer leftIconsNav"
              id="climatContainer"
            >
              <AcUnitIcon className="uiIcon" /> Climat
            </div>
          </Link>

          <Link to="stock">
            <div className="topbarIconsContainer leftIconsNav adminStock">
              <StorageIcon className="uiIcon" /> Stock
            </div>
          </Link>

          <Link to="parking">
            <div className="topbarIconsContainer leftIconsNav">
              <DirectionsCarFilledIcon className="uiIcon" /> Parking
            </div>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer rightIcons">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer rightIcons">
            <LanguageIcon />
          </div>
          <Link to="signInUp">
            <div className="topbarIconsContainer rightIcons">
              <AccountCircleIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
