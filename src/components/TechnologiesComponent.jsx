/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const TechnologiesCompononent = ({icon , name}) => {
    const [isMouseEnter , setIsMouseEnter] = useState(false);
  return (
    <div 
    className={`flex gap-2 text-lg px-2 py-1 ${isMouseEnter ? "bg-gray-500 rounded-md" : ""}`}
    onMouseEnter={() => setIsMouseEnter(true)}
    onMouseLeave={() => setIsMouseEnter(false)}
    >
      <div>
        <FontAwesomeIcon className={`${isMouseEnter ? "text-primaryContent" : ""}`} icon={icon} />
      </div>
      <div className={`${isMouseEnter ? "text-primaryContent" : ""}`} >{name}</div>
    </div>
  );
};


export default TechnologiesCompononent;
