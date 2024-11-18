import {data} from "../../contents/about.js"

const About = () => {
  return (
  <div className="space-y-4">
    <div className="text-primaryContent font-medium text-lg">
        About
    </div>
    <div>
        {data.description}
    </div>
  </div>
);
};

export default About;
