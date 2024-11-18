import { faDocker, faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Technologies = () => {
    return (
        <div className="space-y-4">
            <div className="text-primaryContent font-medium text-lg">Technologies</div>
            <div className="flex gap-4">
                <div className="flex gap-2 text-lg">
                    <div><FontAwesomeIcon icon={faHtml5}/></div>
                    <div>HTML</div>
                </div>
                <div className="flex gap-2 text-lg">
                    <div><FontAwesomeIcon icon={faDocker}/></div>
                    <div>Docker</div>
                </div>
                <div className="flex gap-2 text-lg">
                    <div><FontAwesomeIcon icon={faReact}/></div>
                    <div>React</div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;