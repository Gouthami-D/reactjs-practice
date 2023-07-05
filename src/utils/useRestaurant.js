import React,{useState,useEffect} from 'react'
import { MENU_API_URL} from './constants'

const useRestaurant = (id) => {
  const[resInfo,setResInfo]=useState([])
  const[menuItem,setMenuItem]=useState([])

  useEffect(()=>{
    fetchMenu()
 },[])

 const fetchMenu = async() =>{
  const data= await fetch(MENU_API_URL+id)
  const json =await data.json()
  // console.log(json.data);

  const hotelData=json?.data?.cards[0]?.card?.card?.info;

  const menuList=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  setMenuItem(menuList)

  setResInfo(hotelData)
  
  // console.log(menuList,"menu");   

}

return [resInfo,menuItem]

}

export default useRestaurant
