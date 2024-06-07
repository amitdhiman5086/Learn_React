import { IMG_CDN } from "./config";
export const RestrountCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    avgRatingString,
  }) => {
    // console.log(info.name);
    return (
      <div className="cards">
        <img
          src={
            IMG_CDN +
            cloudinaryImageId
          }
        ></img>
        <h2>{name}</h2>
  
        <h2>{cuisines.join(", ")}</h2>
        <h3>{avgRatingString} Stars</h3>
      </div>
    );
  };

  export default RestrountCard ;
  