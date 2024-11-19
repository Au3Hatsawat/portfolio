import {
  faDartLang,
  faFlutter,
  faHtml5,
  faJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import TechnologiesCompononent from "../../components/TechnologiesComponent";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect } from "react";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const SECTION_ID = "technologies-section";


const Technologies = (prop) => {

  useEffect(() => {
    prop.onInitial(SECTION_ID)
  },[]);

  return (
    <div className="space-y-4 scroll-m-14" id={SECTION_ID}>
      <div className="text-primaryContent font-medium text-xl">
        Technologies
      </div>
      <div className="flex justify-center">
        <Carousel
          className="max-w-prose m-0"
          showArrows={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
        >
          <div className="mb-12">
            <div>Web Application Technologies</div>
            <div className="mt-3 flex gap-5 justify-center">
              <TechnologiesCompononent icon={faHtml5} name="HTML" />
              <TechnologiesCompononent icon={faJs} name="Javascript" />
              <TechnologiesCompononent icon={faReact} name="React" />
              <TechnologiesCompononent icon={faPhp} name="PHP" />
              <TechnologiesCompononent icon={faDatabase} name="Database" />
            </div>
          </div>
          <div className="mb-12">
            <div>Mobile Application Technologies</div>
            <div className="mt-3 flex gap-5 justify-center">
              <TechnologiesCompononent icon={faFlutter} name="Flutter" />
              <TechnologiesCompononent icon={faDartLang} name="Dart" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Technologies;
