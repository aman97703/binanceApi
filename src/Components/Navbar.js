import React from "react";
import Logo from "../Images/Navlogo.png";
import { Drawer, IconButton } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";

const Navbar = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => {
    setState(open);
  };
  return (
    <div className="navbar_root">
      <div className="navbar_main">
        <span className="navbar_menu" onClick={() => toggleDrawer(true)}>
          <Menu htmlColor="#ffffff" />
        </span>
        <div className="navbar_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar_links navRes">
          <p className="active_link navbar_link">Trade</p>
          <p className="navbar_link">Earn</p>
          <p className="navbar_link">Support</p>
          <p className="navbar_link">About</p>
        </div>
        <button className="navBtn_wallet navRes">Connect wallet</button>
      </div>
      <Drawer anchor={"left"} open={state} onClose={() => toggleDrawer(false)}>
        <div className="navbar_drawer">
          <IconButton onClick={()=>toggleDrawer(false)} className="modal_closeBtn">
            <Close htmlColor="#fff" color="#ffffff" />
          </IconButton>
          <div className="navbar_logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navbar_links">
            <p className="active_link navbar_link">Trade</p>
            <p className="navbar_link">Earn</p>
            <p className="navbar_link">Support</p>
            <p className="navbar_link">About</p>
          </div>
          <button className="navBtn_wallet">Connect wallet</button>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
