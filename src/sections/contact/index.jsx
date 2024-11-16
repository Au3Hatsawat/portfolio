import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className="flex items-end gap-4 text-2xl">
            <FontAwesomeIcon className='hover:scale-150 hover:text-primaryTitle transition-all' icon={faGithub}/>
            <FontAwesomeIcon className='hover:scale-150 hover:text-primaryTitle transition-all' icon={faLinkedin}/>
        </div>
    )
}

export default Contact;