import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//Nested html elements creation 

// const parent= React.createElement("div",{id:"parent"}, 
// React.createElement("div",{id:"child"},[
//     React.createElement("h1",{id:"heading"},"I am heading tag"),
//     React.createElement("h2",{id:"heading"},"I am heading tag")
// ]),
// React.createElement("div",{id:"child2"},[
//     React.createElement("h1",{id:"heading"},"I am heading2 tag"),
//     React.createElement("h2",{id:"heading"},"I am heading2 tag")
// ]));
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent)

// React.createElement  is an =>object=>when root.render is called ReactDom takes the object and converts into html and push it to the browser
// React.createElement =>object=> HTMLElment(render)=>object is converted to html in the DOM by reactdom

const Header =()=>{
    return (
        <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
   <div className="container-fluid">
   <img src="https://img.freepik.com/free-vector/cute-girl-chef-holding-tray-platter-plate-banner-logo-cartoon-art-illustration_56104-879.jpg?w=826&t=st=1686659942~exp=1686660542~hmac=c7ac8ece954acfe44f309c426349010d3d15ccaa4e0496a5b42fe8bf1601200f" width="50" height="50" className="d-inline-block align-text-top rounded-circle"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link active" href="#">About Us</a>
        <a className="nav-link active" href="#">Contact Us</a>
        <a className="nav-link active"href="#">Cart</a>
      </div>
    </div>
  </div>
</nav>

<div className="container">
<div className="row">
<FoodCards resData={resList[0]}/>
<FoodCards resData={resList[1]}/>
<FoodCards resData={resList[2]}/>
<FoodCards resData={resList[3]}/>
<FoodCards resData={resList[4]}/>
<FoodCards resData={resList[5]}/>
<FoodCards resData={resList[6]}/>
<FoodCards resData={resList[7]}/>
</div>
</div>
</>
    )
}
const resList=[
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "10069",
    "name": "Shree Santosh Family Dhaba",
    "uuid": "14cbe2ef-40fa-415f-9f75-3890b98dfee9",
    "city": "3",
    "area": "Narayanguda",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "pro9wrdscz7nd8ezzrwg",
    "cuisines": [
    "Punjabi",
    "North Indian",
    "Chinese",
    "Tandoor"
    ],
    "tags": [],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 37,
    "minDeliveryTime": 37,
    "maxDeliveryTime": 37,
    "slaString": "37 MINS",
    "lastMileTravel": 2,
    "slugs": {
    "restaurant": "shree-santosh-family-dhaba-old-mla-quarters-road-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "3-5-890, Paras Chambers, Telugu Academy Lane,Himayath Nagar, Hyderabad",
    "locality": "Old MLA Quarters Road",
    "parentId": 3003,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6922267~p=1~eid=00000188-bac4-115d-05d1-fd4600970126",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "15% OFF",
    "subHeader": "ABOVE ₹700",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "10069",
    "deliveryTime": 37,
    "minDeliveryTime": 37,
    "maxDeliveryTime": 37,
    "lastMileTravel": 2,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "4320",
    "name": "Mehfil",
    "uuid": "4dee4970-8673-42b6-8a49-cab0efdb258f",
    "city": "3",
    "area": "Narayanguda",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "esp0fhddgfgdss5hyhpi",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Tandoor",
    "Chinese",
    "Kebabs"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 22,
    "minDeliveryTime": 22,
    "maxDeliveryTime": 22,
    "slaString": "22 MINS",
    "lastMileTravel": 2,
    "slugs": {
    "restaurant": "mehfil-narayanguda-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Near Narayanguda Flyover, Narayanguda, Hyderabad",
    "locality": "Near Narayanguda Flyover",
    "parentId": 637,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "4320",
    "deliveryTime": 22,
    "minDeliveryTime": 22,
    "maxDeliveryTime": 22,
    "lastMileTravel": 2,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.9",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "6994",
    "name": "Santosh Dhaba Exclusive",
    "uuid": "e581eb1b-746e-4b02-a31e-ccd03f835b9b",
    "city": "3",
    "area": "Koti",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "jllcesio37olflwnvter",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Chinese",
    "Italian",
    "Mexican",
    "Desserts"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "slaString": "31 MINS",
    "lastMileTravel": 1.100000023841858,
    "slugs": {
    "restaurant": "santosh-dhaba-exclusive-hanuman-tekdi-abids-koti",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "8-2-629/1/2, Hotel Jaya International Lane, Hanuman Tekdi,Abids, Hyderabad",
    "locality": "Hanuman Tekdi",
    "parentId": 8784,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=7009813~p=4~eid=00000188-bac4-115d-05d1-fd4700970434",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.1 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹100",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "6994",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "lastMileTravel": 1.100000023841858,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.0",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "367769",
    "name": "Lucky Restaurant",
    "uuid": "0d2cb79c-7f66-4009-b393-3f9015ba849d",
    "city": "3",
    "area": "MasabTank",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "qems028i3da5rxf81rbp",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Tandoor"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 48,
    "minDeliveryTime": 48,
    "maxDeliveryTime": 48,
    "slaString": "48 MINS",
    "lastMileTravel": 5,
    "slugs": {
    "restaurant": "lucky-restaurant-banjara-hills-banjara-hills",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Dana Chambers, Saifabad Rd, Sham Nagar Colony, Chintal, Hyderabad, Telangana 500004",
    "locality": "Banjara Hills",
    "parentId": 293683,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 5300,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 5300,
    "message": "",
    "title": "Delivery Charge",
    "amount": "5300",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "5 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹599",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "367769",
    "deliveryTime": 48,
    "minDeliveryTime": 48,
    "maxDeliveryTime": 48,
    "lastMileTravel": 5,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.9",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "4650",
    "name": "Bawarchi",
    "uuid": "4e784916-87ff-4951-9c21-2f0c1df1fb31",
    "city": "3",
    "area": "New Nallakunta",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "smfhai0o8rnjuzp3ngxu",
    "cuisines": [
    "Biryani",
    "Tandoor",
    "Chinese",
    "Indian",
    "Desserts",
    "Kebabs",
    "Mughlai"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 49,
    "minDeliveryTime": 49,
    "maxDeliveryTime": 49,
    "slaString": "49 MINS",
    "lastMileTravel": 3,
    "slugs": {
    "restaurant": "bawarchi-nallakunta-vidyanagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Beside Astoria Hotel, RTC Cross Road, Chikkadpally, Nallakunta, Hyderabad",
    "locality": "New Nallakunta",
    "parentId": 100,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3800,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3800,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3800",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "3 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "4650",
    "deliveryTime": 49,
    "minDeliveryTime": 49,
    "maxDeliveryTime": 49,
    "lastMileTravel": 3,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.0",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "40378",
    "name": "New Santosh Dhaba",
    "uuid": "141774cf-4e8a-4ef6-a443-4a3edf079804",
    "city": "3",
    "area": "Afzal Gunj",
    "totalRatingsString": "5000+ ratings",
    "cloudinaryImageId": "fet9j9wkyjsvxbwrddfw",
    "cuisines": [
    "Chinese",
    "North Indian"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "slaString": "33 MINS",
    "lastMileTravel": 2.700000047683716,
    "slugs": {
    "restaurant": "santosh-dhaba-abids-nampally",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "15-8-234/5 ,1st floor, Goshamahal road, Begum bazar, Hyderabad",
    "locality": "Begum Bazar Chatri",
    "parentId": 4516,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6921901~p=7~eid=00000188-bac4-115d-05d1-fd4800970713",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.7 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "40378",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "lastMileTravel": 2.700000047683716,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.8",
    "totalRatings": 5000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "4138",
    "name": "Grand Hotel",
    "uuid": "c1a1d888-51b7-4bcc-b539-f884c796a015",
    "city": "3",
    "area": "Koti",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "g1arzw6qd7g9affkmgzk",
    "cuisines": [
    "Biryani",
    "Chinese",
    "Tandoor",
    "Haleem"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 28,
    "minDeliveryTime": 28,
    "maxDeliveryTime": 28,
    "slaString": "28 MINS",
    "lastMileTravel": 1.2000000476837158,
    "slugs": {
    "restaurant": "grand-hotel-abids-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Opposite Big Bazaar, 4-1-395,Abids Road, Hyderabad",
    "locality": "Abids Road",
    "parentId": 4001,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "4138",
    "deliveryTime": 28,
    "minDeliveryTime": 28,
    "maxDeliveryTime": 28,
    "lastMileTravel": 1.2000000476837158,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "2796",
    "name": "BlueFox",
    "uuid": "4935a09a-f16b-4bdb-acaa-c3b8459075d9",
    "city": "3",
    "area": "Himayatnagar",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "f4qom4lutrgkefkb5tmv",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Chinese",
    "Tandoor"
    ],
    "tags": [],
    "costForTwo": 80000,
    "costForTwoString": "₹800 FOR TWO",
    "deliveryTime": 40,
    "minDeliveryTime": 40,
    "maxDeliveryTime": 40,
    "slaString": "40 MINS",
    "lastMileTravel": 2.5999999046325684,
    "slugs": {
    "restaurant": "blue-fox-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "3-6-199/1, Opp Brand Factory, Himayath Nagar",
    "locality": "Himayath Nagar Road",
    "parentId": 48033,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6986409~p=10~eid=00000188-bac4-115d-05d1-fd4900970a44",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.5 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "2796",
    "deliveryTime": 40,
    "minDeliveryTime": 40,
    "maxDeliveryTime": 40,
    "lastMileTravel": 2.5999999046325684,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.2",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "100942",
    "name": "Lucky Multicuisine Restaurant",
    "uuid": "8e677eb2-065e-4021-ab21-b94d70357977",
    "city": "3",
    "area": "Somajiguda",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "yeyiqeakfhjj6cmeocsc",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Tandoor",
    "South Indian"
    ],
    "tags": [],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 47,
    "minDeliveryTime": 47,
    "maxDeliveryTime": 47,
    "slaString": "47 MINS",
    "lastMileTravel": 6.400000095367432,
    "slugs": {
    "restaurant": "lucky-multicuisine-restaurant-somajiguda-somajiguda-khairtabad",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Door no;6-3-1089/f/33,somajiguda,hyd,circle no.10(old mch circle-v)khairtabad,hyd-central zone, telengana 500082.",
    "locality": "\nRaj Bhavan Quarters Colony",
    "parentId": 18963,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 6100,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 6100,
    "message": "",
    "title": "Delivery Charge",
    "amount": "6100",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 1,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "6.4 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "100942",
    "deliveryTime": 47,
    "minDeliveryTime": 47,
    "maxDeliveryTime": 47,
    "lastMileTravel": 6.400000095367432,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "IT_IS_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.7",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "13434",
    "name": "Cafe 555 & Aqeeq Restaurant",
    "uuid": "2379d20f-aa9f-49ae-8077-e275fff77faf",
    "city": "3",
    "area": "Masab Tank",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "r5ayymu2bfkse9yt3w3b",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Chinese"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 42,
    "minDeliveryTime": 42,
    "maxDeliveryTime": 42,
    "slaString": "42 MINS",
    "lastMileTravel": 5,
    "slugs": {
    "restaurant": "cafe-555-banjara-hills",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "A/12,, Masab Tank Road, Owaisi Pura, Mehdipatnam, Hyderabad, Telangana 500028",
    "locality": "Owaisi Pura",
    "parentId": 19138,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 5300,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 5300,
    "message": "",
    "title": "Delivery Charge",
    "amount": "5300",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "5 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "13434",
    "deliveryTime": 42,
    "minDeliveryTime": 42,
    "maxDeliveryTime": 42,
    "lastMileTravel": 5,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "547809",
    "name": "Theobroma",
    "uuid": "e6303a6e-b41d-4041-8f9c-dde9d3986000",
    "city": "3",
    "area": "Himayath Nagar",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "wxr6gobr4fbwrp3j91dt",
    "cuisines": [
    "Desserts"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "slaString": "33 MINS",
    "lastMileTravel": 3,
    "slugs": {
    "restaurant": "theobroma-himayath-nagar-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "3-6-138/5 & 6, GROUND FLOOR, PAPALAL CHAMBERS, HIMAYATNAGAR Circle, Hyderabad, Telangana   500029",
    "locality": "Papalal Chambers",
    "parentId": 1040,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3800,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3800,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3800",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=7063689~p=13~eid=00000188-bac4-115d-05d1-fd4a00970d45",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "3 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "ABOVE ₹159",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "547809",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "lastMileTravel": 3,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.5",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "109168",
    "name": "Al Rabea Al Arabi Cafeteria",
    "uuid": "f94c1d30-76b4-438a-bddf-6442286fbb6e",
    "city": "3",
    "area": "Santosh Nagar",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "lu7b9y7xps4icwn6xzfj",
    "cuisines": [
    "Lebanese",
    "Arabian"
    ],
    "tags": [],
    "costForTwo": 25000,
    "costForTwoString": "₹250 FOR TWO",
    "deliveryTime": 42,
    "minDeliveryTime": 42,
    "maxDeliveryTime": 42,
    "slaString": "42 MINS",
    "lastMileTravel": 6.300000190734863,
    "slugs": {
    "restaurant": "al-rabea-al-arabi-cafeteria-santhosh-nagar-santoshnagar-saidabad",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "9-8-118 BESIDE JB NASHTA POINT SANTOSH NAGAR OPPOSITE LUCKY HOTEL  HYDERABAD",
    "locality": "Opposite Lucky Hotel",
    "parentId": 7582,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 6100,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 6100,
    "message": "",
    "title": "Delivery Charge",
    "amount": "6100",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 1,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "6.3 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "109168",
    "deliveryTime": 42,
    "minDeliveryTime": 42,
    "maxDeliveryTime": 42,
    "lastMileTravel": 6.300000190734863,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "IT_IS_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "237054",
    "name": "Cafe Bahar since 1973",
    "uuid": "1f855219-ddd4-49cc-b1fa-de1354158426",
    "city": "3",
    "area": "Basheer Bagh",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "yrycuz88yy7lm2qbsdv6",
    "cuisines": [
    "Biryani",
    "Chinese",
    "Indian",
    "Kebabs",
    "Tandoor"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "slaString": "30 MINS",
    "lastMileTravel": 2.4000000953674316,
    "slugs": {
    "restaurant": "cafe-bahar-himayath-nagar-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Old MLA Quarters, Hyderguda, Basheer Bagh",
    "locality": "",
    "parentId": 316607,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.4 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "237054",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "lastMileTravel": 2.4000000953674316,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "2087",
    "name": "Agrawala Sweets",
    "uuid": "77bac0ff-7900-4c92-bb5c-b361f1e1e1dd",
    "city": "3",
    "area": "Narayanguda",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "afwesfzaa5jjqosdgvs0",
    "cuisines": [
    "Sweets",
    "Chaat"
    ],
    "tags": [],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "slaString": "31 MINS",
    "lastMileTravel": 2.0999999046325684,
    "slugs": {
    "restaurant": "agrawala-sweets-himayath-nagar",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "3-5-912, AITUC Building",
    "locality": "Liberty Road",
    "parentId": 27894,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6921115~p=19~eid=00000188-bac4-115d-05d1-fd4c00971349",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "2087",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "lastMileTravel": 2.0999999046325684,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.2",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "312800",
    "name": "Hilton Restaurant",
    "uuid": "3d80000d-209b-4f40-b4f1-542945fff926",
    "city": "3",
    "area": "Khairtabad",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "ne98mz09ikwfpz3ndws6",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Biryani"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 43,
    "minDeliveryTime": 43,
    "maxDeliveryTime": 43,
    "slaString": "43 MINS",
    "lastMileTravel": 4.699999809265137,
    "slugs": {
    "restaurant": "hilton-restaurant-somajiguda-&-khairtabad-somajiguda-&-khairtabad",
    "city": "hyderabad"
    },
    "cityState": "3",
    "address": "Ground floor, padjmaja chambers, KHAIRTABAD",
    "locality": "Somajiguda & Khairtabad",
    "parentId": 19233,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3800,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3800,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3800",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "4.6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "312800",
    "deliveryTime": 43,
    "minDeliveryTime": 43,
    "maxDeliveryTime": 43,
    "lastMileTravel": 4.699999809265137,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    }
    ]
const FoodCards = (props) => {
    const {resData}= props;
    console.log(props)
    return (
      <div class="explore-menu-section col-sm-12 col-md-3">
      <div class="container">
          <div class="row">
              <div class="">
                  <div class="shadow menu-item-card p-3 mb-3">
                      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resData.data.cloudinaryImageId} class="image-card img-fluid w-100" />
                      <h2 className="restaurant-name">{resData.data.name}</h2>
                      {/* <h1 class="menu-title">{resObj.data.}</h1> */}
                      <h1 class="cuisine">{resData.data.cuisines.join(", ")}</h1>
                            <div className="rating d-flex align-items-baseline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                            <h6 className="m-1">{resData.data.avgRating} rating</h6>
                    </div>
                      <a class="menu-item-link">View All</a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#d0b200" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg>
              </div>
              </div>
            </div>
          </div>
      </div>
      
    )
  }
  
       


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>)



