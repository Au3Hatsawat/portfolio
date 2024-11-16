import About from "../about";
import Experince from "../experience";

const RightSection = () => {
    return (
      <div className="grid gap-y-35 px-5">
        <About/>
        <Experince />
      </div>
    )
}

export default RightSection;