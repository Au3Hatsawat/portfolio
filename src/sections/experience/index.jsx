import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ExperinceComponent from "../../components/ExperinceComponent";


const Experince = () => {
    return (
        <div className="space-y-4">
            <div className="text-primaryContent font-medium">Experince</div>
            <ExperinceComponent items={[{id:1,icon:faGithub}]} skills={[{id:1,name:"React"},{id:2,name:"Flutter"}]} />
            <ExperinceComponent items={[{id:1,icon:faGithub},{id:2,icon:faYoutube}]} skills={[{id:1,name:"React"}]} />
        </div>
    )
}

export default Experince;