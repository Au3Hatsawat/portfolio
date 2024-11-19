import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PropTypes from "prop-types";


const ExperinceComponent = (prop) => {
    const [isMouseEnter , setIsMouseEnter] = useState(false);
    const item = prop.items;
    const skill = prop.skills;
    const title = prop.title;
    const date = prop.date;
    const description = prop.description;
    const links = prop.links;
    const photo = prop.photo;
    
    return (
    <div 
    className={`grid grid-cols-[20%_80%] px-2 py-6 transition-all ${isMouseEnter ? "bg-gray-500 rounded-md" : ""}`}
    onMouseEnter={() => setIsMouseEnter(true)}
    onMouseLeave={() => setIsMouseEnter(false)}
    >
        <div>
            <div><span className={`text-base ${isMouseEnter ? "text-primaryContent" : ""}`} >{date}</span></div>
            <div><img className="w-3/5 rounded-md" src={photo}/></div>
        </div>
        <div className="grid gap-y-4">
            <div className={`text-primaryContent text-lg ${isMouseEnter ? "text-primaryTitle" : ""}`}>
                {title}
            </div>
            <div className="flex gap-4 text-xl">
                {
                    item.map((index)=>(
                        <a href={links[index.id-1]} target="_blank" key={index.id}><FontAwesomeIcon className={`hover:scale-125 transition-all ${isMouseEnter ? "text-primaryTitle" : ""}`} icon={index.icon} /></a>
                    ))
                }
            </div>
            <div className="text-base text-primaryContent">
                {
                    description.map((e,i)=>(
                        <div key={i}>{e}</div>
                    ))
            }
            </div> 
            <div className="flex gap-4 text-sm">
                {
                    skill.map((index)=>(
                        <div key={index.id}>
                            <div className={`rounded-md bg-primarySubContent px-2 py-1 text-primaryContent ${isMouseEnter ? "text-primaryTitle" : ""} `} >{index.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>);
}


PropTypes.PropTypes = {
    prop : PropTypes.node,
}


export default ExperinceComponent;