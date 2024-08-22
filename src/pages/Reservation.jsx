import React, { useState } from "react";
import { Row, Col, Form, Input, Select, InputNumber, Button, Card, Tag } from "antd";
import { ClockCircleOutlined, UserOutlined, DollarOutlined, CalendarOutlined } from "@ant-design/icons";
import Header from "../components/Header";
import MyFooter from "../components/MyFooter";
const { Option } = Select;

const buffets = [
  {
    index: 1,
    name: "Lunch Buffet",
    time: "11:00AM - 02:00PM",
    features: [
      "Sri Lankan authentic foods with 32 curries",
      "Chinese set menu",
      "Spaghetti Noodles & Pasta",
      "Soup & Salad Corner",
      "Dessert Corner",
    ],
    price: "500 USD per head",
    days: "Everyday",
  },
  {
    index: 2,
    name: "Dinner Buffet",
    time: "07:30PM - 11:00PM",
    features: [
      "Thai rice corner",
      "Indian Biryani Corner",
      "Spaghetti Noodles & Pasta",
      "Street Food Corner",
      "Soup & Salad Corner",
      "Dessert Corner",
    ],
    price: "800 USD per head",
    days: "Everyday",
  },
  {
    index: 3,
    name: "High Tea Buffet",
    time: "04:00PM - 06:00PM",
    features: [
      "Bread & Butter Corner",
      "Snacks ",
      "Cakes",
      "Mini Pizza",
      "Soup & Salad Corner",
      "Hot & Cool Beverages",
    ],
    price: "300 USD per head",
    days: "Everyday",
  },
];

const branches = [
  { id: 1, name: "Downtown Branch" },
  { id: 2, name: "Uptown Branch" },
  { id: 3, name: "Seaside Branch" },
];

const Reservation = () => {
  const [selectedBuffet, setSelectedBuffet] = useState(null);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Exquisite Buffets</h2>
            <Row gutter={[24, 24]} justify="center">
              {buffets.map((buffet) => (
                <Col xs={24} md={8} key={buffet.index}>
                  <Card
                    hoverable
                    className={`h-full transition-all duration-300 ${
                      buffet.index === selectedBuffet
                        ? "border-[#ea7c69] border-2"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedBuffet(buffet.index)}
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-[#ea7c69]">{buffet.name}</h3>
                    <div className="flex items-center mb-4 text-gray-600">
                      <ClockCircleOutlined className="mr-2" />
                      <span>{buffet.time}</span>
                    </div>
                    <div className="flex items-center mb-4 text-gray-600">
                      <DollarOutlined className="mr-2" />
                      <span>{buffet.price}</span>
                    </div>
                    <div className="flex items-center mb-4 text-gray-600">
                      <CalendarOutlined className="mr-2" />
                      <span>{buffet.days}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-gray-700">Features:</h4>
                      <ul className="list-disc pl-5">
                        {buffet.features.map((feature, index) => (
                          <li key={index} className="text-gray-600 mb-1">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <Button type="primary" className="w-full bg-[#ea7c69] hover:bg-[#d66d5c] border-none">
                      Select This Buffet
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Make Your Reservation</h2>
            <Form
              form={form}
              name="reservation"
              onFinish={onFinish}
              layout="vertical"
              className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8"
            >
              <Form.Item
                name="customerName"
                label="Your Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                name="buffetType"
                label="Select Buffet"
                rules={[{ required: true, message: "Please select a buffet type" }]}
              >
                <Select>
                  {buffets.map((buffet) => (
                    <Option key={buffet.index} value={buffet.name}>
                      {buffet.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="numberOfPeople"
                label="Number of Guests"
                rules={[{ required: true, message: "Please enter number of people" }]}
              >
                <InputNumber min={1} max={20} className="w-full" />
              </Form.Item>
              <Form.Item
                name="branch"
                label="Choose Branch"
                rules={[{ required: true, message: "Please select a branch" }]}
              >
                <Select>
                  {branches.map((branch) => (
                    <Option key={branch.id} value={branch.name}>
                      {branch.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-[#ea7c69] hover:bg-[#d66d5c] border-none text-lg h-12"
                >
                  Confirm Reservation
                </Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </main>
      <MyFooter />
    </div>
  );
};

export default Reservation;