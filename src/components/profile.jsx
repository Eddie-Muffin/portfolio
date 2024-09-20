

function Profile(props) {
    return (

        /**
         * 
         * profile on the left side 
         * circled shape
         * Detials on the right side ,(titile , name and skill)
         */
        <div className="profile">


            <img src={props.photo} alt="profilePic" />



            <div className="details">

                <h4>{props.title}</h4>
                <h1>{props.name}</h1>
                <h2>{props.skill}</h2>
            </div>

            <div className="more">
                <button><a href="#">Download Cv</a></button>
                <div className="social">
                    <span><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></span>
                    <span><a href="#"><i class="fa fa-twitch" aria-hidden="true"></i></a></span>
                </div>
            </div>

        </div>
    );
}


export default Profile;