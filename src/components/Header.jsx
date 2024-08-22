import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Avatar, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import FillButton from "./FillButton";

const Header = () => {
  const [isLoggedIn] = useState(false);
  const user = {
    avatarUrl: "",
    name: "John Doe",
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="inquiry">
        <Link to="/inquiry">Inquiry</Link>
      </Menu.Item>
      <Menu.Item key="order-history">
        <Link to="/order-history">Order History</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-background w-full">
      <Row justify="space-between" align="middle" className="p-4">
        {/* Left - Logo */}
        <Col xs={12} sm={8} md={6}>
          <Link to="/">
            <img
              src="src/assets/images/logo.png" 
              alt="Logo"
              className="w-24 sm:w-28 md:w-36"
            />
          </Link>
        </Col>

        {/* Middle - Navigation */}
        <Col xs={0} sm={12} md={12} className="text-center">
          <nav className="flex justify-center space-x-4 text-black font-regular body-sm">
            <Link to="/signature" className="hover:text-baseColor">
              Unique With Us
            </Link>
            <Link to="/taste" className="hover:text-baseColor">
              Taste
            </Link>
            <Link to="/reservations" className="hover:text-baseColor">
              Reservations
            </Link>
            <Link to="/contact" className="hover:text-baseColor">
              Contact
            </Link>
          </nav>
        </Col>

        {/* Right - Login/Profile */}
        <Col xs={12} sm={4} md={6} className="text-right">
          <div className="flex justify-end items-center">
            {isLoggedIn ? (
              <Dropdown overlay={menu} trigger={["click"]}>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <Avatar
                    src={user?.avatarUrl || ""}
                    alt={user?.name || "Avatar"}
                  />
                  <DownOutlined className="text-black" />
                </div>
              </Dropdown>
            ) : (
              <Link to="/login">
                <FillButton onClick={() => console.log("Button clicked")}>
                  Sign in
                </FillButton>
              </Link>
            )}
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
