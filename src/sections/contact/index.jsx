import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className="flex items-end gap-4 text-2xl">
            <a href="https://github.com/Au3Hatsawat" target="_blank"><FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/hatsawat-intrasod-b37587338/" target="_blank"><FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin}/></a>
        </div>
    )
}

export default Contact;