const Shimmer = () => {
  return (
    <div className="flex flex-wrap ">
      {Array(30)
        .fill("")
        .map((e, index) => (
          <div 
          key={index} className="m-3 w-52 h-72 bg-gray-500 animate-pulse"></div>
        ))}
    </div>
  );
};

export default Shimmer;
