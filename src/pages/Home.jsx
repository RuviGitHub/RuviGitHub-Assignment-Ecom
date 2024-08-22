import React, { useState } from "react";
import FillButton from "../components/FillButton";
import Header from "../components/Header";
import MyFooter from "../components/MyFooter";
import { SearchOutlined } from "@ant-design/icons";
import { Col, Row, Input, Form, Button } from "antd";
import {
  CheckCircleOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import MainCard from "../components/MainCard";
import { Link } from "react-router-dom";

const { TextArea } = Input;

const Home = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values: ", values);
  };
  const [dishes, setDishes] = useState([
    {
      index: 1,
      image: "src/assets/images/dish-1.png",
      name: "Spaghetti Carbonara",
      price: 12.99,
      availableDishes: 15,
      description: "Classic Italian pasta with creamy sauce and pancetta.",
      category: "Pasta",
    },
    {
      index: 2,
      image: "src/assets/images/dish-2.png",
      name: "Margherita Pizza",
      price: 8.99,
      availableDishes: 25,
      description: "Fresh mozzarella, tomatoes, and basil on a crispy crust.",
      category: "Pizza",
    },
    {
      index: 3,
      image: "src/assets/images/dish-3.png",
      name: "Cheeseburger Deluxe",
      price: 10.99,
      availableDishes: 30,
      description: "Juicy beef patty with cheddar, lettuce, tomato, and pickles.",
      category: "Burger",
    },
    {
      index: 4,
      image: "src/assets/images/dish-4.png",
      name: "Chicken Fried Rice",
      price: 9.99,
      availableDishes: 20,
      description: "Stir-fried rice with chicken, vegetables, and soy sauce.",
      category: "Fried Rice",
    },
    {
      index: 5,
      image: "src/assets/images/dish-5.png",
      name: "Pad Thai",
      price: 11.99,
      availableDishes: 18,
      description: "Rice noodles stir-fried with shrimp, eggs, and peanuts.",
      category: "Noodles",
    },
    {
      index: 6,
      image: "src/assets/images/dish-6.png",
      name: "Tandoori Chicken",
      price: 14.99,
      availableDishes: 10,
      description: "Spicy marinated chicken roasted in a tandoor oven.",
      category: "Indian",
    },
    {
      index: 7,
      image: "src/assets/images/dish-7.png",
      name: "Fish Tacos",
      price: 9.99,
      availableDishes: 22,
      description: "Crispy fish in soft tortillas with cabbage slaw and lime crema.",
      category: "Mexican",
    },
    {
      index: 8,
      image: "src/assets/images/dish-8.png",
      name: "Beef Stroganoff",
      price: 13.99,
      availableDishes: 12,
      description: "Tender beef strips in a creamy mushroom sauce over noodles.",
      category: "Russian",
    },
]);
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-between bg-background w-full max-w-full">
        <Header />
        <main className="w-full max-w-full overflow-hidden flex-grow">
          <div className="flex flex-col-reverse xl:flex-row items-center justify-between px-6 py-12 xl:px-24 xl:py-24">
            {/* Left Side */}
            <div className="xl:w-1/2 flex flex-col items-center xl:items-start text-center xl:text-left">
              <h1 className="font-sans text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                We're <span className="text-baseColor">Serious</span> For
              </h1>
              <h1 className="font-sans text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-baseColor">Food</span> &{" "}
                <span className="text-yellow">Delivery.</span>
              </h1>

              <div className="w-full flex items-center mt-8">
                <Input
                  placeholder="Search Food ..."
                  prefix={<SearchOutlined />}
                  className="rounded-full border-baseColor py-2 px-4"
                />
              </div>

              <div className="mt-8">
                <FillButton onClick={() => console.log("Order Now clicked")}>
                  Order Now
                </FillButton>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="xl:w-1/2 flex justify-center xl:justify-end mt-12 xl:mt-0">
              <img
                src="src/assets/images/hero.png"
                alt="hero"
                className="w-full max-w-md xl:max-w-full"
              />
            </div>
          </div>
        </main>
        <section>
          <div className="bg-white py-12">
            <div className="container mx-auto">
              <Row gutter={[32, 32]} align="middle">
                {/* Left Side - Image */}
                <Col xs={24} md={12} className="flex justify-center">
                  <img
                    src="assets/images/chef.png"
                    alt="Chef"
                    className="max-w-full h-auto"
                  />
                </Col>

                {/* Right Side - Content */}
                <Col xs={24} md={12}>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    We are <span className="text-[#ea7c69]">more</span> than{" "}
                    <span className="text-yellow-500">ordinary</span> boutique
                  </h2>
                  <p className="text-gray-600 mt-4">
                    This is a type of restaurant which typically serves food and
                    drink, in addition to light refreshments such as baked goods
                    or snacks. The term comes from the French word meaning food.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center">
                      <CheckCircleOutlined className="text-[#ea7c69] text-xl mr-2" />
                      <span>Online Order</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleOutlined className="text-[#ea7c69] text-xl mr-2" />
                      <span>24/7 Service</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleOutlined className="text-[#ea7c69] text-xl mr-2" />
                      <span>Pre-Reservation Buffet</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleOutlined className="text-[#ea7c69] text-xl mr-2" />
                      <span>Cook With You</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleOutlined className="text-[#ea7c69] text-xl mr-2" />
                      <span>Super Chef</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleOutlined className="text-[#ea7c69] text-xl mr-2" />
                      <span>Clean Kitchen</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <FillButton
                      onClick={() => console.log("Order Now clicked")}
                    >
                      Order Now
                    </FillButton>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        {/* Signature */}
        <section className="bg-background py-12 flex flex-col justify-center items-center my-8">
          <h1 className="font-sans text-4xl md:text-5xl xl:text-6xl font-bold leading-tight m-4">
            Our <span className="text-baseColor">Signature</span> Dishes
          </h1>
          <p className="text-body-sm font-sans font-regular">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
          <p className="text-body-sm font-sans font-regular">
            industry's standard dummy text ever since the 1500s
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
            {dishes.map((dish, index) => (
              <MainCard
                key={index}
                image={dish.image}
                name={dish.name}
                price={dish.price}
                availableDishes={dish.availableDishes}
                description={dish.description}
                onOrder={() => {
                  <Link to="/taste">Taste</Link>;
                }}
              />
            ))}
          </div>
        </section>
        <section>
          <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
              <Row gutter={[32, 32]}>
                {/* Contact Form */}
                <Col xs={24} md={12}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Contact Us
                  </h2>
                  <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <Input placeholder="Your Name" />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "email",
                          message: "Please enter a valid email",
                        },
                      ]}
                    >
                      <Input placeholder="Your Email" />
                    </Form.Item>
                    <Form.Item
                      name="message"
                      label="Message"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your message",
                        },
                      ]}
                    >
                      <TextArea rows={4} placeholder="Your Message" />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-[#ea7c69] border-none"
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>

                {/* Contact Details */}
                <Col xs={24} md={12} className="flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                    <p className="text-gray-600">
                      <EnvironmentOutlined className="text-[#ea7c69] mr-2" />
                      1234 Street Name, City, Country
                    </p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <PhoneOutlined className="text-[#ea7c69] mr-2" />
                      +123 456 7890
                    </p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">
                      <MailOutlined className="text-[#ea7c69] mr-2" />
                      info@yourdomain.com
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </div>
      <MyFooter />
    </>
  );
};

export default Home;
