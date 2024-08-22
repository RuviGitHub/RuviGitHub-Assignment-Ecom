import React, { useContext, useState, useEffect } from "react";
import { Input, Slider, Select, Radio, Pagination } from "antd";
import MainCard from "../components/MainCard"
import Header from "../components/Header";
import MyFooter from "../components/MyFooter";
// import { GeneralContext } from "../../context/GeneralContext";

const { Option } = Select;

const Taste = () => {
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
//   const { dishes } = useContext(GeneralContext);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100]);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8); // Number of items per page

  useEffect(() => {
    // Filter and search logic
    let updatedDishes = dishes;

    if (searchTerm) {
      updatedDishes = updatedDishes.filter((dish) =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      updatedDishes = updatedDishes.filter((dish) =>
        selectedCategories.includes(dish.category)
      );
    }

    updatedDishes = updatedDishes.filter(
      (dish) => dish.price >= selectedPriceRange[0] && dish.price <= selectedPriceRange[1]
    );

    // Pagination logic
    const totalDishes = updatedDishes.length;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setFilteredDishes(updatedDishes.slice(startIndex, endIndex));
  }, [dishes, searchTerm, selectedCategories, selectedPriceRange, selectedSize, currentPage]);

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-between bg-background w-full max-w-full ">
        <Header />

        <section className="bg-white p-12 flex flex-row w-full">
          {/* Filters Sidebar */}
          <div className="w-1/4 flex flex-col p-4 border-r border-gray-200">
            <h3 className="text-xl font-bold mb-6">Filters</h3>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Price</h4>
              <Slider
                range
                value={selectedPriceRange}
                onChange={(value) => setSelectedPriceRange(value)}
                min={0}
                max={100}
                tooltipVisible
              />
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Category</h4>
              <Select
                mode="multiple"
                allowClear
                value={selectedCategories}
                onChange={(value) => setSelectedCategories(value)}
                style={{ width: "100%" }}
                placeholder="Select categories"
              >
                <Option value="pizza">Pizza</Option>
                <Option value="burger">Burger</Option>
                <Option value="friedrice">Fried Rice</Option>
                <Option value="kottu">Kottu</Option>
                <Option value="noodles">Noodles</Option>
              </Select>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Size</h4>
              <Radio.Group
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <Radio value="small">Small</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="large">Large</Radio>
              </Radio.Group>
            </div>

            {/* Search */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Search</h4>
              <Input
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-3/4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
              {filteredDishes.map((dish, index) => (
                <MainCard
                  key={index}
                  image={dish.image}
                  name={dish.name}
                  price={dish.price}
                  availableDishes={dish.availableDishes}
                  description={dish.description}
                  onOrder={() => {
                    console.log("Order Now clicked for", dish.name);
                  }}
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={dishes.length}
              onChange={(page) => setCurrentPage(page)}
              className="mt-8"
            />
          </div>
        </section>
      </section>
      <MyFooter />
    </>
  );
};

export default Taste;
