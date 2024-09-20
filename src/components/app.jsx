import Header from "./header";
import Profile from "./profile";
import profileDetails from "../assets/objs/profileDetails";
import AboutMe from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";


function App() {
    return (
        <div className="container">

            <Header />

            {profileDetails.map(profiles => {
                return (
                    <Profile
                        key={profiles.id}
                        photo={profiles.photo}
                        title={profiles.title}
                        name={profiles.name}
                        skill={profiles.skill}
                    />

                );
            })}

            <AboutMe/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
            
            
            
            
            

        </div>
    );

}

export default App;