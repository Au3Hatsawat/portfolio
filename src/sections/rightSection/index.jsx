import About from "../about";
import Experince from "../experience";
import Technologies from "../technologies";

const RightSection = () => {
    return (
      <div className="grid gap-y-35 px-5">
        <About />
        <Technologies />
        <Experince />
      </div>
    )
}

export default RightSection;