import React, { useState } from 'react';
import { CiMedal } from "react-icons/ci";
import { FaMedal } from "react-icons/fa6";
import { RiMedal2Line } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import { GiDiamondTrophy } from "react-icons/gi";

const Shop = () => { 
    const [boughtItems, setBoughtItems] = useState([]); 
      

    const items = [ 
        { id: 100, name: 'Bronze', price: 1, description: "You are a rookie!", icon: <CiMedal /> }, 
        { id: 200, name: 'Silver', price: 2, description: "You are a rising star!", icon: <FaMedal />}, 
        { id: 300, name: 'Gold', price: 3, description: "You are an icon!", icon: <RiMedal2Line />}, 
        { id: 400, name: 'Emerald', price: 4, description: "Reaching the GOAT status", icon: <IoTrophyOutline />},
        { id: 500, name: 'Diamond', price: 5, description: "GOAT", icon: <GiDiamondTrophy />} 
    ]; 

    const handleBuyNow = (item) => {
        setBoughtItems([...boughtItems, item]);
    };

    // Item component inside Shop.jsx
    function Item({ name, price, icon, description, onBuyNow }) {
      return (
        <div className="border border-gray-300 p-4 m-4 rounded-lg w-48 text-center bg-gray-50">
          <div className="text-4xl mb-4">
            {icon} 
          </div>
          <h2 className="text-lg font-bold">{name}</h2>
          <h3 className="text-lg font-sans">{description}</h3> 
          <p className="text-sm">Price: ${price}</p>
          <button 
            onClick={onBuyNow} 
            className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-500"
          >
            Buy Now
          </button>
        </div>
      );
    }

    return (
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Shop</h1>
          </div>

          <div className="flex flex-wrap justify-center">
            {/* Map over the items array and display each item */}
            {items.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                price={item.price}
                icon={item.icon}
                description={item.description}
                onBuyNow={() => handleBuyNow(item)}
              />
            ))}
          </div>
    
          {boughtItems.length > 0 && (
            <div className="mt-8 border-t border-gray-300 pt-4">
              <h2 className="text-2xl font-semibold">Purchased Items</h2>
              <ul>
                {boughtItems.map((item, index) => (
                  <li key={index} className="mt-2 text-lg">
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
};

export default Shop;