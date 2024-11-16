/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperinceComponent = (props) => {
    const item = props.items;
    const skill = props.skills;
    
    return (<div className="grid grid-cols-[20%_80%]">
        <div>
            <div>Time</div>
            <div>Image</div>
        </div>
        <div className="grid gap-y-4">
            <div>Title</div>
            <div className="flex gap-4 text-xl">
                {
                    item.map((index)=>(
                        <FontAwesomeIcon key={index.id} icon={index.icon} />
                    ))
                }
            </div>
            <div className="text-sm">Description</div> 
            <div className="flex gap-4 text-sm">
                {
                    skill.map((i)=>(
                        <div className="rounded-md bg-primaryContent px-2 py-1" key={i.id}>{i.name}</div>
                    ))
                }
            </div>
        </div>
    </div>);
}


export default ExperinceComponent;