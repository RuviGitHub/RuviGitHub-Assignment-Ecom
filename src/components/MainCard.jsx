import React from "react";

const MainCard = ({
  image,
  name,
  price,
  availableDishes,
  description,
  onOrder,
}) => {
  return (
    <div className="relative flex w-72 h-[440px] border items-center">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-36 w-36">
        <img
          src={image}
          alt={name}
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="bg-navy_blue mt-10 w-full h-[360px] rounded-lg overflow-hidden shadow-lg">
        <div className="p-4 mt-20 text-center">
          <h2 className="text-white text-lg font-semibold mb-2">{name}</h2>
          <p className="text-green-500 text-xl font-bold mb-2">
            ${price.toFixed(2)}
          </p>
          <p className="text-ash text-sm mb-2">
            {availableDishes} Bowls available
          </p>
          <p className="text-white text-sm mb-4">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <button
          onClick={onOrder}
          className="
          text-white
          bg-base
          rounded-full
          border
          border-base
          hover:bg-background
          hover:text-base
          focus:outline-none
          focus:ring-.5
          focus:ring-base
          w-28 
          h-8
          ease-in-out
        "
        >
          <span className="font-regular">Order Now</span>
        </button>
      </div>
    </div>
  );
};

export default MainCard;
