import Contact from "../contact";
import Header from "../header";
import NavBar from "../navbar";
import PropTypes from "prop-types";

const LeftSection = (prop) => {
    return (
    <div className="mb-7 lg:mb-0">
        <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[85vh] px-5">
          <Header/>
          <NavBar navbarItems = {prop.navbarItems} currentSection={prop.currentSection}/>
          <Contact/>
        </div>
    </div>
      )
}

PropTypes.PropTypes = {
  prop : PropTypes.node,
}

export default LeftSection;