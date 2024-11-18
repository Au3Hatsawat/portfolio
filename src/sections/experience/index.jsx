import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ExperinceComponent from "../../components/ExperinceComponent";



const Experince = () => {

    return (
        <div className="space-y-4">
            <div className="text-primaryContent font-medium text-lg">Experince</div>
            <ExperinceComponent 
            title = {"Server Status Checker"}
            date = {"Jul 2024"}
            description = {"• Created Flutter application for android that checks if an Ip address or HTTP is still online."}
            items={[{id:1,icon:faGithub}]} 
            skills={[{id:1,name:"Flutter"},{id:2,name:"Android Studio"}]} 
            />
            <ExperinceComponent 
            title = {"Minimal Portfolio"}
            date = {"Nov 2024"}
            description = {"• Created a portfolio website with React and Tailwind."}
            items={[{id:1,icon:faGithub},{id:2,icon:faYoutube}]} 
            skills={[{id:1,name:"React"},{id:2,name:"Tailwind"}]} 
            />
        </div>
    )
}

export default Experince;