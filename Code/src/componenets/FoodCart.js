import { IMG_CDN } from "./config";
const FoodCart = ({
    name,
    imageId,
    description,
    price,
  }) => {
    // console.log(info.name);
    return (
      <div className="w-52 p-3 m-3 shadow-lg hover:scale-110  rounded-lg   grid">
        <img
          src={
            IMG_CDN +imageId
          }
        ></img>
        <h2 className="font-bold text-2xl">{name}</h2>
  
        <h2 className="text-center text-sm">{description}</h2>
        <h3 className="font-bold" >Price :{price/100} Rupess </h3>
        
      </div>
    );
  };

  export default FoodCart ;
  