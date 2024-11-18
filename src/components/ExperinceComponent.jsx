/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ExperinceComponent = (props) => {
    const [isMouseEnter , setIsMouseEnter] = useState(false);
    const key = props.key;
    const item = props.items;
    const skill = props.skills;
    const title = props.title;
    const date = props.date;
    const description = props.description;
    
    return (
    <div 
    key={key}
    className={`grid grid-cols-[20%_80%] px-2 py-6 transition-all ${isMouseEnter ? "bg-gray-500 rounded-md" : ""}`}
    onMouseEnter={() => setIsMouseEnter(true)}
    onMouseLeave={() => setIsMouseEnter(false)}
    >
        <div>
            <div><span className={`text-sm ${isMouseEnter ? "text-primaryContent" : ""}`} >{date}</span></div>
            <div>Image</div>
        </div>
        <div className="grid gap-y-4">
            <div className={`text-primaryContent text-lg ${isMouseEnter ? "text-primaryTitle" : ""}`}>{title}</div>
            <div className="flex gap-4 text-xl">
                {
                    item.map((index)=>(
                        <FontAwesomeIcon className={`hover:scale-125 transition-all ${isMouseEnter ? "text-primaryTitle" : ""}`} key={index.id} icon={index.icon} />
                    ))
                }
            </div>
            <div className="text-base text-primaryContent">{description}</div> 
            <div className="flex gap-4 text-sm">
                {
                    skill.map((index)=>(
                        <div className={`rounded-md bg-primarySubContent px-2 py-1 text-primaryContent ${isMouseEnter ? "text-primaryTitle" : ""} `} key={index.id}>{index.name}</div>
                    ))
                }
            </div>
        </div>
    </div>);
}


export default ExperinceComponent;