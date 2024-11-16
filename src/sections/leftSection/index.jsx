import Contact from "../contact";
import Header from "../header";
import NavBar from "../navbar";

const LeftSection = () => {
    return (
    <div>
        <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[85vh] px-5">
          <Header/>
          <NavBar/>
          <Contact/>
        </div>
    </div>
      )
}

export default LeftSection;