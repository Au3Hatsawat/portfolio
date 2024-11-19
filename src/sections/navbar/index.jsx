import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbar } from "../../contents/navbar.js";
import { useState } from "react";
import PropTypes from "prop-types";


const NavBar = (prop) => {

    const handleClick = (sectionId) => {
      document.getElementById(sectionId).scrollIntoView({behavior : "smooth"})
      document.getElementById(sectionId).className
    }

    const [isMouseEnter , setIsMouseEnter] = useState(false);
    return (
        <div className='hidden lg:flex flex-col gap-4 font-semibold'>
            {
              navbar.map((e,i)=>(
                <div key={`nav-${e}-${i}`}
                      onClick={() => handleClick(e.SECTION_ID)}
                      onMouseEnter={() => setIsMouseEnter({[e.tilte] : true})}
                      onMouseLeave={() => setIsMouseEnter({[e.tilte] : false})}
                      className="cursor-pointer flex"
                >
                  <div><FontAwesomeIcon className={`mr-2 ${prop.currentSection === e.SECTION_ID ? "text-primaryTitle" : isMouseEnter[e.tilte] ? "text-primarySubContent" : "hidden"} new-arrow`} icon={faArrowRight}/></div>
                  <div className={`${prop.currentSection === e.SECTION_ID ? "translate-x-4 text-primaryTitle" : isMouseEnter[e.tilte] ? "translate-x-4 text-primaryContent" : ""} duration-500 ease-out`}>{e.tilte}</div>
                </div>
              ))
            }
          </div>
    )
}

PropTypes.PropTypes = {
  prop : PropTypes.node,
}

export default NavBar;