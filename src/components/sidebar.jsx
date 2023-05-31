import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {

  return (
    <>
      <Menu {...props}>
        <Link to='/' style={{ textDecoration: "none" }}>
          <p className="menu-item">
            Əsas Səhifə
          </p>
        </Link>
        <Link to='/allbook' style={{ textDecoration: "none" }}>
          <p className="menu-item">
            Bütün məhsullar
          </p>
        </Link>
        <Link to="/auth" style={{ textDecoration: "none" }}>
           <div className="d-flex align-items-center">
              <i class="fa-regular fa-user" style={{ color: "black" }}></i>
              <p style={{marginLeft:"10px",marginTop: "15px"}}>Login / Register</p>
            </div>
        </Link>
      </Menu>
    </>
  );
};
