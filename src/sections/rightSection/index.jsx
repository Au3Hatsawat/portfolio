import About from "../about";
import Experince from "../experience";
import Footer from "../footer";
import Technologies from "../technologies";
import PropTypes from "prop-types";

const RightSection = (prop) => {
    return (
      <div className="grid gap-y-20 px-5">
        <About onInitial = {prop.onInitial}/>
        <Technologies onInitial = {prop.onInitial}/>
        <Experince onInitial = {prop.onInitial}/>
        <Footer />
      </div>
    )
}

PropTypes.PropTypes = {
  prop : PropTypes.node,
}


export default RightSection;