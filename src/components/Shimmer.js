import React from 'react'
import Skeleton from "react-loading-skeleton";
// import "./shimmer.css"
import 'react-loading-skeleton/dist/skeleton.css'


const SkeletonItem = () => {
  return (
  
  <>
 
  <h2><Skeleton duration={1} height={30} width={200} /></h2>
  <div style={{ display: 'flex' , flexWrap:'wrap', alignItems:"center"}}>
  
    {Array(20)
      .fill()
      .map((item, index) => (
        <div key={index} >
          
          <Skeleton style={{margin:'25px'}} height={500} width={300}
          
          />
          {/* <h2><Skeleton duration={1} height={30} width={200} style={{margin:'25px'}}/></h2> */}
        </div>
      ))}
  </div>
</>
  )
}

const SkeletonCard = () => {
  return (
    <>
      <SkeletonItem  />
      {/* <SkeletonItem /> */}
    </>
  );
};

export default SkeletonCard


 