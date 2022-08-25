import Survey from "./Survey"

export default function Trigger (){
    
    return(
        <div aria-describedby="button container" className="trigger_container">           
            <button onClick={(e) => {document.querySelector(".survey_container").classList.toggle("hidden")}}>Feedback</button>
            <Survey/>
        </div>
    )
}