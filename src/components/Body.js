import React, { useEffect, useState } from 'react'
import { resList } from '../utils/Data'
import FoodCards from './FoodCards'
import SkeletonCard from './SkeletonCard'
import {Link} from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus'
import offline from '../assets/image/offline.jpg'

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("")

    useEffect(() => {
        setTimeout(() => {
            fetchData()
        }, "1000");
        // console.log("useEffect called")
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(data)
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards) //optional chaining
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards) 
    }

    const onChangeHandler = (e) =>{
        setSearchRestaurant(e.target.value)
    }

    const onClickSearch = () =>{
      console.log(searchRestaurant,"here")
      const data =   restaurantList?.filter((filteredres) => filteredres.data.name.toLowerCase().includes(searchRestaurant.toLowerCase()))
     if(data) {
        setFilteredRestaurant(data)
      }
     
    }
    // if(restaurantList == 0){
    //     const shimmerCards=Array.from({ length: 12 }, (_, index) => <Shimmer key={index} />)
    //     return <div className='d-flex flex-wrap'>{shimmerCards}</div>
    // }

        const online= useOnlineStatus();

        if(online == false)
        return(
            <>
              <h1 className='text-danger text-center'>Looks like you are offline !!</h1>
              {/* <img src={offline}/> */}
              </>
        )


    return (
        <>
            {
                restaurantList == 0 ?
                    //  <div className='d-flex flex-row flex-wrap'><Shimmer noOfcount={10} /></div> :
                    <SkeletonCard count={100} /> :

                    <div>
                        <div class="d-flex align-items-start">
                            <div class="d-flex m-2">
                                <input type="text" className='form-control' placeholder="Search restaurant" value={searchRestaurant}   onChange={(e) =>onChangeHandler(e)} />
                                <button type="button" class="btn btn-primary" onClick={onClickSearch} >Search</button>

                            </div>

                            <div className='ms-auto'>
                                <button type="button" class="btn btn-primary m-2" onClick={() => {
                                    const filteredList = restaurantList?.filter((singlerestaurant) => singlerestaurant?.data?.avgRating > 4);
                                    console.log(filteredList, "reslist")
                                    // console.log("button cliked")
                                    setFilteredRestaurant(filteredRestaurant)
                                }
                                }
                                >
                                    Top rated restaurants</button></div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {filteredRestaurant?.map((restaurantcard) => (
                                    <FoodCards key={restaurantcard.data.id} resData={restaurantcard} />
                                ))
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Body
