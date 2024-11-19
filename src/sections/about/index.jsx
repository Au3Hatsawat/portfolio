import { useEffect } from "react";
import {data} from "../../contents/about.js"
import PropTypes from "prop-types";

const SECTION_ID = "about-section";

const About = (prop) => {

  useEffect(() => {
    prop.onInitial(SECTION_ID);
  },[]);

  return (
  <div className="space-y-4 scroll-m-14" id={SECTION_ID}>
    <div className="text-primaryContent font-medium text-xl">
        About
    </div>
    <div className="flex flex-col gap-2">
        {data.description.map((i,index)=>(
          <span key={index}>{i}</span>
        ))}
    </div>
  </div>
);
};


PropTypes.PropTypes = {
  prop : PropTypes.node,
}

export default About;
