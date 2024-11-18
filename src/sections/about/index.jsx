import {data} from "../../contents/about.js"

const About = () => {
  return (
  <div className="space-y-4">
    <div className="text-primaryContent font-medium text-lg">
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

export default About;
