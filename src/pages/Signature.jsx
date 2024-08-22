import React, { useState } from "react";
import Header from "../components/Header";
import MyFooter from "../components/MyFooter";
import { Link } from "react-router-dom";
import MainCard from "../components/MainCard";

const Signature = () => {
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
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
      <MyFooter />
    </div>
  );
};

export default Signature;
