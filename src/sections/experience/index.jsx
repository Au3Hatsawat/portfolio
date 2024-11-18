import ExperinceComponent from "../../components/ExperinceComponent";
import { data } from "../../contents/experience.js";

const SECTION_ID = "experience-section";

const Experince = () => {

    return (
        <div className="space-y-4">
            <div className="text-primaryContent font-medium text-lg">Projects</div>
            {
            data.map((i) => (
                <ExperinceComponent
                key={`${SECTION_ID}-${i.id}`}
                title={i.title} 
                date={i.date} 
                description={i.description}
                items= {i.items}
                skills= {i.skills}
                />
            ))}
        </div>
    )
}

export default Experince;