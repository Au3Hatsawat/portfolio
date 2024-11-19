import { useEffect } from "react";
import ExperinceComponent from "../../components/ExperinceComponent";
import { data } from "../../contents/experience.js";
import PropTypes from "prop-types";

const SECTION_ID = "experience-section";

const Experince = (prop) => {

    useEffect(() => {
        prop.onInitial(SECTION_ID);
    },[]);
    
    return (
        <div className="space-y-4 scroll-m-14" id={SECTION_ID}>
            <div className="text-primaryContent font-medium text-xl">Projects</div>
            {
            data.map((i) => (
                <ExperinceComponent
                key={`${SECTION_ID}-${i.id}`}
                title={i.title} 
                date={i.date} 
                description={i.description}
                items= {i.items}
                skills= {i.skills}
                links={i.links}
                photo={i.photo}
                />
            ))}
        </div>
    )
}

PropTypes.PropTypes = {
    prop : PropTypes.node,
  }

export default Experince;