import React, { useState } from 'react';
import { CiMedal } from "react-icons/ci";
import { FaMedal } from "react-icons/fa6";
import { RiMedal2Line } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import { GiDiamondTrophy } from "react-icons/gi";
import fetchPoints from '../actions/fetchPoints';
import { BsTrophyFill } from "react-icons/bs";
import { GiStaryu } from "react-icons/gi";
import { PiMedalFill } from "react-icons/pi";


const Shop = () => { 
    const [boughtItems, setBoughtItems] = useState([]); 
      
    const bronzeIcon = (
      <span className='text-amber-700'>
        {/* <CiMedal size={80}/>  */}
        <FaMedal size={68} className='pt-2'/>
      </span>
    )
    const silverIcon = (
      <span className='text-slate-400'>
        {/* <FaMedal size={66} className='pt-2'/> */}
        <PiMedalFill />
      </span>
    )
    const goldIcon = (
      <span className='text-yellow-400'>
        {/* <RiMedal2Line /> */}
        <BsTrophyFill size={70} className='pt-2'/>
      </span>
    )
    const emeraldIcon = (
      <span className='text-emerald-500'>
        {/* <BsTrophyFill size={60}/> */}
        <GiStaryu />
      </span>
    )
    const diamondIcon = (
      <span className='text-sky-500'>
        <GiDiamondTrophy />
      </span>
    )
    
    const items = [ 
        // { id: 100, name: 'Bronze', price: 10, description: "Rookie", icon: <CiMedal size={80}/> }, 
        // { id: 200, name: 'Silver', price: 20, description: "Novice", icon: <FaMedal size={66} className='pt-2'/>}, 
        // { id: 300, name: 'Gold', price: 30, description: "Rising Star", icon: <RiMedal2Line />}, 
        // { id: 400, name: 'Emerald', price: 40, description: "Icon", icon: <IoTrophyOutline />},
        // { id: 500, name: 'Diamond', price: 50, description: "GOAT", icon: <GiDiamondTrophy />} 
        { id: 100, name: 'Bronze', price: 10, description: "Rookie", icon: bronzeIcon }, 
        { id: 200, name: 'Silver', price: 20, description: "Novice", icon: silverIcon }, 
        { id: 300, name: 'Gold', price: 30, description: "Rising Star", icon: goldIcon}, 
        { id: 400, name: 'Emerald', price: 40, description: "Icon", icon: emeraldIcon},
        { id: 500, name: 'Diamond', price: 50, description: "GOAT", icon: diamondIcon} 
    ]; 

    const handleBuyNow = async (item) => {

        // const currPoints = await fetchPoints(); 

        const currPoints = 25; 

        if (currPoints > item.price) { 

            const remaining = currPoints - item.price; 


            // const {error} = await Supabase 
            //     .from('points')
            //     .update({ counter: remaining })
            //     .eq('id', 1); 

            // if (error) { 
            //     console.log("ERROR"); 
            //     return; 
            // }
            
            setBoughtItems([...boughtItems, item]);
            console.log("Item Purchased!"); 
        }
        else { 
            console.log("Not enough points!"); 
        }

    }

    // Item component inside Shop.jsx
    function Item({ name, price, icon, description, onBuyNow }) {
      return (
        <div className="border border-gray-300 p-4 m-4 rounded-lg w-48 text-center bg-gray-50 shadow-black/10 shadow-lg">
          <div className="flex justify-center items-center text-7xl mb-4">
            {icon} 
          </div>
          <h2 className="text-lg font-bold">{name}</h2>
          <h3 className="text-lg font-sans">{description}</h3> 
          <p className="text-sm">Price: {price} pts</p>
          {/* <button 
            onClick={onBuyNow} 
            className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-500"
          >
            Buy Now
          </button> */}
          <button 
            type="button" 
            onClick={onBuyNow} 
            className="shadow-lg shadow-cyan-700/50 mt-4 w-full rounded-full text-white font-md bg-gradient-to-r from-cyan-800 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center"
          >
            Buy Now
          </button>
        </div>
      );
    }

    return (
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Shop</h1>
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
              <ul className = "flex flex-wrap justify-start space-x-4 gap-4"> 
                {boughtItems.map((item, index) => (
                  <h1 key={index} className="mt-2 text-9xl font-bold flex-shrink-0 w-1/4">
                    {item.icon}
                  </h1>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
};

export default Shop;