import React,{useState} from 'react'
import { resList } from '../utils/Data'
import FoodCards from './FoodCards'

const Body = () => {
    const[restaurantList,setRestaurantList]=useState(resList);
  return (
    <div>
        <button type="button" class="btn btn-primary m-2" onClick={()=>
            {
                const filteredList = restaurantList?.filter((singlerestaurant)=>singlerestaurant.data.avgRating > 4);
                console.log(filteredList,"reslist")
                // console.log("button cliked")
                setRestaurantList(filteredList)
            }

        } 
        
            >
                Top rated restaurants</button>
      <div className="container">
<div className="row">
 {restaurantList?.map((restaurantcard)=>(
   <FoodCards key={restaurantcard.data.id} resData={restaurantcard}/>
 ))
 }
  
</div>
</div>
    </div>
  )
}

export default Body
