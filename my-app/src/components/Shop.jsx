import React, { useState } from 'react';
import { FaMedal } from "react-icons/fa6";
import { GiDiamondTrophy } from "react-icons/gi";
import { PiMedalFill } from "react-icons/pi";
import { BsTrophyFill } from "react-icons/bs";
import { GiStaryu } from "react-icons/gi";
import { supabase } from '../lib/Supabase'; // Correct import


const Shop = ({
  points, 
  getPoints
}) => { 
  const [boughtItems, setBoughtItems] = useState([]); 
  const [isShopOpen, setIsShopOpen] = useState(false); // Add state for shop visibility


  const [message, setMessage] = useState(null); 

  const bronzeIcon = (
    <span className='text-amber-700'>
      <FaMedal size={68} className='pt-2'/>
    </span>
  )
  const silverIcon = (
    <span className='text-slate-400'>
      <PiMedalFill />
    </span>
  )
  const goldIcon = (
    <span className='text-yellow-400'>
      <BsTrophyFill size={70} className='pt-2'/>
    </span>
  )
  const emeraldIcon = (
    <span className='text-emerald-500'>
      <GiStaryu />
    </span>
  )
  const diamondIcon = (
    <span className='text-sky-500'>
      <GiDiamondTrophy />
    </span>
  )
    
  const items = [    
    { id: 100, name: 'Bronze', price: 10, description: "Rookie", icon: bronzeIcon }, 
    { id: 200, name: 'Silver', price: 20, description: "Novice", icon: silverIcon }, 
    { id: 300, name: 'Gold', price: 30, description: "Rising Star", icon: goldIcon}, 
    { id: 400, name: 'Emerald', price: 40, description: "Icon", icon: emeraldIcon},
    { id: 500, name: 'Diamond', price: 50, description: "GOAT", icon: diamondIcon} 
  ]; 

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(null), 3000);
  };

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

      setBoughtItems([...boughtItems, item]);

      getPoints(remainingPoints); // Sync points with Header
      if (item.id === 500) { 
        showMessage("YOU ARE THE GOAT 🐐 !!!")
      }
      else { 
        showMessage(`YOU ARE A ${item.description} !!!`);
    }

    } else {
      showMessage("❌ Not enough points!");
    }
  };

  // Toggle shop open/close
  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
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
          className="mt-4 shadow-lg shadow-cyan-800/50 w-full rounded-full text-white font-md bg-gradient-to-r from-cyan-800 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center"
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
          <p className="text-lg font-bold whitespace-nowrap">Points: {points}</p>
          <button 
            onClick={toggleShop} 
            className="shadow-lg shadow-cyan-800/50 w-full rounded-full text-white font-md bg-gradient-to-r from-cyan-800 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center"
          >
            {isShopOpen ? "Close Shop" : "Open Shop"}
          </button>
        </div>
      </div>

      {isShopOpen && (
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

      {/* Display message pop-up */}
      {message && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md shadow-lg">
          {message}
        </div>
      )}
    </div>
  );
};

export default Shop;
