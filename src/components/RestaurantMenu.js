import {useEffect,useState} from "react"
import SkeletonCard from "./SkeletonCard"
import { CDN_IMAGE_URL,MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

// whenever a API call is made through useEffect hook to display the data on the UI we use state variables(useState hook)
// We fetch the data from the api and we store it in a local state variable whenever the statevariable updates the UI upddates.****
const RestaurantMenu=()=>{
    const[resInfo,setResInfo]=useState([])
    const[menuItem,setMenuItem]=useState([])
    const {id} =useParams()
    // console.log(id,"param")

    // console.log(MENU_API_URL+id,"url");

    useEffect(()=>{
       fetchMenu()
    },[])

    const fetchMenu = async() =>{
        const data= await fetch(MENU_API_URL+id)
        const json =await data.json()
        console.log(json.data);

        const hotelData=json?.data?.cards[0]?.card?.card?.info;

        const menuList=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

        setMenuItem(menuList)

        setResInfo(hotelData)

        console.log(menuList,"menu");     
    }



    let {name,cuisines,costForTwoMessage,avgRating,cloudinaryImageId}=resInfo

    let {itemCards}=menuItem



    console.log(resInfo,"hotal");
    
    
    

    // const singleCardInfo =resInfo &&resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[3].card?.card?.categories[0].itemCards
    // const dataaaa = resInfo &&resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories[0].itemCards
    //     dataaaa.map((each)=>console.log(each.card.info.name))
    //     arrayname.map(()=>{

    //     })
    //   console.log(singleCardInfo,"resInfo")

    // const singleCardInfo=resInfo && resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    // let mappedData = []
    // singleCardInfo && singleCardInfo.forEach((each)=>{
    //     mappedData.push(each.card.info.name) 
    // })
    // console.log("mappedData",mappedData)



    //  const {name,cuisines,costForTwoMessage,avgRating,cloudinaryImageId} = resInfo && resInfo?.cards[0]?.card?.card?.info

    // const { itemCards } =resInfo &&
    // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    //  console.log(itemCards,"itemCard");

    //  console.log(singleCardInfo,"menuitem");
    // ,cuisines,costForTwoMessage,avgRating,cloudinaryImageId
    
     
    return(
        <>
        {resInfo ==null ? (<SkeletonCard/>):
    <div className="explore-menu-section col-sm-12 col-md-3">
       <div className="restaurant-menu">
        <div className="shadow menu-item-card p-3">
        <img src={CDN_IMAGE_URL+cloudinaryImageId} className="image-card img-fluid w-100" />
           <h2 className="restaurant-name">{name}</h2>
           <h1 className="cuisine">{cuisines?.join(",")}</h1>
           <h6 className="restaurant-name">{costForTwoMessage}</h6>
           <h6 className="rating">{avgRating}</h6>
           <h2>Menu</h2>
           <ul>
           {itemCards?.length >0 &&  itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
          
           </ul>
           </div>
        </div>
        </div>
}
        </>
    )
}
export default RestaurantMenu