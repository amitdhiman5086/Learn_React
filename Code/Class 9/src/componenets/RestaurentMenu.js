import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>RestaurentMenu ID : {params.id}</h1>
    </div>
  );
};

export default RestaurentMenu ;
