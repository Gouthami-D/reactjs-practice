import React, { useEffect, useState } from 'react'
import { resList } from '../utils/Data'
import FoodCards from './FoodCards'
import SkeletonCard from './Shimmer'

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetchData()
          }, "5000");
        // console.log("useEffect called")
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(data)
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards) //optional chaining
    }

    // if(restaurantList == 0){
    //     const shimmerCards=Array.from({ length: 12 }, (_, index) => <Shimmer key={index} />)
    //     return <div className='d-flex flex-wrap'>{shimmerCards}</div>
    // }

    return (
        <>
            {
                restaurantList == 0 ?
                    //  <div className='d-flex flex-row flex-wrap'><Shimmer noOfcount={10} /></div> :
                    <SkeletonCard/>:
                    
                    <div>
                        <button type="button" class="btn btn-primary m-2" onClick={() => {
                            const filteredList = restaurantList?.filter((singlerestaurant) => singlerestaurant.data.avgRating > 4);
                            console.log(filteredList, "reslist")
                            // console.log("button cliked")
                            setRestaurantList(filteredList)
                        }
                        }
                        >
                            Top rated restaurants</button>
                        <div className="container">
                            <div className="row">
                                {restaurantList?.map((restaurantcard) => (
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
