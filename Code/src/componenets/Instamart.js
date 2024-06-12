import { useState } from "react";

const Section = ({ title, discription, isVisible, checkState }) => {
  // const [isVisible, setIsVisible] = useState(false);

  const child = () => {
    checkState(title);
  };

  return (
    <div className="p-2 m-8  border border-black">
      <h2 className="text-xl font-bold text-start">{title}</h2>
      {isVisible ? (
        <button
          className="flex text-start p-2 m-2  border border-black rounded-md text-black hover:bg-black hover:text-white"
          onClick={child}
        >
          Hide
        </button>
      ) : (
        <button
          className="flex text-start p-2 m-2  border border-black rounded-md text-black hover:bg-black hover:text-white"
          onClick={child}
        >
          Show
        </button>
      )}
      {isVisible && <p className="text-start">{discription}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState("");

  const checkState = (section) => {
    setSectionConfig((prevConfig) => {
      return prevConfig === section ? " " : section;
    });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold ">Instamart</h1>
      <Section
        title={"About Intamart"}
        discription={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={sectionConfig === "About Intamart"}
        checkState={checkState}
      />
      <Section
        title={"Team Intamart"}
        discription={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={sectionConfig === "Team Intamart"}
        checkState={checkState}
      />
      <Section
        title={"Careers of Intamart"}
        discription={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={sectionConfig === "Careers of Intamart"}
        checkState={checkState}
      />
    </div>
  );
};

export default Instamart;
