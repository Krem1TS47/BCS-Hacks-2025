import React, { useState, useEffect } from 'react';
import { CiMedal } from "react-icons/ci";
import { FaMedal } from "react-icons/fa6";
import { RiMedal2Line } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import { GiDiamondTrophy } from "react-icons/gi";
import fetchPoints from '../actions/fetchPoints'; // Keep this for fetching points
import insertPoints from '../actions/insertPoints'; // Add function to insert/update points
import { supabase } from '../lib/Supabase'; // Correct import

const Shop = () => { 
  const [boughtItems, setBoughtItems] = useState([]); 
  const [points, setPoints] = useState(0);
  const [shopOpen, setShopOpen] = useState(false);

  const items = [ 
    { id: 100, name: 'Bronze', price: 10, description: "Rookie", icon: <CiMedal /> }, 
    { id: 200, name: 'Silver', price: 20, description: "Novice", icon: <FaMedal />}, 
    { id: 300, name: 'Gold', price: 30, description: "Rising Star", icon: <RiMedal2Line />}, 
    { id: 400, name: 'Emerald', price: 40, description: "Icon", icon: <IoTrophyOutline />},
    { id: 500, name: 'Diamond', price: 50, description: "GOAT", icon: <GiDiamondTrophy />} 
  ]; 

  useEffect(() => {
    getPoints();
  }, []);

  async function getPoints() {
    const currentPoints = await fetchPoints(); // Fetch points from database
    setPoints(currentPoints); // Update state with fetched points
  }

  const handleBuyNow = async (item) => {
    if (points >= item.price) {
      const remainingPoints = points - item.price;

      // Update the points in the database after purchase
      const { error } = await supabase
        .from('points')
        .update({ counter: remainingPoints })
        .eq('id', 1);

      if (error) {
        console.log("Error updating points:", error);
        return;
      }

      // Update local state
      setBoughtItems([...boughtItems, item]);
      setPoints(remainingPoints); // Sync points with Header
      console.log("Item Purchased!");
    } else {
      console.log("Not enough points!");
    }
  };

  const toggleShop = () => {
    setShopOpen(!shopOpen);
  };


  // Item component inside Shop.jsx
  function Item({ name, price, icon, description, onBuyNow }) {
    return (
      <div className="border border-gray-300 p-4 m-4 rounded-lg w-48 text-center bg-gray-50">
        <div className="flex justify-center items-center text-7xl mb-4">
          {icon} 
        </div>
        <h2 className="text-lg font-bold">{name}</h2>
        <h3 className="text-lg font-sans">{description}</h3> 
        <p className="text-sm">Price: {price} pts</p>
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
        <div className="flex items-center gap-4">
            <div className="flex justify-center">

            <button 
            onClick={toggleShop} 
            className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-500"
          >
            {shopOpen ? "Close Shop" : "Open Shop"}
          </button>

            </div>
        
          <p className="text-lg font-bold">Points: {points}</p>
        </div>
      </div>

      {shopOpen && (
        <div className="flex flex-wrap justify-center">
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
      )}

      {boughtItems.length > 0 && (
        <div className="mt-8 border-t border-gray-300 pt-4">
          <h2 className="text-2xl font-semibold">Purchased Items</h2>
          <ul className="flex flex-wrap justify-start gap-4">
            {boughtItems.map((item, index) => (
              <li key={index} className="mt-2 text-9xl font-bold flex-shrink-0 w-1/4">
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Shop;