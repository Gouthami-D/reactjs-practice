import React from "react";
import { CDN_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const FoodCards = (props) => {
    const {resData}= props;
    const {cloudinaryImageId,name,cuisines,costForTwoString,avgRating,deliveryTime,id}=resData.data
    console.log(id,"id")
    return (
      <div className="explore-menu-section col-sm-12 col-md-3">
      <div className="container">
          <div className="row">
              <div className="">
                  <div className="shadow menu-item-card p-3 mb-3">
                    <Link  to={"restaurant/"+id}>
                           <img src={CDN_IMAGE_URL+cloudinaryImageId} className="image-card img-fluid w-100" />
                    </Link>
                      <h2 className="restaurant-name">{name}</h2>
                      {/* <h1 className="menu-title">{resObj.data.}</h1> */}
                      <h1 className="cuisine">{cuisines.join(", ")}</h1>                     
                      <h6 className="restaurant-name">{costForTwoString.toLowerCase()}</h6>
                      <h6 className="rating">{deliveryTime} minutes</h6>
                            <div className="rating d-flex align-items-baseline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                                
                            <h6 className="m-1">{avgRating} rating</h6>
                           
                    </div>
                      <a className="menu-item-link">View All</a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#d0b200" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg>
                     
              </div>
              </div>
            </div>
          </div>
      </div>
      
    )
  }

export default FoodCards