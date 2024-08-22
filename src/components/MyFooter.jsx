import React from "react";
import { Input, Button, Image } from "antd";


const MyFooter = () => {
  return (
    <footer className="bg-gray-100 border border-black w-full">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 pr-4 mb-8 md:mb-0">
            <h3 className="text-orange-600 text-lg font-bold">MimZy Food</h3>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              libero viverra dapibus odio sit malesuada in quis. Arcu tristique
              elementum viverra integer id.
            </p>
            <div className="mt-6 flex space-x-4">
            <img src="src/assets/images/social.png" alt="social" />
            </div>
          </div>

          {/* Opening Hours */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <p className="text-gray-600 mt-2">Sat-Wed: 09:00am-10:00PM</p>
            <p className="text-gray-600 mt-2">Thursday: 09:00am-11:00PM</p>
            <p className="text-gray-600 mt-2">Friday: 09:00am-8:00PM</p>
          </div>

          {/* User Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold">User Links</h4>
            <p className="mt-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Shop Now
              </a>
            </p>
            <p className="mt-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Contact
              </a>
            </p>
            <p className="mt-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                About Us
              </a>
            </p>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="text-gray-600 mt-2">1234 Country Club Ave</p>
            <p className="text-gray-600 mt-2">NC 123456, London, UK</p>
            <p className="text-gray-600 mt-2">+0123 456 7891</p>
            <div className="mt-6 flex flex-wrap justify-center">
              <Input.Group compact>
                <Input
                  style={{ width: "calc(100% - 40px)" }}
                  placeholder="Enter your email"
                />
                <Button
                  type="primary"
                  className="float-right"
                  style={{
                    backgroundColor: "#e67e22",
                    borderColor: "#e67e22",
                  }}
                >
                  →
                </Button>
              </Input.Group>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-4 border-t border-gray-300 text-center text-gray-600"
        >
          <p>
            Copyright © 2022 MimZy Food. Engineered by Cenzios IT Solutions Pvt
            Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
