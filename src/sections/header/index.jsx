import { faArrowDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../contents/header.js";

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl text-primaryTitle font-semibold">
        {data.name}
      </div>
      <div className="text-primaryContent font-semibold">{data.field}</div>
      <div className="flex gap-2 text-sm w-4/6">
      <FontAwesomeIcon icon={faLocationDot}/>
      {data.caption}</div>
      <div className="mt-4">
        <a href={data.link} target="_blank">
          <span className="rounded-md bg-primaryTitle py-2 px-4 text-primarySubContent">
            View Resume
            <span className="inline-block rotate-90 ml-2">
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
