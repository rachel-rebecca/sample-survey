import React, {useEffect} from "react";
import "./styles/Survey.css"
import StarCheck from "./images/star-check.svg";
import StarUncheck from "./images/star-uncheck.svg"

export default function Survey () {
    // useEffect(() => {
    //     var handleClick() = event => {
    //         var starImg = document.querySelectorAll(".survey_star_img");
    //     var star = document.querySelectorAll(".survey_star");
    //     var starId = document.querySelectorAll(".star_input");
        
    //         return console.log(event.target)
    //       console.log('Button clicked');
    //     };
    //   }, []);
    // function clickStar (){
        var starImg = document.querySelectorAll(".survey_star_img");
        var star = document.querySelectorAll(".survey_star");
        var starId = document.querySelectorAll(".star_input");
        // star.addEventListener("click", function(e){
        //     return console.log(e.target)
        //     // htmlFor(var i = 0; i <=starId.length; i++){
        //     //     if(document.querySelector(starId[i]).value <= e.target.){

        //     //     }
        //     // }
        //     starImg.src = {StarCheck}
        // })
    // }
 return(
     <>
     <div aria-describedby="survey container" className="survey_container hidden" >
         <span aria-label="close button" id="closeButton">X</span>
         <h1 className="survey_h1">We'd love to hear from you!</h1>
         <form aria-label="questions container" className="survey_form">
             <div aria-label="question 1" className="survey_q1">
                <p>Please rate your overall experience.</p>
                <div className="star_container">
                <div aria-label="1 out of 5" className="survey_star" id="star1" onClick={(e) => {
            document.getElementById("star5_img").src = StarUncheck;
            document.getElementById("star4_img").src = StarUncheck;
            document.getElementById("star3_img").src = StarUncheck;
            document.getElementById("star2_img").src = StarUncheck;
            document.getElementById("star1_img").src = StarCheck;
            document.getElementById("starInput1").checked = true;
            return console.log(e.target)
           }}>
                    <img src={StarUncheck} alt="unchecked star" id="star1_img" className="survey_star_img" />
                    <label htmlFor="starInput1"/>
                    <input type="radio" value="1" className="star_input" id="starInput1"/>
                </div>
                <div aria-label="2 out of 5" className="survey_star" id="star2" onClick={(e) => {
            document.getElementById("star5_img").src = StarUncheck;
            document.getElementById("star4_img").src = StarUncheck;
            document.getElementById("star3_img").src = StarUncheck;
            document.getElementById("star2_img").src = StarCheck;
            document.getElementById("star1_img").src = StarCheck;
            document.getElementById("starInput2").checked = true;
            return console.log(e.target)
           }}>
                    <img src={StarUncheck} alt="unchecked star" id="star2_img" className="survey_star_img" />
                    <label htmlFor="starInput2"/>
                    <input type="radio" value="2" className="star_input" id="starInput2"/>
                </div>
                <div aria-label="3 out of 5" className="survey_star" id="star3" onClick={(e) => {
            document.getElementById("star5_img").src = StarUncheck;
            document.getElementById("star4_img").src = StarUncheck;
            document.getElementById("star3_img").src = StarCheck;
            document.getElementById("star2_img").src = StarCheck;
            document.getElementById("star1_img").src = StarCheck;
            document.getElementById("starInput3").checked = true;
            return console.log(e.target)
           }}>
                    <img src={StarUncheck} alt="unchecked star" id="star3_img" className="survey_star_img" />
                    <label htmlFor="starInput3"/>
                    <input type="radio" value="3"className="star_input" id="starInput3"/>
                </div>
                <div aria-label="4 out of 5" className="survey_star" id="star4" onClick={(e) => {
            document.getElementById("star5_img").src = StarUncheck;
            document.getElementById("star4_img").src = StarCheck;
            document.getElementById("star3_img").src = StarCheck;
            document.getElementById("star2_img").src = StarCheck;
            document.getElementById("star1_img").src = StarCheck;
            document.getElementById("starInput4").checked = true;
            return console.log(e.target)
           }}>
                    <img src={StarUncheck} alt="unchecked star" id="star4_img" className="survey_star_img" />
                    <label htmlFor="starInput4"/>
                    <input type="radio" value="4"className="star_input" id="starInput4"/>
                </div>
                <div aria-label="5 out of 5" className="survey_star" id="star5" onClick={(e) => {
            document.getElementById("star5_img").src = StarCheck;
            document.getElementById("star4_img").src = StarCheck;
            document.getElementById("star3_img").src = StarCheck;
            document.getElementById("star2_img").src = StarCheck;
            document.getElementById("star1_img").src = StarCheck;
            document.getElementById("starInput5").checked = true;
            return console.log(e.target)
           }}>
                    <img src={StarUncheck} alt="unchecked star" id="star5_img" className="survey_star_img" />
                    <label htmlFor="starInput5"/>
                    <input type="radio" value="5" className="star_input" id="starInput5"/>
                </div>
                </div>
             </div>
             <div aria-label="question 2" className="survey_q2">
                <p>Any additional comments?</p>
                <label htmlFor="textbox"/>
                <textarea placeholder="Please leave feedback here." id="textbox"></textarea>
             </div>
             <button>Submit</button>
         </form>
     </div>
     </>
 )
}