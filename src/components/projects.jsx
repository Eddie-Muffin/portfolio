

function Projects() {
    return (
        <div className="project_wrapper">
            <h5 className="project_h5">Take a look</h5>
            <h1 className="project_h4">My recent Projects</h1>

            <div className="cards_container">

                <div className="sims">

                    <div className="top">
                        <img src={require("../assets/images/phone.jpg")} alt="" />
                    </div>
                    <div className="down">
                        <button><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></button>
                        <button><a href="#">Live Demo</a></button>
                    </div>

                </div>
                <div className="sims">

                    <div className="top">
                        <img src={require("../assets/images/phone1.jpg")} alt="" />
                    </div>
                    <div className="down">
                        <button><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></button>
                        <button><a href="#">Live Demo</a></button>
                    </div>

                </div>
                <div className="sims">

                    <div className="top">
                        <img src={require("../assets/images/phone2.jpg")} alt="" />
                    </div>
                    <div className="down">
                        <button><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></button>
                        <button><a href="#">Live Demo</a></button>
                    </div>

                </div>

            </div>
        </div>
    );
}


export default Projects;