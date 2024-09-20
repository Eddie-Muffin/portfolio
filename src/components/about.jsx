
const me = "get to know me";

function AboutMe() {
    return (
        <div className="about">
            <h5>{me}</h5>
            <h1>About me</h1>
            <div className="aboutContainer">
                <div className="imgTextDescription">
                    <div className="imgBoxes">
                        <div className="exp">

                            <span ><i class="fa fa-flask" aria-hidden="true"></i></span>
                            <h3>Experience</h3>
                            <p>3yrs+ experience</p>
                            <p>system programmer</p>

                        </div>
                        <div className="edu">

                            <span><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>
                            <h3>Education</h3>
                            <p>Hnd in Computer Science</p>

                        </div>
                    </div>
                    <div className="textDescription"></div>
                </div>
                <div className="picFrame">
                    <img src={require("../assets/images/eddie3.jpg")} alt="" />
                </div>
            </div>
        </div>
    );
}


export default AboutMe;